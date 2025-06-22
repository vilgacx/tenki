import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const NotoSerif = Noto_Serif_JP({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "tenki",
  description: "perfect weather site"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NotoSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
