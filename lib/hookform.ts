import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

export const useFormParams = ({ state, validationSchema }: any) => {
  return useForm({
    defaultValues: state,
    resolver: validationSchema ? yupResolver(validationSchema) : null,
  });
};
