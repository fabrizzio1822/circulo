'use client'

import { HiAcademicCap } from "react-icons/hi2"
import Link from "next/link"
import { useTransform, motion, useScroll } from 'framer-motion'

const formacionesData = [
  { nombre: "Especialidad en el modelo Sistémico", numero: "01" },
  { nombre: "Especialidad en terapia de Parejas", numero: "02" },
  { nombre: "Coordinación de Grupos", numero: "03" },
  { nombre: "Problemáticas Alimentarias", numero: "04" },
  { nombre: "Infancia y Adolescencia", numero: "05" },
  { nombre: "Trabajo Social Sistémico", numero: "06" },
  { nombre: "Sexología Clínica", numero: "07" },
  { nombre: "Formación en terapia centrada en soluciones", numero: "08" },
]

function FormacionesGrid() {
  const { scrollYProgress } = useScroll()
  const imageScale = useTransform(scrollYProgress, [0, 0.2], [1.2, 1])

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  }

  return (
    <div className="relative w-full min-h-[100dvh] overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/assets/sobre-nosotros.webp"
          alt="Fondo formaciones"
          style={{ scale: imageScale }}
          className="w-full h-full object-cover brightness-[40%] rounded-2xl"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col h-full px-4">
        {/* Título */}
        <div className="text-center pt-10 sm:pt-16 md:pt-24">
          <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              FORMACIONES <br />
              <span className="text-4xl md:text-6xl">- 2025 -</span>
            </motion.h1>
          </motion.div>
        </div>

        {/* Tarjetas */}
        <div className="mt-24 pb-10 sm:pb-16 md:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {formacionesData.map((formacion, index) => (
              <Link
                key={index}
                href="/formaciones"
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[120px] sm:min-h-[140px] md:min-h-[150px]"
              >
                <div className="p-4 flex flex-col justify-between h-full">
                  <div className="flex items-start gap-2">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                      {formacion.nombre}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mt-auto">
                    <HiAcademicCap size={18} className="text-lila" />
                    <span className="text-xs sm:text-sm text-gray-600">Ver detalles</span>
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
