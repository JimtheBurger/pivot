import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * NOTE: Replace these with the fonts you want, or keep using Geist + Geist Mono
 * if that suits your style. You can also import different subsets, weights, etc.
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Update your metadata (SEO) for the Lateral Thinking Web App:
 */
export const metadata: Metadata = {
  title: "Lateral Thinking Web App",
  description: "A tool to practice and explore lateral thinking puzzles, riddles, and creative problem-solving.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-[#121212] dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
