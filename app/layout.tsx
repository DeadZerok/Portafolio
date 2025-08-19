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
  title: "Ivan Varona | Dev",
  description: "Ivan Varona, desarrollador de software especializado en crear soluciones digitales innovadoras y eficientes.",
  keywords: ["Ivan Varona", "desarrollador de software","ingenieria informatica", "IoT", "inteligencia artificial","Node.js", "JavaScript", "Next.js", "Tailwind", "React"],
  openGraph: {
  title: "Ivan Varona | Dev",
  description: "Explora mi experiencia en desarrollo de software, IoT e inteligencia artificial.",
  url: "https://ivanvarona.netlify.app/",
  siteName: "Ivan Varona",
  images: [
    {
      url: "https://ivanvarona.netlify.app/inicio.png", // imagen de portada (ideal 1200x630px)
      width: 1200,
      height: 630,
      alt: "Iván Varona | Dev",
    },
  ],
  locale: "es_CO",
  type: "website",
},

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
