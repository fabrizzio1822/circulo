"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Nosotros", href: "/sobre-nosotros" },
    { label: "Servicios", href: "/servicios" },
    { label: "Formaciones", href: "/formaciones" },
];

export default function Header() {
    const pathname = usePathname();
    const isCongreso = pathname === "/congreso";
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(false);

    const headerRef = useRef(null);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setIsScrollingUp(false); // Scrolleando hacia abajo
        } else if (latest < previous) {
            setIsScrollingUp(true);  // Scrolleando hacia arriba
        }
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Se activa 'scrolled' (navbar flotante) solo cuando el header principal ya no es visible
                setScrolled(!entry.isIntersecting && entry.boundingClientRect.bottom < 0);
            },
            { threshold: 0 }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const MobileMenu = () => {
        const menuVariants = {
            closed: { opacity: 0, y: "-100%" },
            open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
        };

        const linkVariants = {
            closed: { opacity: 0, y: 20 },
            open: (i) => ({
                opacity: 1,
                y: 0,
                transition: { delay: 0.2 + i * 0.1, duration: 0.5, ease: "easeOut" }
            })
        };

        const bottomVariants = {
            closed: { opacity: 0 },
            open: { opacity: 1, transition: { delay: 0.6, duration: 0.5 } }
        };

        // Asumimos que los íconos se pueden simular con lucide-react o textos.
        // Importaremos los íconos de lucide-react (Instagram, Phone, MapPin)
        return (
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 z-[120] lg:hidden bg-violeta flex flex-col justify-between overflow-hidden"
                    >
                        {/* Header del menú */}
                        <div className="px-6 py-5 flex items-center justify-between border-b border-white/10">
                            <Image src="/assets/image.png" alt="Círculo Sistémico Logo" width={150} height={50} className="shrink-0 w-[150px]" />
                            <button onClick={() => setMobileOpen(false)} className="text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Links centrales */}
                        <div className="flex-1 flex flex-col justify-center px-8 gap-6">
                            {[...navItems, { label: "Congreso", href: "/congreso", highlight: true }, { label: "Contacto", href: "/contacto" }].map((item, i) => (
                                <motion.div custom={i} variants={linkVariants} key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`font-serif text-4xl sm:text-5xl block transition-colors ${item.highlight ? 'text-sky-300 hover:text-sky-200' : 'text-white hover:text-white/70'}`}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer del menú con info extra */}
                        <motion.div variants={bottomVariants} className="px-8 pb-10">
                            <div className="w-full h-[1px] bg-white/20 mb-8" />
                            <div className="flex flex-col gap-6">
                                <a href="https://wa.me/543885737111" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                    </div>
                                    <span className="text-sm font-medium">+54 388 573 7111</span>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                                    </div>
                                    <span className="text-sm font-medium">@circulosistemico</span>
                                </a>
                                <div className="flex items-center gap-3 text-white/80">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                    </div>
                                    <span className="text-sm font-medium">San Salvador de Jujuy, Argentina</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    };

    return (
        <>
            {/* MAIN HEADER (ESTÁTICO) */}
            <header ref={headerRef} className={`z-50 w-full ${isCongreso ? 'absolute top-0 left-0 bg-transparent' : 'relative bg-violeta'}`}>
                <div className="xl:mx-[100px] lg:mx-auto px-6 lg:px-12 py-4 lg:py-5 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 z-10">
                        <Image src="/assets/image.png" alt="Círculo Sistémico Logo" width={280} height={100} className="shrink-0 w-[200px] lg:w-[280px]" />
                    </Link>

                    <nav className="hidden lg:flex items-center gap-10">
                        <Link href="/congreso" className="flex items-center uppercase text-sky-300 text-sm font-medium transition hover:text-sky-200">
                            Congreso Sistemico
                        </Link>
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className="flex items-center uppercase text-white text-sm font-medium transition hover:text-white/80">
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <Link href="/contacto" className="hidden lg:inline-flex items-center bg-white text-violeta px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition shadow-sm">
                        Contactanos
                    </Link>

                    <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2 z-10">
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </header>

            {/* FLOATING ISLAND HEADER (APARECE AL SCROLLEAR HACIA ARRIBA) */}
            <AnimatePresence>
                {scrolled && isScrollingUp && (
                    <motion.header
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-2 left-0 right-0 z-[100] mx-4 lg:mx-auto lg:mx-[100px] bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-black/5"
                    >
                        <div className="px-6 lg:px-10 py-1 lg:py-2 flex items-center justify-between">
                            <Link href="/" className="flex items-center gap-3 z-10">
                                <Image src="/assets/logo-sinfondo.png" alt="Círculo Sistémico Logo" width={100} height={100} className="shrink-0 w-[80px] lg:w-[90px] h-auto" />
                            </Link>

                            <nav className="hidden lg:flex items-center gap-8">
                                <Link href="/congreso" className="text-sm font-medium transition uppercase text-sky-600 hover:text-sky-500">
                                    Congreso Sistemico
                                </Link>
                                {navItems.map((item) => (
                                    <Link key={item.href} href={item.href} className="text-sm font-medium transition uppercase text-violeta hover:text-violeta/70">
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>

                            <Link href="/contacto" className="hidden lg:inline-flex items-center bg-violeta text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-violeta/90 transition shadow-sm">
                                Contactanos
                            </Link>

                            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-violeta p-2 z-10">
                                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </motion.header>
                )}
            </AnimatePresence>

            {/* MENU MOBILE */}
            <MobileMenu />
        </>
    );
}