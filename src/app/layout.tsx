import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import MainLayout from "@/components/layouts/MainLayout";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VICA",
  description: "Vincent's Coding Academy",

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
