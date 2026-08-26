"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

export default function Banner() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax: una columna sube y la otra baja
  const yUp = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const yDown = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const xMobile = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const ease = [0.16, 1, 0.3, 1]

  return (
    <section
      ref={heroRef}
      className="bg-violeta text-white relative overflow-hidden"
    >
      <div className="lg:mx-[50px] mx-auto px-6 lg:px-12  lg:pb-32">
        <div className="grid lg:grid-cols-[1.2fr_1fr] xl:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Columna texto */}
          <div className="relative z-10 pt-16  lg:pt-24">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="font-serif text-[clamp(3.2rem,min(8.5vw,8.5vh),6.5rem)] leading-[1.02] mb-8 font-normal tracking-tight"
            >
              Expertos en terapia
              <br />
              <em className="italic font-bold">de familia y pareja</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease }}
              className="text-white text-[clamp(1rem,min(2vw,2vh),1.25rem)] leading-relaxed max-w-[min(100%,32rem)] mb-10"
            >
              Somos un equipo de psicólogos y terapeutas sistémicos.
              Acompañamos a personas, parejas y familias desde hace más de 15
              años.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="https://wa.me/543885737111"
                className="inline-flex items-center gap-2 bg-white text-violeta px-[clamp(1.5rem,min(3vw,3vh),2.5rem)] py-[clamp(0.75rem,min(1.5vw,1.5vh),1.25rem)] rounded-full text-[clamp(0.875rem,min(1.5vw,1.5vh),1.125rem)] font-medium hover:bg-white/90 transition"
              >
                Reservá una consulta
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 border border-white/25 text-white px-[clamp(1.5rem,min(3vw,3vh),2.5rem)] py-[clamp(0.75rem,min(1.5vw,1.5vh),1.25rem)] rounded-full text-[clamp(0.875rem,min(1.5vw,1.5vh),1.125rem)] font-medium hover:bg-white/10 transition"
              >
                Ver Servicios
              </Link>
            </motion.div>
          </div>

          {/* Mobile: 3 fotos con scroll horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="lg:hidden w-full mt-8 overflow-hidden relative py-4"
            style={{
              marginInline: "-1.5rem",
              maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)"
            }}
          >
            <motion.div
              style={{ x: xMobile }}
              className="flex gap-4 px-6 w-max"
            >
              {[1, 2, 3, 1, 2].map((_, i) => (
                <div key={`mobile-col-${i}`} className="relative w-[min(60vw,50vh)] sm:w-[min(50vw,60vh)] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shrink-0">
                  <Image
                    src={`/assets/hero-${(i % 3) + 1}.jpg`}
                    alt="Círculo Sistémico"
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Desktop: Grid Parallax */}
          <div
            className="hidden lg:block relative h-[clamp(400px,75vh,700px)] w-full overflow-hidden"
            style={{
              maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)"
            }}
          >
            <div className="grid grid-cols-2 gap-6 h-full items-start">
              {/* Columna 1 (Sube al scrollear) */}
              <motion.div style={{ y: yUp }} className="flex flex-col gap-6 pt-12">
                {[1, 2, 3].map((_, i) => (
                  <div key={`col1-${i}`} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={`/assets/hero-${(i % 3) + 1}.jpg`}
                      alt="Círculo Sistémico"
                      fill
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </motion.div>

              {/* Columna 2 (Baja al scrollear) */}
              <motion.div style={{ y: yDown }} className="flex flex-col gap-6 -mt-[80%]">
                {[1, 2, 3].map((_, i) => (
                  <div key={`col2-${i}`} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={`/assets/hero-${((i + 1) % 3) + 1}.jpg`}
                      alt="Círculo Sistémico"
                      fill
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}