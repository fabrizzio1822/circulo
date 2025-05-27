// src/components/FixedWhatsappButton.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

const FixedWhatsappButton: React.FC = () => {
  // La URL del link de WhatsApp que ya estás utilizando
  const whatsappLinkMobile = "https://wa.me/message/6ACK444DNTJEM1";
  const whatsappLinkDesktop = "https://api.whatsapp.com/message/6ACK444DNTJEM1?autoload=1&app_absent=0";

  return (
    <>
      {/* Botón flotante para dispositivos móviles (visible solo en pantallas pequeñas) */}
      <a
        href={whatsappLinkMobile}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 p-3 bg-green-500 text-white rounded-full shadow-lg 
                   hover:bg-green-600 hover:scale-110 transition-transform duration-300 ease-in-out
                   block md:hidden" // 'block' para móviles, 'hidden' para escritorio
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" /> {/* Ajusta el tamaño del ícono si es necesario */}
      </a>

      {/* Botón flotante para dispositivos de escritorio (visible solo en pantallas grandes) */}
      <a
        href={whatsappLinkDesktop}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 p-3 bg-green-500 text-white rounded-full shadow-lg 
                   hover:bg-green-600 hover:scale-110 transition-transform duration-300 ease-in-out
                   hidden md:block" // 'hidden' para móviles, 'block' para escritorio
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" /> {/* Ajusta el tamaño del ícono si es necesario */}
      </a>
    </>
  );
};

export default FixedWhatsappButton;