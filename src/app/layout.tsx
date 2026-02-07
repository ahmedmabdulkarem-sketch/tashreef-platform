import type { Metadata } from "next";
import { Tajawal } from "next/font/google"; // Import Tajawal
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "Tashreef Platform",
  description: "Internal events platform for Towa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${tajawal.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
