import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type HookFormProps = {
  state?: any;
  schema?: Yup.ObjectSchema<any>;
};

export const useHookFormParams = ({ state, schema }: HookFormProps) => {
  const methods = useForm({
    mode: 'all',
    defaultValues: state,
    resolver: schema ? yupResolver(schema) : null,
  });

  return methods;
};
