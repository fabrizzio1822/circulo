"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Header from "@/components/Header/Header"
import Logo from "@/components/logo"
import Content from "@/components/Animacion/Content"
import AnnouncementBar from "@/components/Header/AnnoucementBar"
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
      <AnnouncementBar />
      <Header />
      <Content />
    </main>
  )
}
