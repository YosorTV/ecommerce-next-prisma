'use client';

import { useTheme } from '@/store';

import { MoonIcon, SunIcon } from '@/assets/icons';

export const ThemeChange = () => {
  const themeStore = useTheme();

  const handleTheme = () => {
    if (themeStore.theme === 'light') {
      themeStore.setTheme('sunset');
    } else {
      themeStore.setTheme('light');
    }
  };

  return (
    // eslint-disable-next-line prettier/prettier
    <label className='swap-rotate swap'>
      <input
        defaultChecked={themeStore.theme === 'light'}
        type='checkbox'
        className='theme-controller'
        value='synthwave'
        onClick={handleTheme}
      />

      <SunIcon className='swap-on fill-base-200' />
      <MoonIcon className='swap-off fill-base-200' />
    </label>
  );
};
