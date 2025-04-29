'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface LogoAnimationProps {
  onAnimationComplete: () => void;
  logoSrc: string; // Prop para la ruta de la imagen del logo
  logoAlt?: string; // Prop opcional para el texto alternativo del logo
  largeLogoSize?: number; // Tamaño inicial grande del logo
  smallLogoSize?: number; // Tamaño final pequeño del logo
  topPosition?: string; // Posición 'top' final del logo
}

export default function LogoAnimacion({
  onAnimationComplete,
  logoSrc = '/logo',
  logoAlt = 'Logo',
  largeLogoSize = 120,
  smallLogoSize = 60,
  topPosition = '16px',
}: LogoAnimationProps) {
  const [animationPhase, setAnimationPhase] = useState<'initial' | 'complete'>('initial');
  const controls = useAnimation();
  const logoControls = useAnimation(); // Control para la animación específica del logo

  useEffect(() => {
    const sequence = async () => {
      // Fase inicial - logo aparece grande en el centro
      await logoControls.start({
        opacity: 1,
        scale: 1, // Inicialmente tamaño normal, se agranda con la animación del div contenedor
        transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
      });

      // Espera un momento antes de iniciar la transición
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Logo se mueve hacia arriba y se reduce (animando el div contenedor)
      await controls.start({
        top: topPosition,
        y: 0,
        scale: smallLogoSize / largeLogoSize, // Calcula la escala para reducir al tamaño final
        transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        },
      });

      // Fase final
      setAnimationPhase('complete');
      onAnimationComplete();
    };

    // Iniciar la secuencia después de un breve retraso
    const timer = setTimeout(() => {
      sequence();
    }, 500);

    return () => clearTimeout(timer);
  }, [controls, logoControls, onAnimationComplete, largeLogoSize, smallLogoSize, topPosition]);

  return (
    <motion.div
      className="fixed left-0 w-full flex justify-center z-50"
      style={{ top: '50%' }}
      initial={{ y: '-50%', scale: largeLogoSize / smallLogoSize }} // Inicialmente grande
      animate={controls}
    >
      <motion.div
        className="flex items-center justify-center"
        initial={{ width: largeLogoSize, height: largeLogoSize, opacity: 0 }}
        animate={logoControls}
        style={{ overflow: 'hidden' }} // Para asegurar que la imagen se ajuste al contenedor
      >
        <img
          src={logoSrc}
          alt={logoAlt}
          className="max-w-full max-h-full"
          style={{ display: 'block' }} // Evita espaciado innecesario debajo de la imagen
        />
      </motion.div>

      
    </motion.div>
  );
}