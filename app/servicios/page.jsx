'use client';

import { motion } from "framer-motion";
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { ArrowRight, Clock, GraduationCap, Landmark, HeartHandshake } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import FixedWhatsappButton from "@/components/Whatsapp/Whatsapp";
import Newsletter from "@/components/Newsletter/NewsLetter";
const IndividualIllustration = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 128 128" fill="none">
        <g id="Individual">
            <path id="Vector" d="M85.2449 15.58C98.9099 21.085 108.885 34.795 109.91 49.495C110.22 53.935 109.725 58.585 107.465 62.42C105.205 66.255 100.905 69.1 96.4699 68.695C92.9999 68.375 90.0099 66.23 87.2049 64.16C76.2299 56.05 65.2599 47.935 54.2849 39.825C51.4049 37.7 48.4749 35.515 46.4249 32.585C44.7399 30.17 42.9949 26.645 44.5499 23.74C45.8799 21.255 50.0449 18.355 52.4549 17.15C58.8749 13.94 66.1649 12.475 73.3249 12.92C77.3999 13.175 81.4449 14.05 85.2349 15.58H85.2449Z" fill="currentColor" />
            <path id="Vector_2" d="M47.28 120.04C47.07 117.135 46.68 114.235 46.09 111.38C45.585 108.94 44.98 106.5 44.045 104.19C43.11 101.88 42.01 99.895 40.355 98.175C38.7 96.455 36.495 95.235 34.185 94.48C29.83 93.06 25.025 93.22 20.84 91.25C19.175 90.465 17.495 89.395 16.43 87.855C15.28 86.19 15.065 84.37 15.655 82.44C16.385 80.065 17.51 77.795 16.7 75.265C16.355 74.18 15.775 73.16 15.55 72.035C15.505 71.805 15.505 71.525 15.72 71.285C16.08 70.885 16.565 70.65 17.07 70.485C18.07 70.15 18.33 68.765 17.37 68.2C17.015 67.99 16.64 67.775 16.375 67.45C16.37 67.44 16.185 67.14 16.245 67.265C16.245 67.265 16.19 67.055 16.21 67.18C16.23 67.305 16.21 67 16.21 66.965C16.185 67.18 16.29 66.775 16.28 66.8C16.315 66.725 16.45 66.52 16.53 66.405C16.785 66.04 17.085 65.715 17.36 65.37C18.57 63.855 19.27 61.985 18.115 60.205C17.265 58.895 15.765 58.12 14.89 56.915C13.955 55.63 14.565 54.005 15.5 52.9C16.085 52.21 16.805 51.725 17.535 51.205C18.37 50.61 19.195 50.005 20.025 49.405C21.68 48.205 23.47 47.1 24.98 45.715C27.785 43.145 29.19 39.595 30.55 36.14C31.91 32.685 33.52 29.47 35.68 26.47C37.84 23.47 40.385 20.855 43.215 18.555C48.94 13.9 55.91 10.805 63.2 9.67497C71.04 8.45997 79.185 9.59497 86.54 12.495C93.895 15.395 100.715 20.39 105.655 26.725C110.55 33 113.37 40.61 113.58 48.575C113.78 56.315 111.705 64.075 107.69 70.695C103.17 78.14 96.045 83.37 90.555 90.02C87.835 93.315 85.47 96.96 84.17 101.06C82.98 104.83 82.78 109.05 83.945 112.855C84.52 114.735 85.43 116.435 86.635 117.98C87.05 118.515 87.965 118.415 88.405 117.98C88.93 117.455 88.82 116.745 88.405 116.21C86.04 113.18 85.39 109.145 85.785 105.405C86.225 101.285 88.15 97.47 90.515 94.135C95.685 86.84 103.18 81.575 108.34 74.255C113.01 67.625 115.675 59.6 116.05 51.51C116.43 43.29 114.27 35.135 109.78 28.235C105.29 21.335 98.615 15.505 91.1 11.805C83.585 8.10497 75.27 6.29997 66.97 6.78497C59.165 7.24497 51.57 9.78497 45.06 14.12C38.55 18.455 33.37 24.185 30.025 31.065C28.38 34.45 27.42 38.185 25.38 41.375C24.4 42.91 23.135 44.13 21.65 45.175C19.9 46.41 18.185 47.685 16.45 48.93C14.715 50.175 13.25 51.275 12.425 53.215C11.6 55.155 11.815 57.085 13.12 58.675C13.64 59.31 14.275 59.82 14.89 60.36C15.395 60.805 15.96 61.3 16.165 61.81C16.24 62 16.275 62.17 16.22 62.48C16.145 62.88 15.87 63.245 15.63 63.565C15.105 64.26 14.44 64.89 14.065 65.685C13.115 67.69 14.41 69.355 16.12 70.355L16.42 68.07C15.275 68.455 14.125 69.07 13.495 70.14C12.865 71.21 12.995 72.32 13.36 73.415C13.69 74.405 14.195 75.345 14.435 76.36C14.66 77.32 14.435 78.3 14.145 79.22C13.81 80.28 13.36 81.3 13.09 82.375C12.79 83.58 12.74 84.78 12.97 86C13.355 88.055 14.625 89.895 16.205 91.23C17.905 92.665 19.91 93.675 22.015 94.37C24.27 95.11 26.645 95.405 28.97 95.815C31.295 96.225 33.765 96.725 35.895 97.88C38.025 99.035 39.47 100.675 40.6 102.685C41.925 105.04 42.685 107.66 43.3 110.28C44.06 113.49 44.555 116.745 44.79 120.035C44.84 120.71 45.33 121.285 46.04 121.285C46.68 121.285 47.34 120.71 47.29 120.035L47.28 120.04Z" fill="currentColor" />
            <path id="Vector_3" d="M31.9 47.14C32.66 49.87 34.83 51.87 37.4 52.92C40.465 54.17 43.94 53.805 47.07 53.015C48.63 52.62 47.97 50.21 46.405 50.605C43.8 51.265 40.985 51.6 38.4 50.645C36.515 49.945 34.855 48.45 34.305 46.48C33.875 44.935 31.46 45.59 31.895 47.145L31.9 47.14Z" fill="currentColor" />
        </g>
    </svg>
);

