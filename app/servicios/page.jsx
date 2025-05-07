'use client';

import { DIV } from "@/components/Div/Div";
import { Subtitle } from "@/components/Subtitle/SubTitle";
import { Title } from "@/components/Title/Title";
import { Person, PeopleMultiple, PeopleGroup } from 'akar-icons';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import Button from "@/components/Button/Button";
import Image from 'next/image';

const servicios = [
    {
        titulo: "Atención Individual",
        descripcion: "Desde la perspectiva sistémica, en la terapia individual se trabaja con aspectos de la esfera individual de la persona, así como con aspectos relacionados a sus relaciones interpersonales significativas. Se considera que los comportamientos del individuo están profundamente influenciados por sus interacciones y su entorno.",
        imagen: "/assets/atencion-individual-copia.jpg",
        icono: Person
    },
    {
        titulo: "Atención de Pareja",
        descripcion: "Desde la perspectiva sistémica se considera a la pareja como un sistema, en el que los problemas son considerados como parte de la dinámica del mismo. En una primera instancia, se buscará conocer a la pareja y al problema por el que consultan, y en una segunda instancia, se establecerán objetivos terapéuticos a trabajar.",
        imagen: "/assets/atencion-pareja.jpg",
        icono: PeopleMultiple
    },
    {
        titulo: "Atención Familiar",
        descripcion: "Se centra en las relaciones y dinámicas dentro de una familia, entendiendo que los problemas individuales a menudo derivan de interacciones y patrones dentro del sistema familiar. En una primera instancia, se buscará conocer a la familia y al problema por el que consultan, y en una segunda instancia, se establecerán los objetivos terapéuticos a trabajar.",
        imagen: "/assets/atencion-familiar.jpg",
        icono: PeopleGroup
    }
];

export default function Servicios() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <h1 className=" block md:flex gap-4 text-5xl md:text-6xl font-bold">
                    <Title>Nuestros</Title>
                    <Subtitle>Servicios</Subtitle>
                </h1>
            </div>
            <DIV>
                {servicios.map((servicio, index) => (
                    <section key={index} className="py-12 sm:py-16">
                        <div className="flex flex-col lg:flex-row items-center">
                            <div className={`w-full lg:w-1/2 sm:w-2/3 mb-8 lg:mb-0 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-xl">
                                    <Image
                                        src={servicio.imagen}
                                        alt={servicio.titulo}
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute inset-0 w-full md:h-full transform hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'}`}>
                                <div className="flex items-center mb-4">
                                    <servicio.icono className="w-8 h-8 sm:w-10 sm:h-10 text-lila mr-4" />
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl color-gris font-bold">{servicio.titulo}</h2>
                                </div>
                                <hr className={`${index % 2 === 1 ? 'linea-servicios-pagina' : 'linea-servicios-pagina-par'} mb-4`} />
                                <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">{servicio.descripcion}</p>
                            </div>
                        </div>
                    </section>
                ))}
                <div className="text-center mt-12">
                    <h2 className='text-xl sm:text-2xl md:text-3xl texto-servicios mb-6'>Si te interesa alguno de nuestros servicios no dudes en comunicarte con nosotros!</h2>
                    <Button>


                        <AiOutlineWhatsApp size={24} className="mr-2" /> Contactar por WhatsApp
                    </Button>
                    
                </div>
            </DIV>
        </div>
    );
}