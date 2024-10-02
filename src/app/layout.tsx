import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Job-finder",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <div className="container flex justify-between py-4 px-6 mx-auto">
            <Link href="/" className="font-bold">
              Job-finder
            </Link>
            <nav className="flex gap-4 *:bg-neutral-200 *:p-2">
              <Link href={"/login"}>Login</Link>
              <Link href={"/new-listing"}>Post a job</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="container py-8 text-gray-500">
          Job-finder &copy; 2024 - All rights reserved
        </footer>
      </body>
    </html>
  );
}
