import { JWT } from 'next-auth/jwt';

type UserDataProps = {
  id: string;
  accessToken: string;
  refreshToken: string;
  exp: string | number;
  name: string;
  email?: string;
  picture?: string;
  image?: string;
};

export type TokenAdapterProps = {
  token: UserDataProps | JWT;
  user: UserDataProps;
};

export type SessionAdapterProps = {
  token: UserDataProps | any;
};
