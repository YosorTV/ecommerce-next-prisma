'use client';

import React, { FC } from 'react';
import { FormProvider } from 'react-hook-form';

import { FormProps, InputProps } from './types';

import { useHookFormParams } from '@/lib/hookform';

export const Form: FC<FormProps<any>> = ({
  children,
  state = {},
  className,
  schema = null,
  ...rest
}) => {
  const methods = useHookFormParams({ state, schema });

  const submitHandler = (data: any) => {
    rest?.onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(submitHandler)}
        className={className}
      >
        {React.Children.map(children, (child, index) => {
          return child.props?.name
            ? React.createElement<InputProps>(child.type, {
                ...{
                  ...child?.props,
                  register: methods.register,
                  key: `${child.props?.name}_${index}`,
                  error: methods.formState.errors[child.props?.name]?.message,
                },
              })
            : child;
        })}
      </form>
    </FormProvider>
  );
};
