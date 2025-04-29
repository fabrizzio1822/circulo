"use client"

import { motion } from "framer-motion"

export default function Content() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  }

  return (
    <motion.div
      className="container mx-auto px-4 pb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Bienvenido a Mi Sitio</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Creamos soluciones digitales innovadoras para impulsar tu negocio al siguiente nivel.
        </p>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" variants={containerVariants}>
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Servicio {item}</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="text-center">
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-shadow">
          Contáctanos
        </button>
      </motion.div>
    </motion.div>
  )
}
