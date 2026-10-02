'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import Image from 'next/image';

export type GalleryImage = {
    id: string;
    thumbnail: string;
    full: string;
    alt: string;
    width: number;
    height: number;
};

export default function CongresoFotosClient({ 
    day1Images, 
    day2Images 
}: { 
    day1Images: GalleryImage[], 
    day2Images: GalleryImage[] 
}) {
    const [currentDay, setCurrentDay] = useState<number | null>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    // Evitar el scroll en el body cuando el modal está abierto
    useEffect(() => {
        if (currentDay !== null) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }
        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        };
    }, [currentDay]);

    return (
        <div className="bg-white min-h-screen text-black font-sans selection:bg-black/20">
            {/* SEGMENTO 1: INTRO Y VIDEO */}
            <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden text-white">
                {/* Background Images */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/50 md:bg-black/40 z-10" />
                    <Image
                        src="/assets/congreso/congreso-mobile.webp"
                        alt="Fondo Congreso"
                        fill
                        className="object-cover md:hidden z-0"
                        priority
                        quality={90}
                    />
                    <Image
                        src="/assets/congreso/congreso-desktop.webp"
                        alt="Fondo Congreso"
                        fill
                        className="object-cover hidden md:block z-0"
                        priority
                        quality={90}
                    />
                    {/* Gradiente difuminado hacia blanco para conectar con el resto de la página */}
                    <div className="absolute bottom-0 inset-x-0 h-1/2 md:h-[60%] bg-gradient-to-t from-white via-white/60 to-transparent z-10" />
                </div>

                {/* Contenido */}
                <div className="relative z-20 max-w-[1200px] mx-auto px-6 lg:px-12">
                    {/* Textos Introductorios */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8"
                        >
                            Congreso Sistémico
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-white/80 md:text-white/90 text-lg md:text-xl font-light leading-relaxed mb-6"
                        >
                            Un espacio diseñado para profundizar saberes, compartir experiencias y fortalecer nuestros lazos en comunidad.
                        </motion.p>
                    </div>

                {/* Video Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="relative w-full min-h-[300px] md:min-h-[500px] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl bg-zinc-900 border border-white/5 flex items-center justify-center"
                >
                    {!isVideoLoaded && (
                        <div className="absolute inset-0 bg-zinc-800 animate-pulse flex items-center justify-center z-10">
                            <Loader2 className="w-10 h-10 text-white/30 animate-spin" />
                        </div>
                    )}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        controls
                        aria-label="Video resumen del congreso sistémico"
                        poster="/assets/videos/congreso-poster.webp"
                        className={`w-full h-auto object-cover max-h-[75vh] transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoadedData={() => setIsVideoLoaded(true)}
                        onCanPlay={() => setIsVideoLoaded(true)}
                    >
                        <source src="/assets/videos/congreso-final.mp4" type="video/mp4" />
                        Tu navegador no soporta la reproducción de este video.
                    </video>
                </motion.div>
                </div>
            </section>

            <div className="py-12 md:py-24">
                {/* SEGMENTO 2: DÍA 1 */}
                <PhotoSegment
                    title="Reviví el día 1 del congreso."
                    description="Capturando momentos, aprendizajes y encuentros que marcaron el inicio de esta experiencia inolvidable."
                    images={day1Images}
                    onOpenAll={() => setCurrentDay(1)}
                />

                {/* SEGMENTO 3: DÍA 2 */}
                <PhotoSegment
                    title="Reviví el día 2 del congreso."
                    description="Continuamos la jornada profundizando saberes, compartiendo experiencias y fortaleciendo lazos en comunidad."
                    images={day2Images}
                    onOpenAll={() => setCurrentDay(2)}
                />
            </div>

            {/* MODAL PARA VER TODAS LAS FOTOS */}
            <AnimatePresence>
                {currentDay !== null && (
                    <GalleryModal 
                        day={currentDay} 
                        images={currentDay === 1 ? day1Images : day2Images} 
                        onClose={() => setCurrentDay(null)} 
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

function PhotoSegment({ 
    title, 
    description, 
    images, 
    onOpenAll 
}: { 
    title: string, 
    description: string, 
    images: GalleryImage[], 
    onOpenAll: () => void 
}) {
    // Only show first 10 for preview
    const previewImages = images.slice(0, 10);

    return (
        <section className="max-w-[1500px] mx-auto px-6 lg:px-12 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-16 lg:gap-24 items-start">
            {/* Texto a la izquierda */}
            <div className="lg:sticky lg:top-40 z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-light leading-[1.1] mb-8 text-black"
                >
                    {title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-black/60 text-lg md:text-xl mb-12 max-w-sm leading-relaxed font-light"
                >
                    {description}
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    onClick={onOpenAll}
                    className="inline-flex items-center justify-center bg-violeta text-white px-9 py-4 rounded-full font-medium hover:bg-violeta/90 hover:scale-105 transition-all duration-300"
                >
                    Ver todas las imágenes
                </motion.button>
            </div>

            {/* Grilla Masonry a la derecha */}
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {previewImages.map((img, i) => (
                    <ImageCard 
                        key={img.id}
                        img={img}
                        onClick={onOpenAll}
                        delay={(i % 10) * 0.05}
                    />
                ))}
            </div>
        </section>
    );
}

function GalleryModal({ 
    day, 
    images, 
    onClose 
}: { 
    day: number, 
    images: GalleryImage[], 
    onClose: () => void 
}) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    // Handle escape key for gallery
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && lightboxIndex === null) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose, lightboxIndex]);

    return (
        <>
            <motion.div
                data-lenis-prevent="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 z-[150] bg-white overflow-y-auto overscroll-contain text-black"
            >
                {/* Header sticky */}
                <div className="sticky top-0 z-20 flex justify-between items-center px-6 lg:px-12 py-6 bg-gradient-to-b from-white via-white/90 to-transparent pb-10">
                    <div className="flex flex-col">
                        <span className="text-black/50 uppercase tracking-widest text-xs font-semibold mb-1">Galería Completa</span>
                        <h3 className="font-serif text-3xl">Día {day}</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 text-black hover:rotate-90 transition-all duration-300"
                        aria-label="Cerrar galería"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Grid Masonry de Thumbnails */}
                <div className="max-w-[1800px] mx-auto px-6 lg:px-12 pb-24 pt-4">
                    <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
                        {images.map((img, i) => (
                            <ImageCard 
                                key={img.id}
                                img={img}
                                onClick={() => setLightboxIndex(i)}
                                delay={(i % 10) * 0.05}
                                showOverlay={true}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Lightbox para imagen individual */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <Lightbox
                        images={images}
                        initialIndex={lightboxIndex}
                        onClose={() => setLightboxIndex(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

function Lightbox({ 
    images, 
    initialIndex, 
    onClose 
}: { 
    images: GalleryImage[], 
    initialIndex: number, 
    onClose: () => void 
}) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [direction, setDirection] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        setIsLoaded(false);
    }, [currentIndex]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') paginate(1);
            else if (e.key === 'ArrowLeft') paginate(-1);
            else if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [paginate, onClose]);

    const currentImage = images[currentIndex];
    const prevImage = images[(currentIndex - 1 + images.length) % images.length];
    const nextImage = images[(currentIndex + 1) % images.length];

    return (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center touch-none">
            {/* Header / Controles Top */}
            <div className="absolute top-0 inset-x-0 z-50 flex items-center justify-between p-4 md:p-6 bg-gradient-to-b from-black/60 to-transparent">
                <div className="text-white/70 font-mono text-sm tracking-widest bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
                    {currentIndex + 1} / {images.length}
                </div>
                <button
                    onClick={onClose}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Cerrar imagen"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Navegación Desktop */}
            <button
                className="absolute left-4 md:left-8 z-50 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:-translate-x-1"
                onClick={() => paginate(-1)}
                aria-label="Imagen anterior"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
                className="absolute right-4 md:right-8 z-50 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:translate-x-1"
                onClick={() => paginate(1)}
                aria-label="Imagen siguiente"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Imagen Central con Animación */}
            <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        {!isLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center z-0">
                                <Loader2 className="w-8 h-8 text-white/50 animate-spin" />
                            </div>
                        )}
                        <div className="relative w-full h-full p-4 md:p-12 flex items-center justify-center">
                            <Image
                                src={currentImage.full}
                                alt={currentImage.alt}
                                fill
                                className="object-contain z-10"
                                sizes="100vw"
                                quality={90}
                                priority
                                onLoad={() => setIsLoaded(true)}
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Precarga de imágenes adyacentes para navegación fluida */}
            <div className="hidden">
                <Image src={prevImage.full} alt="prev" width={10} height={10} priority />
                <Image src={nextImage.full} alt="next" width={10} height={10} priority />
            </div>
        </div>
    );
}

function ImageCard({ 
    img, 
    onClick, 
    delay = 0,
    showOverlay = false
}: { 
    img: GalleryImage, 
    onClick: () => void, 
    delay?: number,
    showOverlay?: boolean
}) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`break-inside-avoid relative rounded-xl overflow-hidden shadow-sm group cursor-pointer ${!isLoaded ? 'bg-zinc-200 animate-pulse' : 'bg-zinc-100'}`}
            onClick={onClick}
        >
            <Image
                src={img.thumbnail}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className={`w-full h-auto block object-cover group-hover:scale-105 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                onLoad={() => setIsLoaded(true)}
            />
            {/* Overlay */}
            <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none ${!isLoaded ? 'hidden' : ''}`}>
                {showOverlay && (
                    <div className="opacity-0 group-hover:opacity-100 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium transition-opacity duration-300 pointer-events-auto">
                        Ver
                    </div>
                )}
            </div>
        </motion.div>
    );
}