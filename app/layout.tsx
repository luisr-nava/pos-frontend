import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Providers from "./provider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "POS - Next.js",
  description: "POS - Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-lt-installed="true">
      <body className={`${outfit.className} bg-gray-200`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

