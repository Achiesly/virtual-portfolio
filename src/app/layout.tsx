import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "Explore Sylvia's virtual assistant services — offering admin support, project coordination, calendar management, and more.",
  keywords: [
    "Virtual Assistant",
    "Sylvia Achieng",
    "Admin Support",
    "Freelance VA",
    "Calendar Management",
    "Remote Executive Assistant"
  ],
  authors: [{ name: "Sylvia Achieng" }],
  openGraph: {
    title: "My Portfolio",
    description: "Reliable virtual assistant services for busy professionals.",
    url: "https://yourdomain.com",
    siteName: "Sylvia VA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sylvia Achieng Virtual Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio",
    description: "Virtual assistant services tailored to your needs.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <main className="min-h-screen flex flex-col">{children}</main>
      </body>
    </html>
  );
}
