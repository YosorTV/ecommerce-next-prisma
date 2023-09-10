import { InputHTMLAttributes } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Yup from 'yup';

export interface FormProps<T> {
  children: any;
  state?: Partial<T> | null;
  className?: string;
  validationSchema?: Yup.ObjectSchema<any>;
  onSubmit: SubmitHandler<T>;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: ReturnType<typeof useForm>['register'];
}
