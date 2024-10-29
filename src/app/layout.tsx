import type { Metadata } from "next";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "E-bazaar",
  description: "Нэгдсэн хялбар захиалга",
  icons: "/logos/logo-symbol.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-default-100">
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
