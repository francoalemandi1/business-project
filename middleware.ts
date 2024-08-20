import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Example: Set a cookie
  response.cookies.set('myCookie', 'cookieValue');

  // Example: Set a header
  response.headers.set('x-custom-header', 'headerValue');

  return response;
}