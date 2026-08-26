'use client';

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function FooterNuevo() {
  return (
    <footer className="bg-violeta text-white pt-16 pb-8 lg:pt-24">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Col 1: Logo, Social & Address (Span 2) */}
          <div className="lg:col-span-2 flex flex-col">
            <Image
              src="/assets/image.png"
              alt="Círculo Sistémico Logo"
              width={220}
              height={70}
              className="mb-6 opacity-90"
            />
            <div className="flex items-center gap-5 text-white/90 mb-4">
              <Link href="https://www.instagram.com/circulosistemico/" target="_blank" className="hover:text-turquesa transition-colors">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link href="https://wa.me/543885737111" target="_blank" className="hover:text-turquesa transition-colors">
                <FaWhatsapp className="w-6 h-6" />
              </Link>
              <Link href="mailto:circulosistemico1@gmail.com" className="hover:text-turquesa transition-colors">
                <FaEnvelope className="w-6 h-6" />
              </Link>
            </div>
            <p className="text-white/70 text-[15px]">
              📍 San Salvador de Jujuy, Jujuy, Argentina
            </p>
          </div>

          {/* Col 2: Empresa (Span 1) */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium mb-6">Círculo Sistémico</h3>
            <ul className="space-y-3.5 text-[15px] text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="/congreso" className="hover:text-white transition-colors">Congreso</Link></li>
              <li><Link href="/formaciones" className="hover:text-white transition-colors">Formaciones</Link></li>
              <li><Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Col 3: Terapias (Span 1) */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium mb-6">Servicios</h3>
            <ul className="space-y-3.5 text-[15px] text-white/70">
              <li><Link href="/servicios" className="hover:text-white transition-colors">Terapia individual</Link></li>
              <li><Link href="/servicios" className="hover:text-white transition-colors">Terapia de pareja</Link></li>
              <li><Link href="/servicios" className="hover:text-white transition-colors">Terapia familiar</Link></li>
            </ul>
          </div>

        </div>

        {/* Footer inferior */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Círculo de Estudios Sistémicos. Todos los derechos reservados.</p>
          <div>
            Desarrollado por <span className="text-white/80 font-medium">Izzio/dev</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
