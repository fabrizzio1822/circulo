"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import Content from "./Content"
import Image from "next/image"

export default function Home() {
  const [animationStage, setAnimationStage] = useState<"initial" | "complete">("initial")
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Iniciar la secuencia de animación para completar
    const completeTimer = setTimeout(() => {
      setAnimationStage("complete")
    }, 1500) // Tiempo que dura la animación inicial

    return () => clearTimeout(completeTimer)
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden bg-white">
      {/* Fase inicial: Logo centrado en pantalla completa (fixed) */}
      {animationStage === "initial" && (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className=" ">
              <Image
                src='/assets/logo-sinfondo.png'
                alt="logo"
                width={150}
                height={100}
              />
            </div>
            <div className="mt-8 text-2xl font-light text-gray-500"></div>
          </motion.div>
        </div>
      )}

      {/* Fase completa: Animación combinada del logo y aparición del contenido */}
      {animationStage === "complete" && (
        <motion.div
          className="w-full flex flex-col items-center pt-10" // Ajustamos el contenedor para la posición final
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{
              scale: 1.4,
              x: 0,
              y: -((window.innerHeight / 2) - 50), // Calcula la posición inicial centrada verticalmente (aproximado)
            }}
            animate={{
              scale: 0.5, // Ajusta el tamaño final del logo
              x: 0,     // Mantiene la posición horizontal centrada
              y: 0,     // Ajusta la posición vertical final del logo (0 para su posición natural en el flujo)
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }} // Aseguramos que la posición sea relativa para el movimiento
          >
            <div className="">
              <Image
                src='/assets/logo-sinfondo.png'
                alt="logo"
                width={100} // Ajusta el tamaño final de la imagen del logo
                height={100} // Ajusta el tamaño final de la imagen del logo
              />
            </div>
            <div className="mt-2 text-sm font-medium">Cal AI</div>
          </motion.div>

          {/* Contenido de la página */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} // El contenido aparece al mismo tiempo
          >
            <Content />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}