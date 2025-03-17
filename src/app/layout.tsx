import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import localFont from "next/font/local";



const garamond = localFont({
  src: [
    {
      path: '/fonts/Garet-Book.woff', // Adjust path to match your file structure
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/Garet-Heavy.woff', // Adjust path to match your file structure
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-garamond', // Optional: for CSS variable use
});


export const metadata: Metadata = {
  title: "Pitchvilla",
  description: "Generated by Pitchvilla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${garamond.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
