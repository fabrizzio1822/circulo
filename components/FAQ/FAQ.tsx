'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo saber si necesito ir a un psicólogo?",
    answer: "Si sentís que tus problemas te desbordan, tenés dificultades para gestionar tus emociones, o simplemente buscás un espacio para conocerte mejor y crecer personalmente, la terapia puede ser de gran ayuda."
  },
  {
    question: "¿Cómo elegir al profesional adecuado?",
    answer: "En Círculo Sistémico nos encargamos de recomendarte al profesional de nuestro equipo que mejor se adapte a tus necesidades específicas, experiencia previa y motivos de consulta."
  },
  {
    question: "¿Cómo me comunicaré con mi terapeuta?",
    answer: "Las sesiones pueden ser presenciales en nuestro consultorio o de forma online a través de videollamada, según lo que acuerden y te resulte más cómodo."
  },
  {
    question: "¿Cuántas sesiones necesito para ver resultados?",
    answer: "Cada proceso es único. Algunas personas notan cambios en pocas semanas, mientras que otras requieren un acompañamiento más prolongado. Lo evaluaremos en conjunto."
  },
  {
    question: "¿Cuál es el costo de las sesiones?",
    answer: "El valor de las sesiones varía dependiendo del tipo de terapia y el profesional. Podés contactarnos para consultar nuestros honorarios y formas de pago."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 min-h-screen flex flex-col justify-center">
      <div className="md:mx-[50px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <h2 className="text-3xl lg:text-[4rem] leading-tight text-violeta  tracking-tight">
            Preguntas frecuentes
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F6F8F9] rounded-2xl overflow-hidden cursor-pointer transition-colors hover:bg-[#EEF1F3]"
              onClick={() => toggleFaq(index)}
            >
              <div className="p-5 lg:p-8 flex items-center justify-between">
                <h3 className="text-violeta font-medium text-[15px] lg:text-[20px] pr-4 select-none">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-5 h-5 text-violeta" />
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 lg:px-6 pb-5 lg:pb-6 text-[#0C2D20]/75 text-[14px] lg:text-[15px] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
