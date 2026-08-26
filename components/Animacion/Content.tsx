"use client"
import React from 'react';
import { motion } from "framer-motion"
import Banner from "@/components/Banner/Banner"
import Diferenciales from '../Diferenciales/Diferenciales';
import ServiciosInicio from "@/components/Servicios/ServiciosInicio"
import ServiciosResponsive from '@/components/Servicios/ServiciosResponsive'
import Image from "next/image"
import { HiAcademicCap } from "react-icons/hi2";
import FormacionesGrid from '@/components/Home/Formaciones'
import Newsletter from "@/components/Newsletter/NewsLetter"
import { ServiciosNuevo } from "../Servicios/ServiciosNuevo"
import FAQ from "@/components/FAQ/FAQ"
import Testimonials from "@/components/Testimonials/Testimonials"
import Comunidad from "@/components/Comunidad/Comunidad"

import ServicesSection from '@/components/ServicesSection';
import { ServiceProvider } from '@/contexts/ServiceContext';
import Nosotros from '@/components/Nosotros/Nosotros'
import FixedWhatsappButton from "../Whatsapp/Whatsapp"
import HeroCongreso from '../Congreso/Congreso';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export default function Content() {
  return (
    <motion.div className=" mx-auto bg-gray-50" >
      <FixedWhatsappButton />
      <Banner />
      <HeroCongreso />
      <ServicesSection />
      <Diferenciales />
      <FormacionesGrid />
      <Comunidad />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </motion.div>
  )
}
