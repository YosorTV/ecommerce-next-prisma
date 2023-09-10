import Link from 'next/link';

export const LoginNav = () => {
  return (
    <nav className='flex w-full border-b border-b-gray-300 bg-white px-9 py-6'>
      <div className='flex w-full justify-between'>
        <Link
          href='/'
          target='_parent'
          className='text-base font-semibold capitalize text-gray-600'
        >
          Back
        </Link>

        <Link
          href='/sign-up'
          target='_parent'
          className='text-base font-semibold normal-case text-black'
        >
          Create an account
        </Link>
      </div>
    </nav>
  );
};
