export const UpdatePassResponseAdapter = () => {
  const success = {
    message: 'You have successfully update a password',
    status: 200,
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
