'use client';

import { FC } from 'react';

import { Toaster } from 'sonner';

import { Hydrate } from '@/components/elements';

export const ClientSideRender: FC = () => {
  return (
    <Hydrate>
      <Toaster position='top-right' richColors closeButton />
    </Hydrate>
  );
};
