import { FC } from 'react';

import { Avatar, Button, Hydrate, ThemeChange } from '@/components';
import { cn } from '@/lib';
import Image from 'next/image';
import Link from 'next/link';

import { abril } from '@/assets/fonts';
import { ShoppingIcon } from '@/assets/icons/ShoppingIcon';
// eslint-disable-next-line import/extensions
import Logo from '@/public/DSLogo.svg';

export const Navbar: FC<any> = ({ user, params = [] }) => {
  const prinLinks = ({ href = '', text = '', className = '', ...rest }) => (
    <Link
      href={href}
      key={href}
      className={cn(
        'text-xl text-base-200 underline',
        abril.className,
        className
      )}
      {...rest}
    >
      {text}
    </Link>
  );

  return (
    <nav className='flex w-full items-center gap-5 border-b border-b-gray-300 px-5 py-2.5'>
      <Link href='/'>
        <Image height={80} width={100} src={Logo} alt='logo' />
      </Link>
      <div className='relative flex w-full items-center justify-end'>
        <div className='flex w-full items-center justify-end gap-x-5'>
          <ShoppingIcon />
          <Hydrate>
            <ThemeChange />
          </Hydrate>
          {user ? (
            <>
              {user.name && (
                <div className='dropdown-end dropdown flex cursor-pointer items-center justify-center gap-5'>
                  {user.avatar ? (
                    <Avatar
                      path={user.avatar}
                      alt={`${user.name}-logo`}
                      tabIndex={-1}
                    />
                  ) : (
                    <div
                      tabIndex={-1}
                      className='shadow-avatar flex h-10 w-10 items-center justify-center rounded-full bg-secondary p-2.5 font-bold'
                    >
                      <p className='text-base-300'>{user.name[0]}</p>
                    </div>
                  )}
                  <ul
                    tabIndex={0}
                    className='dropdown-content menu top-12 min-w-btn space-y-2.5 rounded-sm bg-base-100 shadow'
                  >
                    <li>
                      <Link
                        href='/dashboard'
                        className='text-base font-semibold'
                      >
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Button
                        variant='signOut'
                        className='text-base font-semibold capitalize hover:bg-none'
                      />
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <div className='flex items-center gap-x-5'>
              {params.map(prinLinks)}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
