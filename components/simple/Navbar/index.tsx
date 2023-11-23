import { FC } from 'react';

import { Avatar, Button } from '@/components';
import Link from 'next/link';

import { ShoppingIcon } from '@/assets/icons/ShoppingIcon';

export const Navbar: FC<any> = ({ user, params = [] }) => {
  const prinLinks = params.map(
    ({ href = '', text = '', className = '', ...rest }) => (
      <Link href={href} key={href} className={className} {...rest}>
        {text}
      </Link>
    )
  );

  return (
    <nav className='flex w-full items-center gap-5 border-b border-b-gray-300 bg-white px-5 py-2.5'>
      <Link href='/'>Logo</Link>
      <div className='flex w-full items-center justify-end'>
        {user ? (
          <div className='flex w-full items-center justify-end gap-x-5'>
            <div className='flex items-center justify-center gap-5'>
              {user.avatar && (
                <Avatar path={user.avatar} alt={`${user.name}-logo`} />
              )}
              <p>{user.name}</p>
              <ShoppingIcon />
            </div>
            <Button
              variant='signOut'
              className='text-base font-semibold capitalize text-black'
            />
          </div>
        ) : (
          prinLinks
        )}
      </div>
    </nav>
  );
};
