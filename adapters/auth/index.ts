import {
  SessionAdapterProps,
  SignInAdapterProps,
  TokenAdapterProps,
} from './types';

export const sessionAdapter = ({ token }: SessionAdapterProps) => {
  if (!token) throw new Error('UNATHORIZED');

  return {
    accessToken: token.accessToken,
    refreshToken: token.refreshToken,
    exp: token.exp,
    user: {
      id: token.id,
      name: token.name,
      email: token.email,
      avatar: token.picture,
    },
  };
};

export const tokenAdapter = ({ token, user }: TokenAdapterProps) => {
  if (!token || !user) return null;

  token.id = user.id;
  token.accessToken = user.accessToken;
  token.refreshToken = user.refreshToken;
  token.exp = user.exp;
  token.name = user.name;
  token.email = user.email;
  token.picture = user.image;

  return token;
};

export const signInParamsAdapter = (credentials: SignInAdapterProps) => {
  if (!credentials) return null;

  return {
    email: credentials.email,
    password: credentials.password,
    callbackUrl: '/',
    redirect: false,
  };
};
