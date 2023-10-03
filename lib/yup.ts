import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Enter correct email').required(),
  password: Yup.string().required(),
});
