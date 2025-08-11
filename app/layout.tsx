import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import "./globals.css";

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "👾 Portafolio 👾",
  description: "Mi portafolio creado con Next.js y Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${urbanist.variable} antialiased`}>
        <Navbar/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
