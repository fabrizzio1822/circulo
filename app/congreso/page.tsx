'use client';

import { motion } from "framer-motion";
import { Check, ArrowUpRight, Mail } from "lucide-react";
import { InstagramFill } from "akar-icons";
import Link from "next/link";
import FixedWhatsappButton from "@/components/Whatsapp/Whatsapp";
const stats = [
    { valor: "2 días", label: "de encuentro" },
    { valor: "15", label: "disertantes principales" },
    { valor: "8", label: "ejes temáticos" },
    { valor: "Cabildo", label: "histórico de jujuy" },
];

const datosEvento = [
    { label: "Fechas", valor: "18 y 19 de septiembre de 2026" },
    { label: "Sede", valor: "Cabildo Histórico de Jujuy" },
    { label: "Ciudad", valor: "San Salvador de Jujuy" },
    { label: "Modalidad", valor: "Presencial + videoconferencias" },
];

const dirigidoA = [
    "Psicólogos",
    "Trabajadores sociales",
    "Psicopedagogos",
    "Médicos y psiquiatras",
    "Docentes y educadores",
    "Estudiantes avanzados",
];

/* TODO: ajustá los 8 ejes según el programa definitivo del congreso */
const ejes = [
    { titulo: "Terapia Familiar Sistémica", descripcion: "Modelos de intervención con familias en distintas etapas del ciclo vital." },
    { titulo: "Terapia de Pareja", descripcion: "Herramientas para el abordaje de conflictos y crisis vinculares." },
    { titulo: "Trabajo con Grupos", descripcion: "Dispositivos grupales pensados desde una mirada relacional." },
    { titulo: "Niñez y Adolescencia", descripcion: "Intervenciones sistémicas en infancias y adolescencias." },
    { titulo: "Ética Profesional", descripcion: "Dilemas éticos en la práctica clínica sistémica." },
    { titulo: "Supervisión Clínica", descripcion: "El rol de la supervisión en la formación del terapeuta." },
    { titulo: "Investigación en Sistémica", descripcion: "Evidencia y producción científica en el modelo sistémico." },
    { titulo: "Contextos Institucionales", descripcion: "El abordaje sistémico en escuelas, hospitales y organizaciones." },
];

/* TODO: reemplazá nombre, rol y foto de cada disertante real */
const disertantes = [
    { nombre: "Nombre Apellido", rol: "Especialista en Terapia Familiar", foto: "/assets/disertante-1.jpg" },
    { nombre: "Nombre Apellido", rol: "Especialista en Terapia de Pareja", foto: "/assets/disertante-2.jpg" },
    { nombre: "Nombre Apellido", rol: "Especialista en Niñez y Adolescencia", foto: "/assets/disertante-3.jpg" },
    { nombre: "Nombre Apellido", rol: "Especialista en Trabajo Grupal", foto: "/assets/disertante-4.jpg" },
    { nombre: "Nombre Apellido", rol: "Especialista en Ética Profesional", foto: "/assets/disertante-5.jpg" },
    { nombre: "Nombre Apellido", rol: "Especialista en Supervisión Clínica", foto: "/assets/disertante-6.jpg" },
];

const cenaDatos = [
    { label: "Dirección", valor: "Independencia 472, San Salvador de Jujuy" },
    { label: "Hora", valor: "21:30" },
    { label: "Costo", valor: "$40.000 ARS" },
    { label: "Cupos", valor: "Se consiguen el día del congreso" },
];

