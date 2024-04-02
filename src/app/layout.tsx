import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code HUNTS Bot",
  description: "Code Hunts Bot is a web application that allows users to interact with a chatbot interface to get responses to their queries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`primary ${inter.className}`} >{children}</body>
    </html>
  );
}
