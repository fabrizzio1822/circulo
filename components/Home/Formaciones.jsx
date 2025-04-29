'use client'
import { HiAcademicCap } from "react-icons/hi2"
import Link from "next/link"
import Image from "next/image"
import { useTransform, motion, useScroll } from 'framer-motion';


const formacionesData = [
  { nombre: "Especialidad en el modelo Sistemico", numero: "01" },
  { nombre: "Especialidad en terapia de Parejas", numero: "02" },
  { nombre: "Coordinacion de Grupos", numero: "03" },
  { nombre: "Problematicas Alimentarias", numero: "04" },
  { nombre: "Infancia y Adolescencia", numero: "05" },
  { nombre: "Trabajo Social Sistemico", numero: "06" },
  { nombre: "Sexologia Clinica", numero: "07" },
  { nombre: "Formacion en terapia centrada en soluciones", numero: "08" },
]

function FormacionesGrid() {
  const { scrollYProgress } = useScroll();

  // Define el rango de scroll donde la escala de la imagen cambiará.
  // [0, 0.2] significa que la animación de escala ocurrirá durante el primer 20% del scroll.
  const imageScale = useTransform(scrollYProgress, [0, 0.2], [1.2, 1]); // Escala de 1.2 a 1
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute bottom-2 rounden-2xl">
        <div className="">
        <img
          src="/assets/sobre-nosotros.webp"
          alt="Fondo formaciones"
          className="p-5 object-cover h-full  md:object-contain rounded-4xl brightness-[40%] rounded-2xl"
        />
        </div>
      </div>

      {/* Contenido superpuesto */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Título en la parte superior */}
        <div className="text-center pt-16 md:pt-24">
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h1
            className="text-3xl md:text-7xl font-bold text-white"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
             FORMACIONES <br /> <span className="text-7xl">- 2025 -</span>
          </motion.h1>

        </motion.div>
        </div>

        {/* Contenedores en la parte inferior */}
        <div className="mt-auto pb-16 md:pb-24 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[95%] mx-auto">
            {formacionesData.map((formacion, index) => (
              <Link
                key={index}
                href="/formaciones"
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-36"
              >
                <div className="p-3 md:p-4 flex flex-col justify-between h-full">
                  <div className="flex items-start gap-2">
                    <h3 className="text-sm md:text-xl font-semibold text-gray-800">{formacion.nombre}</h3>
                  </div>
                  <div className="flex items-center gap-2 mt-auto">
                    <HiAcademicCap size={18} className="text-lila" />
                    <span className="text-xs md:text-sm text-gray-600">Ver detalles</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormacionesGrid
