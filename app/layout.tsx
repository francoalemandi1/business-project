import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Metadata } from 'next';
import { Providers } from './providers';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'My Next.js Project',
  description: 'A comprehensive Next.js 14 project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Suspense fallback={<div>Loading...</div>}>
              <div>{children}</div>
            </Suspense>
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}
