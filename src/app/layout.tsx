import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
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
  const links = [{ content: "top", path: "/top" }];
  return (
    <html lang="ja">
      <body className={inter.className}>
        <nav className="flex items-center justify-between flex-wrap bg-green-400 p-6">
          {links.map(({ content, path }) => (
            <Link key={path} href={path}>
              {content}
            </Link>
          ))}
        </nav>
        {children}
      </body>
    </html>
  );
}
