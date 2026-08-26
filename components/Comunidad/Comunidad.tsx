'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from '../Button/Button';

export default function Comunidad() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#F8FAF9] py-16 lg:py-28">
        <div className="lg:mx-[150px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Collage de imágenes */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[550px] w-full max-w-[550px] mx-auto lg:mx-0">
            {/* Imagen derecha (pareja) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[80%] rounded-[2rem] overflow-hidden shadow-lg z-0">
              <Image
                src="/assets/img-3.jpg"
                alt="Personas abrazándose"
                fill
                className="object-cover"
              />
            </div>
            {/* Imagen superior izquierda */}
            <div className="absolute left-0 top-[5%] w-[45%] h-[50%] rounded-[2rem] overflow-hidden shadow-lg z-10">
              <Image
                src="/assets/img-4.jpg"
                alt="Mujer sonriendo"
                fill
                className="object-cover"
              />
            </div>
            {/* Imagen inferior izquierda */}
            <div className="absolute left-[12%] bottom-[5%] w-[42%] h-[45%] rounded-[2rem] overflow-hidden shadow-xl z-20">
              <Image
                src="/assets/img-5.jpg"
                alt="Mujer con anteojos"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Contenido de texto */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="font-serif text-4xl lg:text-[3.5rem] leading-[1.1] text-violeta font-medium tracking-tight mb-6">
              Conocé nuestro <span className="italic font-bold">proceso</span> <br /> de <span className="italic font-bold">admisión</span>
            </h2>
            <p className="text-violeta/75 text-base lg:text-[1.1rem] leading-relaxed mb-10 max-w-lg">
              Te acompañamos paso a paso para asegurarnos de brindarte la mejor atención posible desde el primer contacto.
            </p>
            <Button onClick={() => setIsModalOpen(true)}>
              Ver proceso de admisión
            </Button>
          </div>

        </div>
      </section>

      {/* Modal de Admisión */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-800 transition"
              aria-label="Cerrar modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="font-serif text-3xl text-violeta font-bold mb-6">Proceso de admisión</h3>

            <ul className="space-y-5 mb-8 text-violeta/80 text-left text-lg">
              <li className="flex items-start">
                <span className="font-bold text-violeta mr-3">1º</span>
                <span>Solicita un turno</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-violeta mr-3">2º</span>
                <span>Coordinamos la entrevista de evaluación</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-violeta mr-3">3º</span>
                <span>Haremos una devolución</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-violeta mr-3">4º</span>
                <span>Comenzamos el proceso terapéutico</span>
              </li>
            </ul>

            <div className="flex justify-center mt-6">
              <Button href="https://wa.me/543885737111" onClick={() => setIsModalOpen(false)}>
                Solicitar turno
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
