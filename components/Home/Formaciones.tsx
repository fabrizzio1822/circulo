"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import FormacionModal from "@/components/Formaciones/FormacionModal";

const formaciones = [
  {
    id: 1,
    title: "Especialidad en el modelo sistémico",
    description: "Formación integral en el modelo sistémico aplicado a la clínica. Programa insignia del Círculo.",
    meta: "2 años · Formación insignia",
    image: "/assets/formaciones/modelo-sistemico.jfif",
    pdf: "/pdf/.pdfformaciones-ModeloSistemico.pdf"
  },
  {
    id: 2,
    title: "Especialidad en terapia de parejas",
    description: "Abordaje del vínculo desde una perspectiva sistémica. Herramientas concretas para la clínica.",
    meta: "1 año · Certificación",
    image: "/assets/formaciones/parejas.jfif",
    pdf: "/pdf/formaciones-TerapiaParejas.pdf"
  },
  {
    id: 3,
    title: "Coordinación de grupos",
    description: "Formación teórica y práctica para coordinar grupos terapéuticos, educativos e institucionales.",
    meta: "8 meses",
    image: "/assets/formaciones/coordinacion-de-grupos.jfif",
    pdf: "/pdf/formaciones-Coordinacion.pdf"
  },
  {
    id: 4,
    title: "Problemáticas alimentarias",
    description: "Abordaje sistémico de trastornos alimentarios y del vínculo con la comida y el cuerpo.",
    meta: "6 meses",
    image: "/assets/formaciones/problematicas-alimentarias.jfif",
    pdf: "/pdf/formaciones-ProblematicasAlimentarias.pdf"
  },
  {
    id: 5,
    title: "Infancia y adolescencia",
    description: "Clínica con niños, niñas y adolescentes desde una mirada sistémica y contextual.",
    meta: "1 año",
    image: "/assets/formaciones/infancia-adolescencia.jfif",
    pdf: "/pdf/formaciones-AdolescenciaInfancia.pdf"
  },
  {
    id: 6,
    title: "Trabajo social sistémico",
    description: "Herramientas del pensamiento sistémico aplicadas a la intervención en trabajo social.",
    meta: "8 meses",
    image: "/assets/formaciones/trabajo.jfif",
    pdf: "/pdf/formaciones-TrabajoSocial.pdf"
  },
  {
    id: 7,
    title: "Sexología clínica",
    description: "Abordaje de la sexualidad humana desde una perspectiva integradora y sistémica.",
    meta: "6 meses",
    image: "/assets/formaciones/sexologia.jfif",
    pdf: "/pdf/formaciones-SexologiaClinica.pdf"
  },
  {
    id: 8,
    title: "Terapia centrada en soluciones",
    description: "Modelo breve y focalizado en los recursos del consultante. Ideal para clínica de tiempos acotados.",
    meta: "4 meses",
    image: "/assets/formaciones/terapia.jfif",
    pdf: "/pdf/formaciones-TerapiaSoluciones.pdf"
  },
  {
    id: 9,
    title: "Terapia Sistémica Individual",
    description: "Diplomado centrado en la práctica sistémica a nivel individual, diseñado para enriquecer y potenciar tus procesos y estrategias clínicas.",
    meta: "8 clases · Diplomado",
    image: "/assets/formaciones/terapia-individual.jfif",
    isModal: true
  }
];

const spring = { type: "spring" as const, stiffness: 300, damping: 40 };

export default function Formaciones() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(1);
  const [step, setStep] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const x = useMotionValue(0);

  const maxIndex = Math.max(0, formaciones.length - visible);

  useEffect(() => {
    setMounted(true);
    const compute = () => {
      const w = window.innerWidth;
      let v = 1;
      if (w >= 1024) v = 3;
      else if (w >= 640) v = 2;
      setVisible(v);
      if (cardRef.current) {
        const gap = 20; // gap-5
        setStep(cardRef.current.offsetWidth + gap);
      }
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  useEffect(() => {
    if (step > 0) x.set(-index * step);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(maxIndex, i));
    setIndex(clamped);
    animate(x, -clamped * step, spring);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 50;
    const v = info.velocity.x;
    let next = index;
    if (info.offset.x < -threshold || v < -300) next = index + 1;
    else if (info.offset.x > threshold || v > 300) next = index - 1;
    goTo(next);
  };

  const handleAction = (f: any) => {
    if (f.isModal) {
      setIsModalOpen(true);
    } else if (f.pdf) {
      window.open(f.pdf, '_blank');
    }
  };

  return (
    <>
      <section
        id="formaciones"
        className="bg-[#F0EBF6] py-12 lg:py-20 overflow-hidden "
      >
        <div className="md:mx-[50px] lg:mx-[100px] mx-auto">
          {/* Header */}
          <div className="px-6 lg:px-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8 lg:mb-10">
            <div>
              <div className="inline-block bg-lila/15 text-lila px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium mb-5">
                Formaciones {new Date().getFullYear()}
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-violeta leading-[1.05] font-normal max-w-3xl">
                Nueve postgrados de
                <br />
                <em className="italic font-bold">formación profesional</em>
              </h2>
            </div>

            <div className="hidden lg:flex gap-3 shrink-0">
              <button
                onClick={() => goTo(index - 1)}
                disabled={index === 0}
                aria-label="Anterior"
                className="w-14 h-14 rounded-full border border-violeta/25 flex items-center justify-center text-violeta hover:bg-violeta hover:text-white hover:border-violeta disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-violeta transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => goTo(index + 1)}
                disabled={index === maxIndex}
                aria-label="Siguiente"
                className="w-14 h-14 rounded-full border border-violeta/25 flex items-center justify-center text-violeta hover:bg-violeta hover:text-white hover:border-violeta disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-violeta transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carrusel */}
          <div className="pl-6 lg:pl-12">
            <motion.div
              className="flex gap-5 cursor-grab active:cursor-grabbing"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -maxIndex * step, right: 0 }}
              dragElastic={0.15}
              dragMomentum={false}
              onDragEnd={handleDragEnd}
            >
              {formaciones.map((f, i) => (
                <motion.article
                  key={f.id}
                  ref={i === 0 ? cardRef : null}
                  className="w-[85vw] sm:w-[340px] lg:w-[400px] flex-shrink-0 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      className="object-cover pointer-events-none select-none rounded-3xl"
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 340px, 380px"
                      draggable={false}
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="text-xs lg:text-sm text-turquesa font-medium mb-3">
                      {f.meta}
                    </div>
                    <h3 className="font-serif text-2xl lg:text-[28px] text-violeta leading-tight mb-3 font-normal min-h-[64px] lg:min-h-[72px]">
                      {f.title}
                    </h3>
                    <p className="text-violeta/60 text-sm lg:text-base leading-relaxed mb-6 min-h-[80px]">
                      {f.description}
                    </p>
                    <button
                      onClick={() => handleAction(f)}
                      className="inline-flex items-center gap-2 border border-violeta/25 text-violeta px-5 py-2.5 rounded-full text-sm font-medium hover:bg-violeta hover:text-white hover:border-violeta transition-all"
                    >
                      Ver programa
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* Dots mobile */}
          {mounted && (
            <div className="flex lg:hidden justify-center gap-2 mt-10">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Ir al slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-violeta" : "w-2 bg-violeta/25"
                    }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <FormacionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}