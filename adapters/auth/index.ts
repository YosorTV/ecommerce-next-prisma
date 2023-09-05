import { SessionAdapterProps, SessionDataProps } from './types';

export const sessionAdapter = ({
  data,
}: SessionAdapterProps): SessionDataProps => {
  if (!data) throw new Error('UNATHORIZED');

  const { user, ...rest } = data;

  return {
    name: user?.name,
    email: user?.email,
    avatar: user?.image,
    info: { ...rest },
  };
};
