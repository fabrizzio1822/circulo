"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const ScribbleRing = ({ colors, baseRotation = 105 }: { colors: string[], baseRotation?: number }) => {
    const rings = [
        { rx: 220, ry: 100, rot: baseRotation },
        { rx: 220, ry: 100, rot: baseRotation + 15 },
        { rx: 220, ry: 100, rot: baseRotation + 30 },
    ];

    return (
        <svg
            viewBox="0 0 500 500"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none z-40"
        >
            {rings.map((r, i) => (
                <ellipse
                    key={i}
                    cx="250"
                    cy="250"
                    rx={r.rx}
                    ry={r.ry}
                    fill="none"
                    stroke={colors[i] || colors[0]}
                    strokeWidth={4}
                    strokeLinecap="round"
                    transform={`rotate(${r.rot} 250 250)`}
                />
            ))}
        </svg>
    );
};

const TextBlock = ({
    title,
    titleItalic,
    description,
    cta,
    href,
}: {
    title: string;
    titleItalic: string;
    description: string;
    cta?: string;
    href?: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
    >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-violeta leading-[1.1] font-normal mb-6 lg:mb-8">
            {title} <em className="italic">{titleItalic}</em>
        </h2>
        <p className="text-violeta/60 text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10 max-w-md">
            {description}
        </p>

        {cta && href && (
            <a
                href={href}
                className="inline-flex items-center gap-2 bg-violeta text-white px-7 py-3.5 rounded-full text-base font-medium hover:bg-violeta/90 transition"
            >
                {cta}
                <ArrowRight className="w-4 h-4" />
            </a>
        )}
    </motion.div>
);

const photoIn = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease, delay: 0.2 },
};

export default function Diferenciales() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax values for images (subtle vertical movement)
    const ySlow = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const yMedium = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const yFast = useTransform(scrollYProgress, [0, 1], [0, -90]);

    // Parallax values for SVG rings (subtle rotation)
    const rotateRight = useTransform(scrollYProgress, [0, 1], [0, 15]);
    const rotateLeft = useTransform(scrollYProgress, [0, 1], [0, -15]);

    return (
        <section
            id="nuestro-enfoque"
            ref={containerRef}
            className="bg-[#f5f7fa] py-16 lg:py-24 overflow-hidden"
        >
            <div className="md:mx-[100px] mx-auto px-6 lg:px-12 space-y-20 lg:space-y-32">
                {/* Bloque 1: texto izq — 2 fotos der */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <TextBlock
                        title="Encontrá al terapeuta que"
                        titleItalic="mejor se adapte a vos"
                        description="Contanos qué te trae y te sugerimos al profesional del equipo con la formación y experiencia adecuada a tu momento. Sin listas de espera."
                        cta="Conocer al equipo"
                        href="/sobre-nosotros"
                    />
                    <motion.div
                        {...photoIn}
                        className="relative h-[340px] lg:h-[500px] w-full flex justify-center"
                    >
                        <div className="relative w-[300px] sm:w-[400px] lg:w-full h-full">
                            <motion.div style={{ y: ySlow }} className="absolute top-0 left-0 lg:left-12 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[340px] lg:h-[340px] rounded-2xl overflow-hidden shadow-2xl z-10">
                                <Image
                                    src="/assets/img-7.jpg"
                                    alt="Terapeuta en sesión"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 340px"
                                />
                            </motion.div>
                            <motion.div style={{ y: yFast }} className="absolute bottom-0 right-0 lg:right-8 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[340px] lg:h-[340px] rounded-2xl overflow-hidden shadow-2xl z-50">
                                <Image
                                    src="/assets/img-1.jpg"
                                    alt="Persona en consulta"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 340px"
                                />
                            </motion.div>
                            <motion.div style={{ rotate: rotateRight }} className="absolute inset-0 z-40 pointer-events-none origin-center">
                                <ScribbleRing colors={["#62539F", "#0784B2", "#FFFFFF"]} baseRotation={105} />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Bloque 2: 3 fotos izq — texto der */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        {...photoIn}
                        className="relative h-[380px] lg:h-[500px] w-full order-2 lg:order-1 flex justify-center"
                    >
                        <div className="relative w-[320px] sm:w-[440px] lg:w-[520px] h-full">
                            <motion.div style={{ y: ySlow }} className="absolute top-0 left-0 w-[170px] h-[220px] lg:w-[210px] lg:h-[270px] rounded-2xl overflow-hidden shadow-2xl z-10">
                                <Image
                                    src="/assets/casa/vidrio.jpg"
                                    alt="Sesión presencial"
                                    fill
                                    className="object-cover"
                                    sizes="210px"
                                />
                            </motion.div>
                            <motion.div style={{ y: yMedium }} className="absolute top-[80px] left-[75px] sm:left-[100px] lg:top-[130px] lg:left-[140px] w-[190px] h-[210px] lg:w-[240px] lg:h-[250px] rounded-2xl overflow-hidden shadow-2xl z-50">
                                <Image
                                    src="/assets/casa/sillones.jpg"
                                    alt="Sesión híbrida"
                                    fill
                                    className="object-cover"
                                    sizes="240px"
                                />
                            </motion.div>
                            <motion.div style={{ y: yFast }} className="absolute bottom-0 right-0 w-[180px] h-[190px] lg:w-[230px] lg:h-[220px] rounded-2xl overflow-hidden shadow-2xl z-30">
                                <Image
                                    src="/assets/casa/planta.jpg"
                                    alt="Sesión online"
                                    fill
                                    className="object-cover"
                                    sizes="230px"
                                />
                            </motion.div>
                            <motion.div style={{ rotate: rotateLeft }} className="absolute inset-0 z-40 pointer-events-none origin-center">
                                <ScribbleRing colors={["#0784B2", "#FFFFFF", "#62539F"]} baseRotation={30} />
                            </motion.div>
                        </div>
                    </motion.div>
                    <div className="order-1 lg:order-2">
                        <TextBlock
                            title="Sesiones presenciales"
                            titleItalic="u online"
                            description="Nuestra casa terapéutica se ubica en San Salvador de Jujuy (Barrio Ciudad de Nieva). También contamos con encuentros virtuales para quienes están en otras provincias o prefieren la comodidad de su casa. La modalidad la elegís vos."
                            cta="Conocer más"
                            href="/contacto"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}