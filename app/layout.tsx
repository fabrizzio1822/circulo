'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterNuevo from '@/components/FooterNuevo/FooterNuevo'
import Header from '@/components/Header/Header'
import { usePathname } from 'next/navigation'; // Importa el hook useRouter
import LenisInitializer from '@/components/Lenis/Lenis';

import { Fraunces, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isHomePage = pathname === '/'; // Verifica si la ruta actual es la raíz

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body

      >
        <LenisInitializer />
        {!isHomePage && <Header />} {/* Renderiza el Header solo si no es la página principal */}
        {children}
        <FooterNuevo />
      </body>
    </html>
  );
}