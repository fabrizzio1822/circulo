import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { InstagramFill } from 'akar-icons';
import Newsletter from '../Newsletter/NewsLetter';
import Testimonials from '../Testimonials/Testimonials';
const trabajadores = [
  {
    img: "/assets/Adrian.png",
    nombre: "Adrian Hinojosa",
    cargo: "Director y Fundador\nDr. En psicología - Psicoterapeuta",
    lista: [
      "Director y Fundador del Circulo de Estudios Sistémicos.",
      "Doctor en Psicología",
      "Máster en Terapia Familiar",
      "Terapeuta de familia y de pareja",
      "Especialista en el Modelo Sistémico.",
      "Docente universitario",
      "Docente en escuelas de posgrado (Escuela Sistémica Argentina y Escuela de Terapia Familiar Sant Pau, Barcelona)",
    ],
    instagram: "https://www.instagram.com/adriancitohinojosa?igsh=dWM0YjgzbzUxcWwy",
  },
  {
    img: "/assets/Alejandra Peñaloza.jpeg",
    nombre: "Alejandra Peñaloza",
    cargo: "Psicoterapeuta Clínica",
    lista: [
      "Licenciada en Psicología (UNT)",
      "Especialista en Modelo Sistémico (ESA)",
      "Diplomado en psicoterapia sistémica de Niños, niñas y adolescentes",
      "Psicóloga en Nivel Educación Secundaria",
      "Docente en IES de la provincia de Jujuy",
      "Psicoterapeuta clínica especialista en modelo sistémico. Adolescentes, Adultos, Parejas y Familias",
    ],
    instagram: "https://www.instagram.com/circulosistemico/",
  },
  {
    img: "/assets/Anja Schindler.jpeg",
    nombre: "Anja Schindler",
    cargo: "Psicoterapeuta Familiar",
    lista: [
      "Licenciada en Psicología",
      "Especialista en Modelo Sistémico",
      "Psicoterapeuta de familia e individual.",
      "Diplomado en psicoterapia sistémica de Niños, niñas y adolescentes",
    ],
    instagram: "https://www.instagram.com/circulosistemico/",
  },
  {
    img: "/assets/Diego Ficoseco.jpg",
    nombre: "Diego Ficoseco",
    cargo: "Terapeuta de Pareja y Familia",
    lista: [
      "Mg Terapia Familiar y de Parejas (Escuela de TF Sant Pau, Barcelona).",
      "Lic. en Psicología (UNSTA, Tucumán).",
      "Psicoterapeuta clínico",
      "Especialista en modelo sistémico.",
      "Docente universitario y de escuelas de posgrado.",
    ],
    instagram: "https://www.instagram.com/psico.fico?igsh=MW52dWJyeHlhYmgzMQ",
  },
  {
    img: "/assets/Joanna Abregu.jpg",
    nombre: "Joanna Abregu",
    cargo: "Psicoterapeuta Sistémica",
    lista: [
      "Licenciada en Psicología",
      "Especialista en Modelo Sistémico",
      "Diplomado en psicoterapia sistémica de Niños, niñas y adolescentes",
    ],
    instagram: "https://www.instagram.com/circulosistemico/",
  },
  {
    img: null,
    nombre: "Matias Arnold",
    cargo: "Psicólogo",
    lista: [
      "Lic. en psicología",
      "Especialista en Modelo Sistémico",
      "Intervenciones familiares en discapacidad"
    ],
    instagram: "https://www.instagram.com/circulosistemico/",
  },
  {
    img: "/assets/Flavia-Quispe.jpeg",
    nombre: "Flavia Quispe Mendez",
    cargo: "Terapeuta de infancia y adolescencia",
    lista: [
      "Esp. en Modelo Sistémico",
      "Certificada internacional en EMDR",
      "Docente universitaria (UCASAL)",
      "Psicóloga clinica, individual"
    ],
    instagram: "https://www.instagram.com/circulosistemico/",
  },
  {
    img: null,
    nombre: "Daniela Najar",
    cargo: "Psicóloga Clínica",
    lista: [
      "Lic. En psicologia",
      "Especialista en Modelo Sistémico"
    ],
    instagram: "https://www.instagram.com/circulosistemico/",
  },
  {
    img: "/assets/Cristian Maidana.jpeg",
    nombre: "Cristian Maidana",
    cargo: "Docente y Terapeuta",
    lista: [
      "Profesor en psicología",
      "Especialista en docencia superior.",
      "Docente en nivel secundario y nivel superior – técnico",
      "Diplomado en psicoterapia sistémica de Niños, niñas y adolescentes",
    ],
    instagram: "https://www.instagram.com/circulosistemico/",
  },
  {
    img: "/assets/TatianaSoruco.jpg",
    nombre: "Tatiana Soruco",
    cargo: "Psicoterapeuta Individual",
    lista: [
      "Licenciada en Psicología",
      "Especialista en Modelo Sistémico",
      "Psicoterapeuta individual (adolescentes y adultos)",
      "Diplomado en psicoterapia sistémica de Niños, niñas y adolescentes",
    ],
    instagram: "https://www.instagram.com/circulosistemico/",
  },
  {
    img: "/assets/jose.jpg",
    nombre: "José María Rojas",
    cargo: "Especialista en Discapacidad",
    lista: [
      "Licenciado en Educación",
      "Profesor de Educación Especial",
      "Experto Universitario en Autismo y TGD.",
      "Abordaje Integral de la Discapacidad.",
      "Diplomado en psicoterapia sistémica de Niños, niñas y adolescentes",
    ],
    instagram: "https://www.instagram.com/jorojascordoba?utm_source=qr&igsh=MW0wNnp4bjQzMXNvNQ==",
  }
];

