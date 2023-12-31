import Header from "@/components/organisms/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ウミガメのスープ 問題集",
  description: "ウミガメのスープ 問題集",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <div className="container mx-8">{children}</div>
      </body>
    </html>
  );
}
