import { FC } from 'react';

import { Avatar, Button } from '@/components/elements';

type NavProps = {
  user?: {
    name?: string;
    email: string;
    avatar?: string;
    exp?: string;
  };
};

export const Nav: FC<NavProps> = ({ user }) => {
  return (
    <nav className='flex w-full items-center justify-between gap-x-5 bg-white p-5'>
      <p className='text-black'>Logo</p>
      {user && (
        <div className='flex w-full justify-end gap-x-5'>
          {user.avatar && (
            <Avatar path={user.avatar} alt={`${user.name}-logo`} />
          )}
          <p>{user.name}</p>
          <Button
            variant='signOut'
            className='rounded-md bg-black p-2.5 text-white'
          />
        </div>
      )}
      {!user && (
        <Button
          variant='signIn'
          className='rounded-md bg-teal-600 px-4 py-2.5 text-white'
        />
      )}
    </nav>
  );
};
