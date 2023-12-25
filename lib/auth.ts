import { login } from '@/services';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import Credentials, { CredentialInput } from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import Stripe from 'stripe';

import { prisma } from './prisma';

import type { Adapter } from 'next-auth/adapters';

import { sessionAdapter, tokenAdapter } from '@/adapters/auth';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma) as Adapter,
  session: {
    strategy: 'jwt',
  },
  pages: { signIn: '/login' },
  providers: [
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {} as Record<string, CredentialInput>,
      async authorize({ email, password }) {
        try {
          const { data, message } = await login({ data: { email, password } });

          if (data) return data;
          throw new Error(message);
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  events: {
    signIn: async ({ user, account }) => {
      if (user.id && account.provider !== 'google') {
        await prisma.account.update({
          where: {
            provider_providerAccountId: {
              provider: 'email',
              providerAccountId: user.id,
            },
          },
          data: {
            access_token: user.accessToken,
            refresh_token: user.refreshToken,
            expires_at: user.exp as number,
            token_type: 'Bearer',
          },
        });
      }
    },
    createUser: async ({ user }) => {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2023-08-16',
      });

      try {
        const customer = await stripe.customers.create({
          email: user.email || undefined,
          name: user.name || undefined,
        });

        await prisma.user.update({
          where: { id: user.id },
          data: { stripeCustomerId: customer.id },
        });
      } catch (e) {
        throw new Error('Error', e);
      }
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) return tokenAdapter({ token, user });
      return Promise.resolve(token);
    },
    async session({ token, session }) {
      if (token) return sessionAdapter({ token });
      return Promise.resolve(session);
    },
  },
};