const CouplesIllustration = () => (
    <svg width="64" height="64" viewBox="0 0 140 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M59.97 72.43C51.44 63.995 47.48 49.93 51.44 39.58C59.825 17.665 78.39 20.375 85.71 34.43C91.3 45.165 89.975 57.325 82.62 66.935C75.265 76.545 68.5 80.86 59.97 72.425V72.43Z" fill="currentColor" />
        <path d="M108.18 110.04C106.645 102.62 110.87 94.6 117.58 91.26C121.83 89.145 126.88 89.655 131.11 87.465C133.005 86.485 134.78 84.895 135.71 82.945C136.735 80.785 136.58 78.64 135.575 76.51C135.115 75.535 134.42 74.555 134.275 73.46C134.145 72.45 134.825 71.85 135.22 71C136.36 68.515 134.45 66.145 132.03 65.535L132.58 67.625C133.51 66.675 134.55 65.77 135.215 64.6C135.495 64.105 135.405 63.495 135.02 63.085C134.48 62.51 133.85 61.905 133.53 61.165C133.25 60.525 133.445 59.91 133.75 59.36C134.53 57.94 135.695 56.755 136.39 55.285C137.085 53.815 137.12 52.055 136.145 50.61C135.225 49.25 133.845 48.295 132.5 47.395C131.045 46.42 129.555 45.495 128.12 44.49C126.685 43.485 125.485 42.21 124.8 40.51C124.115 38.81 123.53 37.155 122.755 35.525C122.025 33.995 121.2 32.51 120.285 31.08C116.625 25.335 111.635 20.45 105.825 16.895C100.015 13.34 93.315 11.145 86.475 10.8C79.635 10.455 72.805 11.96 66.655 14.88C60.49 17.81 55.06 22.265 51.1 27.835C47.14 33.405 44.885 40.16 44.395 47.005C43.905 53.85 45.225 60.88 48.255 67.07C49.775 70.175 51.765 73.03 54.11 75.57C56.605 78.27 59.43 80.635 62.05 83.205C64.67 85.775 67.04 88.495 68.515 91.83C70.005 95.19 70.5 99.045 69.995 102.68C69.745 104.505 69.235 106.325 68.485 108.005H70.645C68.745 104.77 68.015 101.07 68.53 97.355C69.045 93.64 70.59 90.22 72.57 87.115C74.55 84.01 77.255 81.225 80.1 78.69C82.945 76.155 85.945 73.66 88.335 70.63C93.04 64.645 95.545 57.11 95.6 49.515C95.655 42.395 93.475 35.335 89.65 29.345C85.82 23.345 80.375 18.36 73.955 15.25C67.05 11.905 59.205 10.58 51.58 11.37C44.86 12.07 38.215 14.435 32.335 17.75C26.455 21.065 21.675 25.765 18.945 31.89C17.53 35.065 16.515 38.4 14.65 41.36C13.875 42.585 12.965 43.7 11.9 44.69C10.645 45.86 9.20001 46.82 7.86001 47.885C6.52001 48.95 4.95001 50.12 3.90501 51.57C2.86001 53.02 2.85501 54.985 3.69001 56.61C4.48001 58.145 6.26001 59.035 6.87501 60.645C7.14501 61.355 6.98001 61.785 6.42001 62.24C5.79001 62.745 5.11001 63.16 4.68001 63.87C3.56501 65.71 4.86001 67.59 6.23501 68.825L6.49001 66.86C5.66001 67.35 4.82001 67.92 4.30001 68.755C3.71001 69.71 3.73001 70.855 4.11501 71.885C4.42501 72.72 4.88001 73.485 4.73501 74.405C4.59001 75.325 4.14001 76.2 3.80001 77.06C3.04501 78.975 2.94001 80.885 3.90001 82.75C4.86001 84.615 6.53001 85.89 8.37001 86.685C10.4 87.565 12.57 87.95 14.69 88.545C16.565 89.07 18.405 89.735 20.15 90.595C23.655 92.325 26.885 94.795 28.98 98.14C31.255 101.765 32.235 106.225 30.995 110.39C30.535 111.935 32.945 112.595 33.405 111.055C34.535 107.265 34.085 103.21 32.55 99.6C31.015 95.99 28.295 92.89 25.045 90.59C21.795 88.29 17.95 86.76 14.07 85.8C12.09 85.31 10.005 84.91 8.25001 83.82C6.88501 82.97 5.63001 81.495 5.66001 79.805C5.68001 78.82 6.15001 77.87 6.51501 76.97C6.91501 75.995 7.27501 74.975 7.26001 73.905C7.24501 72.725 6.61501 71.84 6.36501 70.73C6.16501 69.86 7.11001 69.395 7.75001 69.015C8.39001 68.635 8.61001 67.595 8.00501 67.05C7.60501 66.695 6.71001 66.005 6.74001 65.385C6.76501 64.895 7.59001 64.475 7.93001 64.21C9.58501 62.925 9.88001 61.055 8.96001 59.205C8.56001 58.4 7.93501 57.735 7.31001 57.105C6.76501 56.555 6.14001 56 5.81501 55.28C5.14501 53.795 5.99001 52.8 7.07001 51.81C9.53501 49.545 12.535 47.84 14.775 45.335C16.895 42.96 18.275 40.12 19.49 37.2C20.165 35.57 20.735 33.895 21.505 32.31C22.275 30.725 23.1 29.36 24.095 28.015C25.895 25.57 28.185 23.46 30.68 21.735C33.175 20.01 35.795 18.665 38.53 17.5C41.535 16.22 44.64 15.125 47.845 14.46C55.03 12.97 62.625 13.525 69.515 16.055C75.95 18.415 81.68 22.68 85.805 28.16C89.93 33.64 92.495 39.935 93.01 46.63C93.565 53.835 91.78 61.19 87.755 67.215C83.555 73.5 76.745 77.34 72.19 83.325C67.775 89.115 64.67 96.625 66.355 103.975C66.78 105.835 67.535 107.625 68.5 109.265C68.935 110.01 70.26 110.15 70.66 109.265C73.835 102.195 73.225 93.79 68.89 87.33C64.835 81.295 58.52 77.35 54.065 71.665C50.025 66.515 47.63 60.075 47 53.58C46.36 47.005 47.375 40.21 50.24 34.23C53.085 28.29 57.655 23.29 63.16 19.705C68.665 16.12 74.99 13.9 81.505 13.375C88.02 12.85 94.67 14.085 100.62 16.905C106.605 19.74 111.885 23.99 115.955 29.215C117.97 31.805 119.675 34.655 121.015 37.65C121.76 39.31 122.24 41.1 123.095 42.71C123.95 44.32 125.365 45.585 126.87 46.64C128.28 47.625 129.745 48.54 131.17 49.495C132.28 50.24 133.7 51.075 134.275 52.345C134.805 53.51 133.885 54.74 133.17 55.76C132.215 57.125 131.06 58.485 130.91 60.21C130.745 62.08 132.065 63.575 133.26 64.84L133.065 63.325C132.57 64.19 131.645 64.995 130.82 65.84C130.175 66.5 130.445 67.695 131.37 67.93C132.065 68.105 132.825 68.58 133.045 69.16C133.135 69.405 133.15 69.51 133 69.865C132.83 70.275 132.515 70.63 132.3 71.02C131.185 73.075 132.095 75.15 133.065 77.045C133.495 77.885 133.935 78.76 133.96 79.725C133.98 80.625 133.705 81.47 133.245 82.24C132.25 83.915 130.535 85.125 128.725 85.77C126.405 86.6 123.935 86.87 121.535 87.36C119.435 87.785 117.405 88.44 115.535 89.5C112.155 91.415 109.38 94.42 107.625 97.875C105.615 101.825 104.875 106.325 105.78 110.685C106.105 112.26 108.515 111.595 108.19 110.02L108.18 110.04Z" fill="currentColor" />
        <path d="M103.67 52.145C109.655 53.95 116.275 51.055 118.885 45.345C119.165 44.73 119.06 44 118.435 43.635C117.895 43.32 117.005 43.465 116.725 44.085C114.56 48.81 109.335 51.245 104.33 49.735C102.785 49.27 102.125 51.68 103.665 52.145H103.67Z" fill="currentColor" />
        <path d="M21.3049 45.51C23.8199 51 30.2399 53.76 35.9699 51.92C37.4949 51.43 36.8449 49.015 35.3049 49.51C32.9149 50.275 30.2599 50.175 28.0049 49.03C25.9699 47.995 24.4099 46.32 23.4649 44.25C23.1849 43.635 22.2949 43.485 21.7549 43.8C21.1249 44.17 21.0249 44.895 21.3049 45.51Z" fill="currentColor" />
    </svg>
);

