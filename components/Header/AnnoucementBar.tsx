'use client';

/**
 * AnnouncementBar
 * ----------------
 * Barra de anuncio con imagen de fondo y cuenta regresiva.
 * La cuenta regresiva finaliza el 18 de septiembre de 2026.
 */

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface AnnouncementBarProps {
    eyebrow?: string;
    title?: string;
    targetDate?: Date;
    ctaLabel?: string;
    ctaHref?: string;
    backgroundImageSrc?: string;
    /** Milisegundos de espera tras el render antes de mostrar la barra */
    appearDelay?: number;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
}

function getTimeLeft(target: Date): TimeLeft {
    const diff = Math.max(0, target.getTime() - Date.now());

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
    };
}

function CountdownUnit({
    value,
    label,
}: {
    value: number;
    label: string;
}) {
    const shouldReduceMotion = useReducedMotion();
    const digits = String(value).padStart(2, '0').split('');

    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-0.5">
                {digits.map((digit, i) => (
                    <div
                        key={i}
                        className="relative h-7 w-[18px] overflow-hidden rounded-md bg-[#0B1F3B]/70 ring-1 ring-white/10 backdrop-blur-sm sm:h-8 sm:w-5"
                    >
                        <AnimatePresence
                            mode="popLayout"
                            initial={false}
                        >
                            <motion.span
                                key={digit}
                                initial={
                                    shouldReduceMotion
                                        ? false
                                        : { y: '100%', opacity: 0 }
                                }
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                exit={
                                    shouldReduceMotion
                                        ? undefined
                                        : { y: '-100%', opacity: 0 }
                                }
                                transition={{
                                    duration: 0.35,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="absolute inset-0 flex items-center justify-center font-mono text-xs font-semibold tabular-nums text-[#F5F1E8] sm:text-sm"
                            >
                                {digit}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            <span className="mt-0.5 text-[8px] uppercase tracking-wider text-[#F5F1E8]/70 sm:text-[9px]">
                {label}
            </span>
        </div>
    );
}

function Separator() {
    return (
        <span className="pb-2 text-xs font-semibold text-[#F5F1E8]/50 sm:pb-3">
            :
        </span>
    );
}

export default function AnnouncementBar({
    eyebrow = 'Inscripciones abiertas',
    title = 'Congreso Sistémico del Norte',
    targetDate = new Date(2026, 8, 18, 0, 0, 0),
    ctaLabel = 'VER MÁS INFORMACIÓN',
    ctaHref = '#',
    backgroundImageSrc = '/assets/congreso-sistemico.png',
    appearDelay = 800,
}: AnnouncementBarProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
        getTimeLeft(targetDate)
    );

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const appearTimer = setTimeout(() => {
            setVisible(true);
        }, appearDelay);

        return () => clearTimeout(appearTimer);
    }, [appearDelay]);

    useEffect(() => {
        const id = setInterval(() => {
            setTimeLeft(getTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(id);
    }, [targetDate]);

    const isOver =
        timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0;

    return (
        <AnimatePresence>
            <motion.div
                className="relative mx-auto overflow-hidden"
                role="region"
                aria-label={`Anuncio: ${title}`}
            >
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${backgroundImageSrc})`,
                    }}
                    aria-hidden="true"
                />

                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#0B1F3B]/90 via-[#0B1F3B]/60 to-[#0B1F3B]/15"
                    aria-hidden="true"
                />

                {/* Content */}
                <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:px-6 sm:py-2.5">
                    {/* Text */}
                    <div className="flex flex-col gap-0">
                        <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#F2A93B] sm:text-[10px]">
                            {eyebrow}
                        </span>

                        <h2 className="text-xs font-semibold text-[#F5F1E8] sm:text-sm">
                            {title}
                        </h2>
                    </div>

                    {/* Countdown + CTA */}
                    <div className="flex items-center gap-2.5 sm:gap-4">
                        {!isOver ? (
                            <div className="flex items-center gap-1 sm:gap-1.5">
                                <CountdownUnit
                                    value={timeLeft.days}
                                    label="Días"
                                />

                                <Separator />

                                <CountdownUnit
                                    value={timeLeft.hours}
                                    label="Hrs"
                                />

                                <Separator />

                                <CountdownUnit
                                    value={timeLeft.minutes}
                                    label="Min"
                                />
                            </div>
                        ) : (
                            <span className="text-xs font-medium text-[#F5F1E8]">
                                Inscripciones cerradas
                            </span>
                        )}

                        <motion.a
                            href="/congreso"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="whitespace-nowrap rounded-full bg-violet-600 px-3 py-1.5 text-[10px] font-semibold text-white shadow-sm transition-colors hover:bg-violet-500 sm:px-4 sm:py-2 sm:text-xs"
                        >
                            {ctaLabel}
                        </motion.a>
                    </div>
                </div>
            </motion.div>

        </AnimatePresence>
    );
}