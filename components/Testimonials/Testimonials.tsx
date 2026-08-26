'use client';

import { useRef } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Un lugar para recomendar...La atencion de Adrian fue muy acojedora, nos ayudo a mi esposo y a mi a reencontrarnos desde la empatia y el amor.Un excelente profesional.Lo recomiendo ampliamente!",
    name: "Ana Huergo",
  },
  {
    quote: "Quiero destacar lo hermoso que se siente este espacio. Desde que uno entra, se percibe un clima de respeto, cuidado y calidez que no es fácil de encontrar. No es solo un lugar físico: es un lugar donde uno se siente contenido, escuchado y seguro para poder abrirse. Se nota el compromiso y la calidad humana de quienes trabajan acá, y eso hace una diferencia enorme en los procesos personales. Gracias por crear y sostener un espacio tan amoroso y profesional.",
    name: "Celeste Salcedo",
  },
  {
    quote: "Realmente un lugar hermoso! Profesionales muy capacitados para contener y ayudarte. Adrián es lo mejor que nos pasó a mi pareja y a mi, realmente muy agradecidos por todas las herramientas que nos brindó y por ayudarnos a lograr cambios que pensábamos que no se podían.",
    name: "Priscila Monroy",
  },
  {
    quote: "Adrián Hinojosa, excelente profesional. El espacio es hermoso. Sólo tengo palabras de agradecimiento.",
    name: "Gabriela Calderari",
  },
  {
    quote: "Super recomendado este espacio terapéutico!!! Me ayudó mucho a trabajar distintos temas con mi hijo adolescente! Nuestra psicologa es excelente, una gran profesional!! Maravilloso lugar!",
    name: "Nati",
  },
  {
    quote: "Son excelentes profesionales!!!! Hacen un gran trabajo en equipo y de acompañamiento. En lo personal he tenido una excelente experiencia con la Lic. Alejandra Peñaloza",
    name: "Estela Soledad Lafuente",
  },
  {
    quote: "Muy buena atencion, excelente profesionalismo por parte del equipo de psicologos del Circulo Sistemico. Super recomenado",
    name: "Lautaro de Bairos Moura",
  },
  {
    quote: "Un espacio súper recomendable, lugar donde uno se siente muy cómodo y contenido, Adrián un excelente profesional ",
    name: "Brenda Almazan",
  },
  {
    quote: "Hermoso lugar con muy buena atención!! dirigida por el crack Adriancito!",
    name: "Nicolas Clady",
  },
  {
    quote: "Me encantó exelente atención y Adrián es súper humano y profesional, recomendadisimo 🥰",
    name: "Ana Camila Piniella",
  },
  {
    quote: "Excelentes profesionales atentos, cercanos y humanos. Muy recomendables.",
    name: "Humberto D'Arterio",
  },
  {
    quote: "El mejor espacio y profesionales que conozco para evolucionar en todo sentido. Gracias, gracias, gracias.",
    name: "Gabriela Flores Izetta",
  },
  {
    quote: "Excelente atención profesional y calidad humana!",
    name: "CAMILA DI NOCERA",
  },
  {
    quote: "Excelente",
    name: "Javiera Gomez Salmoral",
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-10">
      <div className="md:mx-[50px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-[2.75rem] leading-tight text-violeta font-medium tracking-tight mb-4">
            Lo que dicen sobre <span className="italic font-bold">Círculo Sistémico</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <div className="flex gap-1 text-[#FBBC05] text-xl">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-violeta/70 text-sm font-medium flex items-center gap-1.5">
              basado en reseñas de <FcGoogle className="text-lg" /> Google
            </p>
          </div>
          <a
            href="https://www.google.com/search?q=circulo+sistemico+jujuy&rlz=1C1CHBF_esAR922AR922&oq=circulo+siste&gs_lcrp=EgZjaHJvbWUqBggAECMYJzIGCAAQIxgnMg0IARAuGK8BGMcBGIAEMgYIAhBFGDkyBggDEEUYOzIICAQQABgWGB4yBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyMjEwajBqN6gCCLACAfEFHTnE_O4feaHxBR05xPzuH3mh&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x941b0f05116b51f7:0x4fe4277da072c3fc,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm font-medium text-violeta underline hover:text-violeta/70 transition"
          >
            Ver todas las opiniones
          </a>
        </div>

        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={() => scroll('left')}
            className="p-3 rounded-full bg-violeta/10 text-violeta hover:bg-violeta/20 transition"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 rounded-full bg-violeta/10 text-violeta hover:bg-violeta/20 transition"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="grid grid-rows-2 grid-flow-col gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                        auto-cols-[100%] 
                        sm:auto-cols-[calc(50%-0.5rem)] 
                        lg:auto-cols-[calc(33.333%-1rem)]"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="snap-start flex flex-col bg-[#F6F8F9] rounded-3xl p-5 lg:p-6 h-full"
            >
              <p className="text-violeta/80 text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed mb-6 lg:mb-8 flex-grow">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 lg:gap-4 mt-auto">
                <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-violeta text-white font-light text-lg lg:text-xl shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-violeta font-medium text-[14px] lg:text-[15px]">{t.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
