"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  }

  return (
    <header className="bg-white shadow-md z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-bold">LOGO</span>
          </div>
          <span className="font-bold text-gray-800">Mi Sitio</span>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">
            Inicio
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">
            Servicios
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">
            Acerca de
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">
            Contacto
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">
                Inicio
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">
                Servicios
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">
                Acerca de
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">
                Contacto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
