import * as Yup from 'yup';

const PASSWORD_REG_EX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]\\|;:'",.<>/?-]).{8,}$/;

const emailSchema = Yup.string().email('Enter correct email').required();
const passwordSchema = Yup.string()
  .required()
  .matches(
    PASSWORD_REG_EX,
    'password must contain at least 8 characters, one uppercase, one number and one special case character'
  );

const loginSchema = Yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});

const signupSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: emailSchema,
  password: passwordSchema,
});

export const resetPasswordSchema = Yup.object().shape({
  email: emailSchema,
});

export const updatePasswordScema = Yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});

export const schemas = {
  login: loginSchema,
  signup: signupSchema,
  'reset-password': resetPasswordSchema,
  'update-password': updatePasswordScema,
};
