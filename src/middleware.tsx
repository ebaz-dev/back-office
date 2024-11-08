import { auth } from '@/config/auth';
import { NextRequest, NextResponse } from 'next/server';

export default auth(middleware);

const protectedRoutes = [
  '/dashboard',
  '/orders',
  '/products',
  '/merchants',
  '/notifications',
  '/feedback',
  '/settings'
];

const publicRoutes = ['/login'];

async function middleware(req: NextRequest) {
  const session = await auth();

  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  if ((isProtectedRoute && !session) || path === '/') {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  if (isPublicRoute && session && !path.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
