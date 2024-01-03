import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: "300", preload: false });

export const metadata: Metadata = {
  title: "Swiper",
  description:
    "Get profits in a matter of seconds. Simple, Customizable, Stylish.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