const stats = [
  { valor: "11", label: "profesionales en el equipo" },
  { valor: "15+", label: "años acompañando" },
  { valor: "2000+", label: "personas atendidas" },
];

function TeamModal({ trabajador, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!trabajador) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-violeta/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] shadow-2xl grid grid-cols-1 md:grid-cols-2"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-violeta shadow-md hover:bg-turquesa/10 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6L18 18M18 6L6 18" />
          </svg>
        </button>

        <div className="aspect-[4/5] md:aspect-auto md:h-full w-full overflow-hidden bg-gray-100">
          <img
            src={trabajador.img}
            alt={trabajador.nombre}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 md:p-10 flex flex-col">
          <h3 className="font-serif text-3xl text-violeta font-normal mb-1">
            {trabajador.nombre}
          </h3>
          <p className="text-turquesa font-medium mb-4 whitespace-pre-line">{trabajador.cargo}</p>
          <div className="h-[2px] w-12 bg-turquesa mb-6"></div>

          <ul className="space-y-3 mb-6">
            {trabajador.lista.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-violeta/70 text-base leading-relaxed">
                <span className="shrink-0 mt-2 text-turquesa/40 text-xs">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={trabajador.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-3 self-start px-6 py-3 rounded-full border border-black/10 text-violeta/80 hover:text-turquesa hover:border-turquesa/30 hover:bg-turquesa/5 transition-all duration-300 font-medium"
          >
            <InstagramFill strokeWidth={2} size={20} />
            <span>Conectar en Instagram</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

const ScrollRevealText = ({ children }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 85%", "start 30%"]
  });

  const words = children.split(" ");
  return (
    <p ref={container} className="text-2xl md:text-3xl leading-[1.3] tracking-tight font-normal text-violeta">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        return (
          <span key={i} className="inline-block mr-[0.3em] mb-2">
            <motion.span style={{ opacity }}>
              {word}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};

export default function SobreNosotros() {
  const [seleccionado, setSeleccionado] = useState(null);

  return (
    <div className="w-full">
      {/* Introducción */}
      <section className="bg-violeta pt-10 pb-20  px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.5rem,min(7vw,7vh),4.5rem)] text-white leading-[1.1] mb-6"
          >
            TERAPIA SISTÉMICA
            <br />
            Individual, parejas y familias
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/70 text-[clamp(1.125rem,min(2.5vw,2.5vh),1.5rem)] leading-relaxed max-w-[min(100%,42rem)] mx-auto"
          >
            Hace más de 15 años acompañamos procesos de cambio con un equipo
            de psicólogos y terapeutas especializados en el modelo sistémico.
          </motion.p>
        </div>
        <div className="mt-12 sm:mt-16 w-full overflow-hidden px-6 sm:px-0">
          <div className="grid max-w-none sm:max-w-[90%] md:max-w-[80%] mx-auto grid-cols-1 sm:grid-cols-3 gap-5 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full sm:w-auto rounded-[1.5rem] overflow-hidden aspect-[4/5] shadow-xl bg-gray-100"
            >
              <img src="/assets/img-4.jpg" alt="Círculo Sistémico" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full sm:w-auto rounded-[1.5rem] overflow-hidden aspect-[4/5] shadow-xl bg-gray-100 hidden sm:block"
            >
              <img src="/assets/img-5.jpg" alt="Círculo Sistémico" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full sm:w-auto rounded-[1.5rem] overflow-hidden aspect-[4/5] shadow-xl bg-gray-100 hidden sm:block"
            >
              <img src="/assets/img-6.jpg" alt="Círculo Sistémico" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Sobre Círculo Sistémico */}
      <section className=" mx-auto py-20 mb-28 md:mb-36 bg-[#f5f7fa] flex flex-col justify-center ">
        <div className="lg:mx-[150px] md:mx-[60px] mx-[24px] grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16 mb-16">
          <div className="flex items-start gap-2 text-turquesa font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-turquesa mt-2 shrink-0"></span>
            <span className='text-md'>Sobre Círculo Sistémico</span>
          </div>
          <div className="space-y-6">
            <ScrollRevealText>
              Somos un equipo de psicólogos y terapeutas sistémicos. Desde hace más de 15 años acompañamos a personas, parejas y familias, combinando formación clínica rigurosa con una mirada cálida y cercana. Trabajamos desde el modelo sistémico, ofreciendo un espacio de escucha, contención y crecimiento, tanto en terapia individual como de pareja y familiar.
            </ScrollRevealText>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 border-t border-black/10 pt-8">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`px-0 sm:px-8 ${idx > 0 ? 'sm:border-l border-black/10' : ''}`}
                >
                  <p className="font-normal text-4xl md:text-6xl text-violeta mb-2">{stat.valor}</p>
                  <p className="text-violeta/60 text-2xl">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="pt-8 md:pt-12">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                <img src="/assets/Fundaif.png" alt="Fundaif" className="h-12 md:h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply" />
                <img src="/assets/colegio1-Photoroom.png" alt="Colegio" className="h-12 md:h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply" />
                <img src="/assets/colegio2.png" alt="Colegio" className="h-12 md:h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Nuestro equipo */}
      <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-32">
        <div className="flex items-start gap-2 text-turquesa font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-turquesa mt-2 shrink-0"></span>
          <span>Equipo</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-violeta mb-12">
          Nuestros Profesionales
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trabajadores.map((trabajador, index) => (
            <motion.button
              key={trabajador.nombre}
              type="button"
              onClick={() => trabajador.img && setSeleccionado(trabajador)}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-gray-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-turquesa ${!trabajador.img ? 'cursor-default' : 'cursor-pointer'}`}
            >
              {trabajador.img ? (
                <>
                  <img
                    src={trabajador.img}
                    alt={trabajador.nombre}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violeta/90 via-violeta/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end z-10">
                    <p className="text-white font-serif text-2xl mb-0.5">{trabajador.nombre}</p>
                    <p className="text-white/70 text-sm mb-3 whitespace-pre-line">{trabajador.cargo}</p>
                    <div className="flex items-center gap-2 text-turquesa text-sm font-medium opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                      <span>Ver más información</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-white p-5 md:p-6 flex flex-col shadow-inner overflow-hidden border border-gray-100">
                  <h3 className="font-serif text-2xl text-violeta font-normal mb-1 leading-tight">
                    {trabajador.nombre}
                  </h3>
                  <p className="text-turquesa text-sm font-medium mb-3 whitespace-pre-line">{trabajador.cargo}</p>
                  <div className="h-[2px] w-8 bg-turquesa mb-4 shrink-0"></div>

                  <ul className="space-y-2.5 overflow-y-auto mb-2">
                    {trabajador.lista.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-violeta/70 text-xs md:text-sm leading-relaxed">
                        <span className="shrink-0 mt-1 text-turquesa/40 text-[10px]">◆</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </section>
      <Testimonials />

      <AnimatePresence>
        {seleccionado && (
          <TeamModal trabajador={seleccionado} onClose={() => setSeleccionado(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}