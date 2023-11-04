import { hash } from 'bcrypt';

export const UpdateProfileResponseAdapter = () => {
  const success = {
    message: 'You have successfully update your password',
    status: 201,
  };

  const error = {
    message: 'Oops something went wrong',
    status: 500,
  };

  return {
    success,
    error,
  };
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
