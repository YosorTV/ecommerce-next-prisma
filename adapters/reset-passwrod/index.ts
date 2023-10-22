export const ResetPassResponseAdapter = () => {
  const success = {
    message:
      'You have successfully sent a request to reset your password. Check provided email for details',
    status: 201,
  };

  const existed = {
    message: 'Provided email not found',
    status: 404,
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
