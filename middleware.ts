import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Obtén la cookie de sesión
  const sessionCookie = request.cookies.get('sessionToken');

  // Si no hay una cookie de sesión, redirige a /login
  if (!sessionCookie) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Si hay una cookie de sesión, permitir que el usuario continúe
  const response = NextResponse.next();

  // Ejemplo: Configurar una cookie adicional si es necesario
  response.cookies.set('myCookie', 'cookieValue', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });

  // Ejemplo: Configurar un header adicional
  response.headers.set('x-custom-header', 'headerValue');

  return response;
}

// Configura el middleware para que se aplique en todas las rutas excepto /login y /api
export const config = {
  matcher: ['/', '/((?!login|api|_next/static).*)'],
};
