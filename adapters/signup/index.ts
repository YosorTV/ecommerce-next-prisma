import { hash } from 'bcrypt';

interface CreatedUser {
  data: {
    name: string;
    email: string;
    password: string;
  };
}

export const createdUserAdapter = async ({ data }: CreatedUser) => {
  if (!data) return null;

  const { name, email, password } = data;

  const hashedPassword = await hash(password, 10);

  return {
    data: { email, name, password: hashedPassword },
  };
};

interface ByEmail {
  data: {
    email: string;
  };
}

export const byEmailAdapter = ({ data }: ByEmail) => {
  if (!data) return null;

  const { email } = data;

  return {
    where: { email },
  };
};

export const userResponseAdapter = () => {
  const success = {
    message: 'You have been successfully registred, please confirm your email',
    status: 201,
  };

  const existed = {
    message: 'User already exists',
    status: 409,
  };

  const error = {
    message: 'Oops something went wrong',
    status: 500,
  };

  return {
    success,
    existed,
    error,
  };
};
