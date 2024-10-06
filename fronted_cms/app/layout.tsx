import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/custom/navbar";

export const metadata: Metadata = {
  title: "CMS",
  description: "LSCS CMS Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white h-full flex flex-col">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
