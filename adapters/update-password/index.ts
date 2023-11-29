import { hash } from 'bcrypt';

type Response = {
  [key: string]: {
    message: string;
    status: number;
  };
};

type Props = 'success' | 'error';

export const UpdateProfileResponseAdapter = (key: Props) => {
  const response: Response = {
    success: {
      message: 'You have successfully update your password',
      status: 201,
    },
    error: {
      message: 'Oops something went wrong',
      status: 500,
    },
  };

  return response[key];
};

type UpdateProfileTypes = {
  data: {
    email: string;
    password: string;
  };
};

export const UpdateProfileAdapter = async ({ data }: UpdateProfileTypes) => {
  if (!data) return null;

  const password = await hash(data.password, 10);

  return {
    where: { email: data.email },
    data: { password },
  };
};
