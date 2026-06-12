import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import MainLayout from "@/components/layouts/MainLayout";
import AppProvider from "@/providers/AppProvider";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VICA - Learning Portal",
  description: "Vincent's Coding Academy",

  icons: {
    icon: "/images/icon-logo.png",
    shortcut: "/images/icon-logo.png",
    apple: "/images/icon-logo.png",
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
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
