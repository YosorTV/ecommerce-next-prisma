'use client';

import { FC, ReactNode, useEffect, useState } from 'react';

type HydrateProps = {
  children: ReactNode;
};

export const Hydrate: FC<HydrateProps> = ({ children }) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated ? children : null;
};
