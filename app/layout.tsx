import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChronoPulse White Edition | Luxury Smartwatch",
  description: "Classic Elegance Meets Modern Intelligence. Premium smartwatch with advanced chronograph tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900 min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