const pasos = [
    {
        titulo: "Completa el formulario",
        descripcion: "Completa el formulario de inscripción con tus datos.",
        linkLabel: "Abrir formulario",
        link: "https://forms.gle/QrAKRng2HYQf8J7j7",
    },
    {
        titulo: "Realiza el pago",
        descripcion: "Paga a través de Mercado Pago (usuario: circulo.sistemico) según tu condición: $65.000 ARS profesional o $40.000 ARS estudiante con constancia oficial.",
    },
    {
        titulo: "Adjunta el comprobante",
        descripcion: "Adjunta el comprobante de pago directamente en el formulario, o envíalo por mail a circulosistemico1@gmail.com.",
    },
    {
        titulo: "Aguarda la confirmación",
        descripcion: "Recibirás la confirmación de tu inscripción por correo electrónico.",
    },
];

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export default function CongresoSistemicoDelNorte() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <FixedWhatsappButton />
            <section className="bg-[url('/assets/congreso/congreso-mobile.webp')] md:bg-[url('/assets/congreso/congreso-desktop.webp')] md:h-screen md:max-h-[95vh] bg-cover bg-center bg-no-repeat rounded-b-[3rem] px-6 lg:px-12 pt-16 pb-14 md:pt-20 md:pb-16 relative">
                <div className="absolute inset-0 bg-black/40 rounded-b-[3rem] pointer-events-none"></div>
                <div className="md:mx-[50px] lg:mx-[100px] mx-auto relative z-10 mt-20">
                    <motion.div {...fadeUp}>
                        <span className="inline-flex items-center gap-2 text-white/80 text-sm bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-300"></span>
                            18 y 19 de septiembre · San Salvador de Jujuy
                        </span>

                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
                            Congreso Sistémico
                            <br />
                            <em className="italic text-sky-300 font-normal">del Norte</em>
                        </h1>

                        <p className="text-white/70 text-lg max-w-2xl mb-10 leading-relaxed">
                            Un espacio de estudio, actualización e intercambio sobre el trabajo
                            sistémico relacional con familias, parejas y grupos. El primer
                            encuentro de su tipo en el Noroeste Argentino.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-16">
                            <Link
                                href="https://forms.gle/QrAKRng2HYQf8J7j7"
                                className="bg-sky-300 text-[#171142] px-7 py-3.5 rounded-full font-medium hover:bg-sky-200 transition-colors"
                            >
                                Inscribirme al congreso
                            </Link>
                            <a
                                href="/pdf/congreso.docx"
                                download="Congreso_Sistemico_2026.docx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-white/30 text-white px-7 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors"
                            >
                                Conocer más
                            </a>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 sm:gap-0 border-t border-white/10 pt-10">
                            {stats.map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className={`px-0 sm:px-8 ${i > 0 ? 'sm:border-l border-white/10' : ''}`}
                                >
                                    <p className="font-serif text-3xl text-white mb-1">{stat.valor}</p>
                                    <p className="text-white/50 text-xs tracking-widest uppercase">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* El encuentro */}
            <section id="el-encuentro" className="px-6 lg:px-12 py-24 md:py-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">
                    <motion.div {...fadeUp}>
                        <p className="text-turquesa text-sm font-medium tracking-widest uppercase mb-4">
                            El encuentro
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl text-violeta mb-8 leading-tight">
                            ¡Bienvenidos al Congreso Sistémico del Norte!
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Los días 18 y 19 de septiembre nos reunimos para construir un espacio
                            de estudio, actualización e intercambio entre profesionales y
                            estudiantes de toda la región. Este importante evento, el primero de
                            su tipo en el Noroeste Argentino, se llevará a cabo en las
                            instalaciones del{' '}
                            <strong className="text-violeta font-semibold">
                                Cabildo Histórico de Jujuy
                            </strong>
                            , en San Salvador de Jujuy.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Este congreso es un encuentro académico, ético y profesional sobre
                            el trabajo sistémico relacional con familias, parejas y grupos,
                            pensado como un espacio de intercambio real entre interesados en
                            este modelo de trabajo.
                        </p>
                    </motion.div>

                    <motion.div
                        {...fadeUp}
                        className="bg-[#F4F1FA] rounded-3xl p-8 shadow-sm"
                    >
                        <h3 className="font-serif text-xl text-violeta mb-6">Datos del evento</h3>
                        <div className="space-y-5">
                            {datosEvento.map((dato, i) => (
                                <div
                                    key={dato.label}
                                    className={`pb-5 ${i < datosEvento.length - 1 ? 'border-b border-black/10' : ''}`}
                                >
                                    <p className="text-violeta/50 text-xs tracking-widest uppercase mb-1">
                                        {dato.label}
                                    </p>
                                    <p className="text-violeta font-medium">{dato.valor}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Dirigido a */}
            <section id="dirigido-a" className="bg-[#F4F1FA] px-6 lg:px-12 py-24 md:py-32">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeUp} className="max-w-3xl mb-14">
                        <p className="text-turquesa text-sm font-medium tracking-widest uppercase mb-4">
                            ¿A quién está dirigido?
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl text-violeta leading-tight">
                            Para todo profesional o estudiante interesado en el abordaje
                            sistémico de las relaciones humanas
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {dirigidoA.map((item, i) => (
                            <motion.div
                                key={item}
                                {...fadeUp}
                                transition={{ ...fadeUp.transition, delay: (i % 3) * 0.06 }}
                                className="flex items-center gap-3 bg-white rounded-2xl px-6 py-5 shadow-sm"
                            >
                                <span className="w-6 h-6 rounded-full bg-turquesa/15 text-turquesa flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5" />
                                </span>
                                <span className="text-violeta font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ejes temáticos */}
            <section id="ejes" className="px-6 lg:px-12 py-24 md:py-32">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeUp} className="max-w-2xl mb-14">
                        <p className="text-turquesa text-sm font-medium tracking-widest uppercase mb-4">
                            Ejes temáticos
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl text-violeta leading-tight">
                            Ocho ejes para pensar la clínica sistémica
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ejes.map((eje, i) => (
                            <motion.div
                                key={eje.titulo}
                                {...fadeUp}
                                transition={{ ...fadeUp.transition, delay: (i % 4) * 0.06 }}
                                className="rounded-3xl p-7 bg-[#F4F1FA]"
                            >
                                <p className="font-serif text-3xl text-violeta/25 mb-4">
                                    {String(i + 1).padStart(2, '0')}
                                </p>
                                <h3 className="font-serif text-lg text-violeta mb-2 leading-snug">
                                    {eje.titulo}
                                </h3>
                                <p className="text-violeta/60 text-sm leading-relaxed">
                                    {eje.descripcion}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inversión */}
            <section id="inversion" className="px-6 lg:px-12 py-24 md:py-32">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeUp} className="max-w-2xl mb-14">
                        <p className="text-turquesa text-sm font-medium tracking-widest uppercase mb-4">
                            Inversión
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl text-violeta leading-tight">
                            Valores de inscripción
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                        <motion.div {...fadeUp} className="rounded-3xl p-8 bg-[#F4F1FA]">
                            <p className="text-violeta/50 text-xs tracking-widest uppercase mb-3">
                                Profesional
                            </p>
                            <p className="font-serif text-4xl text-violeta mb-4">
                                $65.000 <span className="text-lg font-sans text-violeta/50">ARS</span>
                            </p>
                            <p className="text-violeta/60 text-sm leading-relaxed">
                                Incluye acceso a las dos jornadas, materiales del congreso y
                                certificado de asistencia.
                            </p>
                        </motion.div>

                        <motion.div
                            {...fadeUp}
                            className="rounded-3xl p-8 bg-violeta text-white"
                        >
                            <p className="text-white/50 text-xs tracking-widest uppercase mb-3">
                                Estudiante
                            </p>
                            <p className="font-serif text-4xl mb-4">
                                $40.000 <span className="text-lg font-sans text-white/50">ARS</span>
                            </p>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Con constancia oficial de alumno regular. Incluye acceso a las
                                dos jornadas y certificado de asistencia.
                            </p>
                        </motion.div>
                    </div>

                    {/* Cena del congreso */}
                    <motion.div
                        {...fadeUp}
                        className="rounded-[2.5rem] p-8 md:p-12 bg-gradient-to-br from-violeta to-[#3b2a6b] text-white grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                    >
                        <div>
                            <p className="text-white/60 text-xs tracking-widest uppercase mb-4">
                                Cena del congreso
                            </p>
                            <h3 className="font-serif text-3xl md:text-4xl mb-4">
                                Una noche en Chola Bar
                            </h3>
                            <p className="text-white/70 leading-relaxed mb-8">
                                Los invitamos a la cena del congreso: una noche con música en
                                vivo, bebida y comida incluida. ¡Cupos limitados!
                            </p>
                            <div className="inline-flex items-baseline gap-2 bg-white/10 rounded-2xl px-6 py-4">
                                <span className="font-serif text-3xl">$40.000</span>
                                <span className="text-white/60 text-sm">ARS</span>
                            </div>
                        </div>

                        <div className="space-y-5">
                            {cenaDatos.map((dato, i) => (
                                <div
                                    key={dato.label}
                                    className={`pb-5 ${i < cenaDatos.length - 1 ? 'border-b border-white/10' : ''}`}
                                >
                                    <p className="text-white/50 text-xs tracking-widest uppercase mb-1">
                                        {dato.label}
                                    </p>
                                    <p className="font-medium">{dato.valor}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Cómo inscribirse */}
            <section id="inscripcion" className="bg-[#F4F1FA] px-6 lg:px-12 py-24 md:py-32">
                <div className="max-w-6xl mx-auto">
                    <motion.div {...fadeUp} className="max-w-2xl mb-14">
                        <p className="text-turquesa text-sm font-medium tracking-widest uppercase mb-4">
                            Cómo inscribirse
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl text-violeta leading-tight">
                            Cuatro pasos para asegurar tu lugar
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pasos.map((paso, i) => (
                            <motion.div
                                key={paso.titulo}
                                {...fadeUp}
                                transition={{ ...fadeUp.transition, delay: (i % 4) * 0.06 }}
                                className="bg-white rounded-3xl p-8 flex flex-col"
                            >
                                <p className="font-serif text-3xl text-violeta/25 mb-6">
                                    {String(i + 1).padStart(2, '0')}
                                </p>
                                <h3 className="font-serif text-xl text-violeta mb-3">{paso.titulo}</h3>
                                <p className="text-violeta/60 text-sm leading-relaxed mb-4">
                                    {paso.descripcion}
                                </p>
                                {paso.link && (
                                    <Link
                                        href={paso.link}
                                        className="mt-auto inline-flex items-center gap-1.5 text-turquesa text-sm font-medium hover:underline"
                                    >
                                        {paso.linkLabel}
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contacto */}
            <section id="contacto" className="px-6 lg:px-12 py-24 md:py-32 text-center">
                <motion.div {...fadeUp} className="max-w-2xl mx-auto">
                    <p className="text-turquesa text-sm font-medium tracking-widest uppercase mb-4">
                        Contacto
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-violeta mb-6">
                        ¿Tenés dudas? Escribinos
                    </h2>
                    <p className="text-violeta/60 text-lg mb-10">
                        Estamos disponibles para resolver cualquier consulta sobre el
                        congreso, la inscripción o la cena.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="mailto:circulosistemico1@gmail.com"
                            className="inline-flex items-center gap-2 bg-violeta text-white px-6 py-3.5 rounded-full font-medium hover:bg-violeta/90 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            circulosistemico1@gmail.com
                        </Link>
                        <Link
                            href="https://www.instagram.com/circulosistemico/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border border-violeta/20 text-violeta px-6 py-3.5 rounded-full font-medium hover:bg-violeta/5 transition-colors"
                        >
                            <InstagramFill strokeWidth={2} size={18} />
                            @circulosistemico
                        </Link>
                    </div>
                </motion.div>
            </section>

        </div>
    );
}