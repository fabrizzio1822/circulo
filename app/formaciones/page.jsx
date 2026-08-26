'use client'

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Newsletter from '@/components/Newsletter/NewsLetter'
import Escuelas from '@/components/Escuelas/Escuelas'
import FixedWhatsappButton from '@/components/Whatsapp/Whatsapp';
import FormacionModal from "@/components/Formaciones/FormacionModal";

const formacionesPdfData = [
  { nombre: 'Formación en el Modelo Sistémico', pdf: '/pdf/.pdfformaciones-ModeloSistemico.pdf', bgLight: "bg-[#EFE7F5]", chipColor: "text-lila", image: '/assets/formaciones/modelo-sistemico.jfif' },
  { nombre: 'Formación en Terapia de Parejas', pdf: '/pdf/formaciones-TerapiaParejas.pdf', bgLight: "bg-[#E1F0F5]", chipColor: "text-turquesa", image: '/assets/formaciones/parejas.jfif' },
  { nombre: 'Formación en Coordinación de Grupos', pdf: '/pdf/formaciones-Coordinacion.pdf', bgLight: "bg-[#F5E8D9]", chipColor: "text-[#B85C3E]", image: '/assets/formaciones/coordinacion-de-grupos.jfif' },
  { nombre: 'Formación en Trabajo Social desde el Modelo Sistémico', pdf: '/pdf/formaciones-TrabajoSocial.pdf', bgLight: "bg-[#EFE7F5]", chipColor: "text-lila", image: '/assets/formaciones/trabajo.jfif' },
  { nombre: 'Formación en Problemáticas Alimentarias', pdf: '/pdf/formaciones-ProblematicasAlimentarias.pdf', bgLight: "bg-[#E1F0F5]", chipColor: "text-turquesa", image: '/assets/formaciones/problematicas-alimentarias.jfif' },
  { nombre: 'Formación en Infancia y Adolescencia desde el Modelo Sistémico', pdf: '/pdf/formaciones-AdolescenciaInfancia.pdf', bgLight: "bg-[#F5E8D9]", chipColor: "text-[#B85C3E]", image: '/assets/formaciones/infancia-adolescencia.jfif' },
  { nombre: 'Formación Sexología Clínica', pdf: '/pdf/formaciones-SexologiaClinica.pdf', bgLight: "bg-[#EFE7F5]", chipColor: "text-lila", image: '/assets/formaciones/sexologia.jfif' },
  { nombre: 'Formación en Terapia Centrada en Soluciones', pdf: '/pdf/formaciones-TerapiaSoluciones.pdf', bgLight: "bg-[#E1F0F5]", chipColor: "text-turquesa", image: '/assets/formaciones/terapia.jfif' },
  { nombre: 'Terapia Sistémica Individual', isModal: true, bgLight: "bg-[#EFE7F5]", chipColor: "text-lila", image: '/assets/formaciones/terapia-individual.jfif' },
];

function FormacionesPdfGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e, formacion) => {
    if (formacion.isModal) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className=" md:mx-[50px] mx-auto px-6 lg:px-12 pb-20 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {formacionesPdfData.map((formacion, index) => (
            <motion.a
              key={index}
              href={formacion.pdf || "#"}
              target={formacion.pdf ? "_blank" : undefined}
              rel={formacion.pdf ? "noopener noreferrer" : undefined}
              onClick={(e) => handleClick(e, formacion)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative rounded-3xl overflow-hidden flex flex-col hover:-translate-y-1.5 transition-transform duration-300 group cursor-pointer shadow-sm hover:shadow-md min-h-[360px]`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={formacion.image}
                  alt={formacion.nombre}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
              </div>

              <div className="relative z-10 p-8 lg:p-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 shadow-sm border border-white/30">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl lg:text-3xl text-white font-normal leading-tight">
                    {formacion.nombre}
                  </h3>
                </div>

                <span className={`inline-flex items-center self-start gap-1.5 bg-white ${formacion.chipColor} px-5 py-2.5 rounded-full text-sm font-medium border border-black/5 group-hover:shadow-md transition-shadow mt-8`}>
                  Ver programa
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <FormacionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default function Formaciones() {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <FixedWhatsappButton />

      {/* Hero Section */}
      <section className="pt-16 lg:pt-20 pb-16 lg:pb-24 px-6 lg:px-12 md:mx-[50px] mx-auto text-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-violeta font-normal leading-[1.1] mb-6">
            Nuestras <br /><em className="italic font-bold">Formaciones</em>
          </h1>
          <div className="max-w-3xl  space-y-4">
            <p className="text-violeta/60 text-lg lg:text-xl">
              Desde el Círculo Sistémico, te ofrecemos una formación integral en psicología sistémica.
            </p>
            <p className="text-violeta/60 text-lg lg:text-xl">
              Nuestra metodología de enseñanza combina teoría con la práctica, brindándote herramientas para aplicar en el mundo real. Con nuestros postgrados, podrás adquirir habilidades y conocimientos profundos.
            </p>
          </div>
        </motion.div>
      </section>

      <FormacionesPdfGrid />
      <Escuelas />
      <Newsletter />

    </div>
  );
}