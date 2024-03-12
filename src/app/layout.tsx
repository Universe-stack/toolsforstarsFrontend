import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Lato } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({subsets: ['latin'],weight:"400"})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
