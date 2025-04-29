"use client";

import { AnimatedTooltip } from "../ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Adrian Hinojosa",
    designation: "CEO y Fundadora",
    image: "/assets/Adrian.png",
  },
  {
    id: 2,
    name: "Diego Ficoseco",
    designation: "Director de Tecnología",
    image: "/assets/Diego Ficoseco.jpg",
  },
  {
    id: 3,
    name: "Alejandra Peñaloza",
    designation: "Jefa de Marketing",
    image: "/assets/Alejandra Peñaloza.jpeg",
  }, 
    {
    id: 4,
    name: "Anja Schindler",
    designation: "Jefa de Marketing",
    image: "/assets/Anja Schindler.jpeg",
  },
  {
    id: 5,
    name: "Cristian Maidana",
    designation: "Jefa de Marketing",
    image: "/assets/Cristian Maidana.jpeg",
  },
  {
    id: 6,
    name: "Tatiana Soruco",
    designation: "Jefa de Marketing",
    image: "/assets/TatianaSoruco.jpg",
  },
  {
    id: 7,
    name: "José María Rojas",
    designation: "Jefa de Marketing",
    image: "/assets/jose.jpg",
  },
  {
    id: 8,
    name: "Joanna Abregu",
    designation: "Jefa de Marketing",
    image: "/assets/Joanna Abregu.jpg",
  },
];

export default function Nosotros() {
  return (
    <div className=" py-24 items-center justify-center max-w-7xl mx-auto ">
      <h2 className="color-gris text-7xl font-bold mb-10">Nuestro <span className="text-lila">Equipo</span></h2>
     <div className="flex justify-center pt-10"> <AnimatedTooltip items={people} /></div>
    </div>
  );
}
