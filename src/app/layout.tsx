import type { Metadata } from 'next';
import '@/styles/globals.css';
import { NextUIProvider } from '@/providers/NextUIProvider';
import { NextThemeProvider } from '@/providers/NextThemeProvider';

export const metadata: Metadata = {
  title: 'E-bazaar',
  description: 'Нэгдсэн хялбар захиалга',
  icons: '/logos/logo-symbol.svg'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='bg-default-100'>
        <NextUIProvider>
          <NextThemeProvider>{children}</NextThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
