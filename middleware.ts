import { NextResponse } from 'next/server';

import { supabase } from './lib';

import type { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  const requestSearchParams = new URLSearchParams(request.nextUrl.search);

  const token = requestSearchParams.get('token');

  if (token) {
    const response = await supabase.auth.verifyOtp({
      token_hash: token,
      type: 'email',
    });

    if (response.data.session?.access_token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next({ request });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
