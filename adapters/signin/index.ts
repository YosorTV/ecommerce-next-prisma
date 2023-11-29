interface SignInProps {
  key: 'success' | 'existed' | 'password' | 'error';
  user?: {
    id: string;
    name?: string;
    image?: string | null;
    email?: string;
  };
  session?: {
    token_type: string;
    access_token: string;
    refresh_token: string;
    expires_at?: string | number;
  };
}

interface Response {
  [key: string]: {
    message: string;
    data?: {
      id: string;
      name: string;
      image?: string | null;
      email: string;
      tokenType?: string;
      accessToken?: string;
      refreshToken?: string;
      exp?: string | number;
    } | null;
    status?: number;
  };
}

export const signInResponseAdapter = ({ user, session, key }: SignInProps) => {
  const response: Response = {
    success: {
      message: 'Welcome back',
      data: {
        id: user && user.id,
        name: user && user.name,
        image: user && user.image,
        email: user && user.email,
        tokenType: session && session.token_type,
        accessToken: session && session.access_token,
        refreshToken: session && session.refresh_token,
        exp: session && session.expires_at,
      },
      status: 200,
    },
    error: {
      message: 'Incorrect credentials',
      status: 404,
    },
    existed: {
      message: 'Provided email not found',
      status: 404,
    },
    password: {
      message: 'Incorrect password',
      status: 404,
    },
  };

  return response[key];
};
