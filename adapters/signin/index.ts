interface SignInProps {
  user: {
    id: string;
    name: string;
    image?: string | null;
    email: string;
  };
  session: {
    token_type: string;
    access_token: string;
    refresh_token: string;
    expires_at?: string | number;
  };
}

export const signInResponseAdapter = ({ user, session }: SignInProps) => {
  if (!user || !session) return null;

  const success = {
    message: 'Welcome back',
    data: {
      id: user.id,
      name: user.name,
      image: user.image,
      email: user.email,
      tokenType: session.token_type,
      accessToken: session.access_token,
      refreshToken: session.refresh_token,
      exp: session.expires_at,
    },
    status: 200,
  };

  const error = {
    message: 'Oops something went wrong',
    data: {},
    status: 500,
  };

  return {
    success,
    error,
  };
};
