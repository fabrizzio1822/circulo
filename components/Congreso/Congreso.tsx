import React, { useEffect, useMemo, useState } from "react";

/**
 * HeroCongreso
 * ------------------------------------------------------------------
 * Hero section for "Congreso Sistémico del Norte".
 *
 * Design notes:
 * - The background painting already places its two figures on the
 *   right with an open field of blue on the left, so the copy sits
 *   on the left and a directional scrim (dark → transparent) protects
 *   legibility without covering the artwork's subject.
 * - The single accent color (sky/cyan) is lifted directly from the
 *   pale cyan patch in the painting itself, rather than an arbitrary
 *   brand blue — it's the same color in the art and the UI.
 * - On desktop, a countdown card sits on the right, using the same
 *   hairline-divider / serif-numeral / tracked-label language as the
 *   stats row below the copy, so it reads as part of the same system
 *   rather than a bolted-on widget. On mobile it drops below the copy
 *   instead of disappearing, since it's still useful there.
 *
 * Fonts (add once, globally — see README):
 *   Display: "Fraunces" (headline)
 *   Body/UI: "Inter" (paragraph, labels, buttons)
 *
 * If those fonts aren't loaded, the component falls back to
 * serif / sans-serif system stacks and still looks correct.
 */

export interface HeroStat {
    value: string;
    label: string;
}

export interface HeroCongresoProps {
    /** Path or URL to the background painting. Defaults to /hero-bg.png (public folder). */
    backgroundImageUrl?: string;
    /**
     * Optional separate crop/image for small screens (below the `sm` breakpoint).
     * Falls back to `backgroundImageUrl` if not provided.
     */
    mobileBackgroundImageUrl?: string;
    eyebrow?: string;
    titleLine1?: string;
    titleLine2?: string;
    description?: string;
    primaryCtaLabel?: string;
    secondaryCtaLabel?: string;
    stats?: HeroStat[];
    onPrimaryCtaClick?: () => void;
    onSecondaryCtaClick?: () => void;
    /**
     * Date/time the countdown counts down to. Defaults to the next
     * upcoming September 18th (this year, or next year if that date
     * already passed). Override if the congress moves or you want to
     * count down to a precise start time (e.g. 9:00 AM).
     */
    countdownTarget?: Date;
    /** Label shown above the countdown numbers. */
    countdownLabel?: string;
    /** Message shown once the countdown reaches zero. */
    countdownDoneMessage?: string;
}

const defaultStats: HeroStat[] = [
    { value: "2 días", label: "DE ENCUENTRO" },
    { value: "15", label: "DISERTANTES PRINCIPALES" },
    { value: "8", label: "EJES TEMÁTICOS" },
    { value: "Cabildo", label: "HISTÓRICO DE JUJUY" },
];

/** Next upcoming September 18th, 00:00 local time. */
function getNextSeptember18(): Date {
    return new Date(2026, 8, 18, 0, 0, 0); // month 8 = September
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    done: boolean;
}

function getTimeLeft(target: Date): TimeLeft {
    const diff = Math.max(0, target.getTime() - Date.now());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds, done: diff <= 0 };
}

function useCountdown(target: Date) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0, done: false });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setTimeLeft(getTimeLeft(target));
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft(target));
        }, 1000);
        return () => clearInterval(interval);
    }, [target]);

    return { ...timeLeft, mounted };
}

function pad(n: number): string {
    return n.toString().padStart(2, "0");
}

interface CountdownCardProps {
    target: Date;
    label: string;
    doneMessage: string;
}

