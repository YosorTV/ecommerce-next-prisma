'use client';

import { signIn } from 'next-auth/react';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Hello Next 13</h1>
      <button
        type='button'
        style={{ marginRight: 10 }}
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </main>
  );
}