const servicios = [
    {
        titulo: "Atención Individual",
        descripcion: "Desde la perspectiva sistémica, en la terapia individual se trabaja con aspectos de la esfera individual de la persona, así como con aspectos relacionados a sus relaciones interpersonales significativas. Se considera que los comportamientos del individuo están profundamente influenciados por sus interacciones y su entorno.",
        iconoTipo: "svg",
        icono: IndividualIllustration,
        href: "#"
    },
    {
        titulo: "Atención de Pareja",
        descripcion: "Desde la perspectiva sistémica se considera a la pareja como un sistema, en el que los problemas son considerados como parte de la dinámica del mismo. En una primera instancia, se buscará conocer a la pareja y al problema por el que consultan, y en una segunda instancia, se establecerán objetivos terapéuticos a trabajar.",
        iconoTipo: "svg",
        icono: CouplesIllustration,
        href: "#"
    },
    {
        titulo: "Atención Familiar",
        descripcion: "Se centra en las relaciones y dinámicas dentro de una familia, entendiendo que los problemas individuales a menudo derivan de interacciones y patrones dentro del sistema familiar. En una primera instancia, se buscará conocer a la familia y al problema por el que consultan, y en una segunda instancia, se establecerán los objetivos terapéuticos a trabajar.",
        iconoTipo: "imagen",
        iconoImagen: "/assets/servicio-familiar-servicios.png",
        href: "#"
    }
];

