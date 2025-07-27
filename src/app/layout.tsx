import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/custom.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PINGAKSH INNOVATIONS - AI & Robotics",
  description: "Advancing technologies in machine learning, IOT, and space research. We are a technology company at the forefront of AI, robotics, machine learning, IoT, and space exploration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
