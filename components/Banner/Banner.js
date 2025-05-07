'use client';
import Image from "next/image";
import Button from "../Button/Button";
import { useTransform, motion, useScroll } from 'framer-motion';

export default function Banner() {
  const { scrollYProgress } = useScroll();

  // Define el rango de scroll donde la escala de la imagen cambiará.
  // [0, 0.2] significa que la animación de escala ocurrirá durante el primer 20% del scroll.
  const imageScale = useTransform(scrollYProgress, [0, 0.2], [1.2, 1]); // Escala de 1.2 a 1

  return (
    <section className="text-gray-600 body-font relative overflow-hidden rounded-2xl pb-10">
      <div className="container mx-auto flex px-5 items-center justify-center flex-col relative">
        <div className="max-w-7xl px-6 mx-auto text-center z-10">
          <h1 className="font-bold lg:text-5xl text-5xl mb-4 text-center titulo-inicio color-gris">
            Bienvenidos a <br></br> <span className="text-lila lg:text-[8rem] text-5xl">Circulo Sistémico</span>{" "}
          </h1>
        </div>

        <div className="text-xl text-center space-y-2 py-4 z-10">
          <p>Somos una institución conformada por un grupo de profesionales, especializados en Psicología Sistémica</p>
          <p>Brindamos formación y atención psicológica individual, de pareja y familiar.</p>
        </div>

        <div className="block md:flex justify-evenly gap-10 py-10 z-10">
          <Button> <a href="/formaciones">Explorar Fomaciones</a> </Button>
          <Button> <a href="/servicios">Explorar Servicios</a> </Button>
        </div>

        <div className="py-8 z-10">
          {/* Puedes agregar más contenido aquí si es necesario */}
        </div>

       
      </div>
      <motion.div
        className="relative w-full  h-[80vw] md:h-[800px] overflow-hidden rounded-3xl"
        style={{ scale: imageScale }}
      >
        <Image
          fill
          quality="100"
          src="/assets/banner.JPG"
          objectFit="cover"
          alt="Banner"
        />
      </motion.div>
    </section>
  );
}