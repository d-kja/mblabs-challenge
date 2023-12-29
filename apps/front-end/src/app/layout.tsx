import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MB Labs | Challenge",
  description: "MB Labs challenge by Nicolas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={font.className}>{children}</body>
    </html>
  );
}
