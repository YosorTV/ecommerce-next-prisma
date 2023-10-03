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

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(rest?.onSubmit)}
        className={className}
      >
        {React.Children.map(children, (child) => {
          return child.props?.name
            ? React.createElement<InputProps>(child.type, {
                ...{
                  ...child?.props,
                  register: methods.register,
                  key: child.props?.name,
                },
              })
            : child;
        })}
      </form>
    </FormProvider>
  );
};
