import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { Theme } from '@radix-ui/themes';
import Navbar from "./Navbar";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "This app is used to track issues happening in the production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Theme accentColor="violet">
          <Navbar />
          <main className="p-5"> {children}</main>
          {/* <ThemePanel /> -> to show all colors available */}
        </Theme>
      </body>
    </html>
  );
}
