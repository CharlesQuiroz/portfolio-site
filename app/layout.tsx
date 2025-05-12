import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import Hireme from "@/components/HireMe";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website Portfolio",//Title of the Page
  description: "A Website to display and showacase my projects and skills", // Description of the page
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon_io/android-chrome-192x192.png" type="image/png" />
        <link rel="icon" href="/favicon_io/android-chrome-512x5152.png" type="image/png" />
        <link rel="icon" href="/favicon_io/apple-touch-icon.png" type="image/png" />
        <link rel="icon" href="/favicon_io/favicon-16x16.png" type="image/png" />
        <link rel="icon" href="/favicon_io/favicon-32x32.png" type="image/png" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Hireme />
        <Navigation />
      </body>
    </html>
  );
}
