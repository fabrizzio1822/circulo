'use client'

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Banner from "@/components/Banner/Banner"

import ServiciosInicio from "@/components/Servicios/ServiciosInicio"
import ServiciosResponsive from '@/components/Servicios/ServiciosResponsive'
import Image from "next/image"
import { HiAcademicCap } from "react-icons/hi2";
import FormacionesGrid from '@/components/Home/Formaciones'
import Newsletter from "@/components/Newsletter/NewsLetter"

export default function Component() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.2, 
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <main className="">
      
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
       
      </motion.div>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="max-w-7xl px-6 my-8 mx-auto">
          <div className="min-h-screen">
          <Banner/>
        </div>
          <ServiciosInicio />
          <ServiciosResponsive />
          <FormacionesGrid/>
          <Newsletter/>
        </div>
      </motion.div>
    </main>
  )
}

