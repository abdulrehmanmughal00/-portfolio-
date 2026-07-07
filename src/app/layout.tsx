import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Loader from "./components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdul-rehman-mughal.vercel.app"),

  title: {
    default: "Abdul Rehman Mughal | Frontend Developer | React & Next.js",
    template: "%s | Abdul Rehman Mughal",
  },

  description:
    "Abdul Rehman Mughal is a Frontend Developer specializing in React, Next.js, TypeScript, and modern web applications. Explore my projects, skills, and experience.",

  keywords: [
    "Abdul Rehman Mughal",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Portfolio",
    "Web Developer",
    "Frontend Engineer",
  ],

  authors: [
    {
      name: "Abdul Rehman Mughal",
      url: "https://abdul-rehman-mughal.vercel.app",
    },
  ],

  creator: "Abdul Rehman Mughal",

  publisher: "Abdul Rehman Mughal",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Abdul Rehman Mughal | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, and modern web applications.",
    url: "https://abdul-rehman-mughal.vercel.app",
    siteName: "Abdul Rehman Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Abdul Rehman Mughal | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, and modern web applications.",
  },

  verification: {
    google: "PEczm1L0N6wB84I2zYd_-vR7Wpxd-ObZcE4yVfbdgMc",
  },

  alternates: {
    canonical: "https://abdul-rehman-mughal.vercel.app",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Loader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
