"use client"

import { motion } from "framer-motion"
import Image from "next/image"
interface LogoProps {
  onAnimationComplete: () => void
  showContent: boolean
}

export default function Logo({ onAnimationComplete, showContent }: LogoProps) {
  return (
    <motion.div
      initial={{
          scale: 1.5,
          y: 100,
          opacity: 0,
        }}
        animate={{
          scale: showContent ? 1 : 1.5,
          y: showContent ? 0 : 100,
          opacity: showContent ? 1 : 0,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      onAnimationComplete={() => {
        if (showContent) {
          setTimeout(() => {
            onAnimationComplete()
          }, 800)
        }
      }}
      className="flex items-center justify-center"
    >
      <div>
        <img
          src='/assets/logo-sinfondo.png'
          alt="logo"
          className="max-w-[150px] md:max-w-[250px]" // Mantiene las dimensiones originales
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
    </motion.div>
  )
}