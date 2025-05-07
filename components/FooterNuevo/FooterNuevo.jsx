import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function FooterNuevo() {
  return (
    <footer className="bg-lila text-white px-6 md:px-20 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 border-b border-white/20 pb-10">
        {/* Logo + descripción */}
        <div className="grid lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/assets/image.webp" alt="Logo" width={500} height={400} />
          </div>
          <p className="text-sm text-gray-300">
          Somos un grupo de psicólogos y terapeutas especializados en el trabajo con
          sistemas humanos
          </p>
        </div>

        {/* Enlaces principales */}
        <div>
          <h3 className="font-semibold text-white mb-4">Enlaces</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <Link href="/" className="hover:text-white">Inicio</Link>
            </li>
            <li>
              <Link href="/sobre-nosotros" className="hover:text-white">Sobre Nosotros</Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-white">Servicios</Link>
            </li>
            <li>
              <Link href="/formaciones" className="hover:text-white">Formaciones</Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-white">Contactanos</Link>
            </li>
          </ul>
        </div>

        {/* Sección vacía para simetría o expansión futura */}
        

        {/* Redes sociales */}
        <div>
          <h3 className="font-semibold text-white mb-4">Nuestras Redes</h3>
          <div className="flex gap-4 text-2xl">
            <Link
              href="https://wa.me/message/6ACK444DNTJEM1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 block md:hidden"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="https://api.whatsapp.com/message/6ACK444DNTJEM1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 hidden md:block"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="https://www.instagram.com/circulosistemico/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400">
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Todos los derechos reservados | Círculo de Estudios Sistémicos
        </p>
        <div className="text-xs">
          Desarrollado por <span className="text-white font-medium">Izzio/dev</span>
        </div>
      </div>
    </footer>
  );
}
