import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astranova | IT Solutions & Digital Marketing Services for Business Growth",
  description: "Astranova offers cutting-edge IT solutions, web development, and result-driven digital marketing strategies to help businesses grow online. Boost your brand with our expert services today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <div className="font-sans flex flex-col items-center justify-items-center min-h-screen pt-20px md:px-10 sm:px-5 mt-4 bg-black ">
        <Header/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
