import type { Metadata } from 'next';
import '@/styles/globals.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
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