const ventajas = [
    {
        titulo: "Modalidades Flexibles",
        descripcion: "Ofrecemos turnos presenciales y online, con horarios que se adaptan a tu rutina y a la de tu familia.",
        icono: Clock,
        destacada: true,
    },
    {
        titulo: "Profesionales Capacitados",
        descripcion: "Nuestro equipo cuenta con formación de posgrado en el modelo sistémico y actualización constante.",
        icono: GraduationCap,
        bgLight: "bg-[#EFE7F5]",
    },
    {
        titulo: "Junto a Escuelas Prestigiosas",
        descripcion: "Mantenemos vínculos activos con la Escuela Sistémica Argentina y la Escuela de Terapia Familiar Sant Pau, Barcelona.",
        icono: Landmark,
        bgLight: "bg-[#E1F0F5]",
    },
    {
        titulo: "Enfoque Integral y Sistémico",
        descripcion: "Entendemos que cada consulta forma parte de una red de vínculos, por eso trabajamos contemplando el entorno completo de cada persona.",
        icono: HeartHandshake,
        bgLight: "bg-[#F5E8D9]",
    },
];

export default function Servicios() {
    return (
        <div className="bg-white min-h-screen overflow-hidden">
            <FixedWhatsappButton />

            {/* Hero Section */}
            <section className="pt-16 lg:pt-20 pb-16 lg:pb-24 px-6 lg:px-12 lg:mx-[150px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8"
                >
                    <div className="max-w-xl text-left">
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-violeta font-normal leading-[1.1] mb-6">
                            Nuestros <em className="italic font-bold">Servicios</em>
                        </h1>
                        <p className="text-violeta/60 text-lg lg:text-xl">
                            Cada proceso es único porque consideramos tu contexto, tus relaciones, tu historia y momento vital. La mirada sistémica es nuestra forma de trabajar
                        </p>
                    </div>

                    <Link
                        href="/contacto"
                        className="shrink-0 self-start lg:self-auto inline-flex items-center gap-2 bg-violeta text-white px-7 py-3.5 rounded-full font-medium hover:bg-violeta/90 transition-colors shadow-sm"
                    >
                        Comencemos ahora
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </section>

            {/* Listado de Servicios (Grid 3 columnas) */}
            <section className="pb-20 lg:pb-32 ">
                <div className="lg:mx-[50px] md:mx-[50px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16">
                        {servicios.map((servicio, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.15,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="flex flex-col bg-[#f5f7fa] items-start text-left p-10 rounded-3xl "
                            >
                                {/* Icon / Illustration */}
                                <div className="text-[#532d88] mb-6 h-12 flex items-center justify-start">
                                    {servicio.iconoTipo === 'imagen' ? (
                                        <div className="relative w-16 h-16">
                                            <Image
                                                src={servicio.iconoImagen}
                                                alt={servicio.titulo}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    ) : (

                                        <servicio.icono />

                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="font-serif text-2xl lg:text-3xl text-violeta font-normal mb-3">
                                    {servicio.titulo}
                                </h3>

                                {/* Description */}
                                <p className="text-violeta/80 text-base leading-relaxed mb-8 flex-grow">
                                    {servicio.descripcion}
                                </p>

                                {/* Link */}
                                <Link
                                    href="https://wa.me/543885737111"
                                    className="inline-flex items-center gap-2 text-violeta font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all group"
                                >
                                    Quiero saber más <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ventajas */}
            <section className="pb-20 lg:pb-32 px-6 lg:px-12 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12 lg:mb-16"
                >
                    <div className="max-w-xl text-left">
                        <h2 className="font-serif text-4xl md:text-5xl text-violeta font-normal leading-[1.1] mb-6">
                            ¿Por qué <em className="italic font-bold">elegirnos?</em>
                        </h2>
                        <p className="text-violeta/60 text-lg">
                            Nuestro compromiso con vos va más allá de la consulta. Estas son algunas de las cosas que nos distinguen.
                        </p>
                    </div>

                    <Link
                        href="/contacto"
                        className="shrink-0 self-start lg:self-auto inline-flex items-center gap-2 bg-violeta text-white px-7 py-3.5 rounded-full font-medium hover:bg-violeta/90 transition-colors shadow-sm"
                    >
                        Quiero mi turno
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ventajas.map((ventaja, index) => (
                        <motion.div
                            key={ventaja.titulo}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            className={`rounded-3xl p-8 flex flex-col ${ventaja.destacada ? 'bg-violeta text-white' : `bg-[#E8E6F5] text-violeta`
                                }`}
                        >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${ventaja.destacada ? 'bg-white/15' : 'bg-white/70'
                                }`}>
                                <ventaja.icono className={`w-6 h-6 ${ventaja.destacada ? 'text-white' : 'text-[#532d88]'}`} />
                            </div>
                            <h3 className="font-serif text-2xl font-normal mb-3 leading-tight">
                                {ventaja.titulo}
                            </h3>
                            <p className={`text-sm leading-relaxed mb-6 ${ventaja.destacada ? 'text-white/75' : 'text-violeta/70'}`}>
                                {ventaja.descripcion}
                            </p>
                            <Link
                                href="https://wa.me/543885737111"
                                className={`mt-auto self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${ventaja.destacada
                                    ? 'bg-white text-violeta hover:bg-white/90'
                                    : 'bg-violeta text-white hover:bg-violeta/90'
                                    }`}
                            >
                                Consultar
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Final */}
            <section className="pb-20 lg:pb-32 px-6 lg:px-12 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-violeta rounded-[3rem] p-10 lg:p-16 text-center relative overflow-hidden flex flex-col items-center"
                >
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #ffffff 0%, transparent 70%)' }}></div>
                    <div className="relative z-10 w-full flex flex-col items-center">
                        <h2 className="font-serif text-4xl lg:text-5xl text-white font-normal leading-tight mb-6">
                            ¿Te interesa alguno de <br className="hidden md:block" /> <em className="italic">nuestros servicios?</em>
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                            No dudes en comunicarte con nosotros. Estamos aquí para responder tus consultas y acompañarte.
                        </p>

                        {/* Botón Mobile */}
                        <Link
                            href="https://wa.me/543885737111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex md:hidden items-center gap-3 bg-sky-300 text-[#0c1030] px-8 py-4 rounded-full text-lg font-semibold hover:bg-sky-200 transition-colors shadow-lg shadow-sky-300/20"
                        >
                            <AiOutlineWhatsApp size={28} />
                            Contactar
                            <ArrowRight className="w-5 h-5 ml-1" />
                        </Link>

                        {/* Botón Desktop */}
                        <Link
                            href="https://api.whatsapp.com/message/6ACK444DNTJEM1?autoload=1&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center gap-3 bg-sky-300 text-[#0c1030] px-8 py-4 rounded-full text-lg font-semibold hover:bg-sky-200 transition-colors shadow-lg shadow-sky-300/20"
                        >
                            <AiOutlineWhatsApp size={28} />
                            Contactar por WhatsApp
                            <ArrowRight className="w-5 h-5 ml-1" />
                        </Link>
                    </div>
                </motion.div>

            </section>
        </div>
    );
}
