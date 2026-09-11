import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "원데이 바이브코딩 — 수업 준비",
  description: "Claude Code와 함께 업무용 웹 도구를 만드는 원데이 클래스 스타터",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
