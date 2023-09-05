export type SessionAdapterProps = {
  data: {
    user?: {
      name?: string;
      email?: string;
      image?: string;
    };
    expires: string;
  };
};

export type SessionDataProps = {
  name: string;
  email: string;
  avatar: string;
  info?: Object;
};
