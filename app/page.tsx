"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Header from "@/components/Header/Header"
import Logo from "@/components/logo"
import Content from "@/components/Animacion/Content"

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Retraso antes de mostrar el contenido
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className=" bg-gray-50">
      {/* Header primero */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: showContent ? 1 : 0,
          y: showContent ? 0 : -50,
        }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: "easeInOut",
        }}
      >
        <Header />
      </motion.div>

      {/* Logo en el medio */}
      <div className="w-full flex justify-center mt-4">
        <Logo onAnimationComplete={() => setAnimationComplete(true)} showContent={showContent} />
      </div>

      {/* Contenido al final */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: showContent ? 1 : 0,
        }}
        transition={{
          duration: 1.2,
          delay: 1.5,
          ease: "easeInOut",
        }}
      >
        <Content />
      </motion.div>
    </main>
  )
}
