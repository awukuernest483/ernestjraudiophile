import type { Metadata } from "next";
import { Manrope } from 'next/font/google'
import "./globals.css";

const manRope = Manrope({
  subsets: ['latin'],
  variable: "--font-manrope"
})

export const metadata: Metadata = {
  title: "audiophile",
  description: "Music at it's best",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manRope.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
