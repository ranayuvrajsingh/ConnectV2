import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuvraj Resume",
  description: "Generated by create next app",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/fox-face.svg",
        href: "/fox-face.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>

        {children}
      </body>
    </html>
  );
}
