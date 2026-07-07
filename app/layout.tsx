import type { Metadata } from "next";
import "./globals.css";
import "./custom.scss";

export const metadata: Metadata = {
  title: "Dongsung Portfolio",
  description: "프론트엔드 개발자 윤동성의 포트폴리오입니다.",
  icons: {
    icon: "/logo/dongsung-logo.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex items-center flex-col">{children}</body>
    </html>
  );
}