function CountdownCard({ target, label, doneMessage }: CountdownCardProps) {
    const { days, hours, minutes, seconds, done, mounted } = useCountdown(target);

    const units = [
        { value: pad(mounted ? days : 0), label: "días" },
        { value: pad(mounted ? hours : 0), label: "horas" },
        { value: pad(mounted ? minutes : 0), label: "min" },
        { value: pad(mounted ? seconds : 0), label: "seg" },
    ];

    return (
        <div className="w-full shrink-0 rounded-2xl border border-white/15 bg-white/[0.07] px-6 py-6 shadow-xl backdrop-blur-md sm:px-7 sm:py-7 lg:w-[320px]">
            <p className="text-xs font-medium tracking-wide text-white/60">
                {done ? "El congreso" : label}
            </p>

            {done ? (
                <p
                    className="mt-3 text-2xl text-white"
                    style={{ fontFamily: '"Fraunces", Georgia, serif' }}
                >
                    {doneMessage}
                </p>
            ) : (
                <div className="mt-4 grid grid-cols-4 gap-x-3">
                    {units.map((unit, i) => (
                        <div
                            key={unit.label}
                            className={i > 0 ? "border-l border-white/15 pl-3" : ""}
                        >
                            <div
                                className="tabular-nums text-2xl text-white sm:text-3xl"
                                style={{ fontFamily: '"Fraunces", Georgia, serif' }}
                            >
                                {unit.value}
                            </div>
                            <div className="mt-1 text-[10px] font-medium uppercase tracking-wide text-white/60">
                                {unit.label}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function HeroCongreso({
    backgroundImageUrl = "/assets/congreso/congreso-desktop.webp",
    mobileBackgroundImageUrl = "/assets/congreso/congreso-mobile.webp",
    eyebrow = "18 y 19 de septiembre · San Salvador de Jujuy",
    titleLine1 = "Congreso Sistémico",
    titleLine2 = "del Norte",
    description = "Un espacio de estudio, actualización e intercambio sobre el trabajo sistémico relacional con familias, parejas y grupos. El primer encuentro de su tipo en el Noroeste Argentino.",
    primaryCtaLabel = "Inscribirme al congreso",
    secondaryCtaLabel = "Conocer más",
    stats = defaultStats,
    onPrimaryCtaClick,
    onSecondaryCtaClick,
    countdownTarget,
    countdownLabel = "Comienza en",
    countdownDoneMessage = "¡Ya comenzó!",
}: HeroCongresoProps) {
    const [mounted, setMounted] = useState(false);

    // Computed once so it doesn't drift/re-target on every re-render.
    const target = useMemo(() => countdownTarget ?? getNextSeptember18(), [countdownTarget]);

    useEffect(() => {
        const id = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <section
            id="congreso"
            className="relative isolate min-h-[50vh] w-[95%] mx-auto rounded-3xl mt-5 overflow-hidden text-white "
            style={{ fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif' }}
        >
            {/* Background painting — mobile crop (swapped out at the `sm` breakpoint) */}
            <div
                className="absolute inset-0 bg-cover bg-center sm:hidden"
                style={{ backgroundImage: `url(${mobileBackgroundImageUrl})` }}
                role="img"
                aria-label="Dos figuras abrigadas, pintura abstracta en tonos azules y cálidos"
            />

            {/* Background painting — desktop crop */}
            <div
                className="absolute inset-0 hidden bg-cover bg-center sm:block"
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
                role="img"
                aria-label="Dos figuras abrigadas, pintura abstracta en tonos azules y cálidos"
            />

            {/* Legibility scrim — dark left → transparent right on desktop,
          dark bottom → transparent top on mobile so the figures stay visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1030]/95 via-[#0c1030]/60 to-transparent sm:bg-gradient-to-r sm:from-[#0c1030]/95 sm:via-[#0c1030]/70 sm:to-transparent" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[480px] w-full lg:mx-[50px] flex-col items-start justify-between gap-12 px-6 py-12 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-12">
                <div
                    className={[
                        "max-w-xl transition-all duration-700 ease-out motion-reduce:transition-none",
                        mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                    ].join(" ")}
                >
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs tracking-wide text-white/80 backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                        {eyebrow}
                    </div>

                    {/* Headline */}
                    <h1
                        className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
                        style={{ fontFamily: '"Fraunces", Georgia, "Times New Roman", serif' }}
                    >
                        <span className="block font-semibold text-white ">{titleLine1}</span>
                        <span className="mt-1 block font-normal italic text-sky-300">
                            {titleLine2}
                        </span>
                    </h1>

                    {/* Signature rule */}
                    <span className="mt-4 block h-[3px] w-16 rounded-full bg-white" />

                    {/* Description */}
                    <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
                        {description}
                    </p>

                    {/* CTAs */}
                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <a
                            href="https://forms.gle/QrAKRng2HYQf8J7j7"
                            className="rounded-full bg-sky-300 px-6 py-3 text-sm font-semibold text-[#0c1030] transition-colors hover:bg-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                        >
                            {primaryCtaLabel}
                        </a>
                        <a

                            href="/congreso"
                            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            {secondaryCtaLabel}
                        </a>
                    </div>

                    {/* Stats */}
                    <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-4">
                        {stats.map((stat, i) => (
                            <div
                                key={stat.label}
                                className={i > 0 ? "sm:border-l sm:border-white/15 sm:pl-6" : ""}
                            >
                                <dt className="sr-only">{stat.label}</dt>
                                <dd
                                    className="text-2xl text-white sm:text-3xl"
                                    style={{ fontFamily: '"Fraunces", Georgia, serif' }}
                                >
                                    {stat.value}
                                </dd>
                                <dd className="mt-1 text-[11px] font-medium tracking-wide text-white/60">
                                    {stat.label}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Countdown — stacks below the copy on mobile, sits to the right on desktop */}
                <div
                    className={[
                        "w-full max-w-xl transition-all delay-150 duration-700 ease-out motion-reduce:transition-none ",
                        mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                    ].join(" ")}
                >
                    <CountdownCard
                        target={target}
                        label={countdownLabel}
                        doneMessage={countdownDoneMessage}
                    />
                </div>
            </div>
        </section>
    );
}
