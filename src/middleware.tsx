import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';

export default auth(middleware);

async function middleware(req: NextRequest) {
  const session: any = await auth();

  const newUrl = new URL('/login', req.nextUrl.origin);

  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(newUrl);
  }

  if (!session && req.nextUrl.pathname === '/merchants') {
    return NextResponse.redirect(newUrl);
  }

  if (!session && req.nextUrl.pathname === '/dashboard') {
    return NextResponse.redirect(newUrl);
  }

  if (!session && req.nextUrl.pathname === '/noat') {
    return NextResponse.redirect(newUrl);
  }

  if (!session && req.nextUrl.pathname === '/order') {
    return NextResponse.redirect(newUrl);
  }

  if (!session && req.nextUrl.pathname === '/products') {
    return NextResponse.redirect(newUrl);
  }

  if (!session && req.nextUrl.pathname === '/profile') {
    return NextResponse.redirect(newUrl);
  }

  if (!session && req.nextUrl.pathname === '/warehouse') {
    return NextResponse.redirect(newUrl);
  }

  if (!session && req.nextUrl.pathname === '/suppliers') {
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
