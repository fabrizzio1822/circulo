import React from 'react';
import { motion } from 'framer-motion';

export default () => {
  return (
    <section className="py-24 lg:py-32 bg-white w-full overflow-hidden">
      <div className="lg:mx-[100px] md:mx-[50px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 lg:space-y-8 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-gray-50 px-5 py-2 text-sm font-medium text-violeta/80">
              <span className="h-2 w-2 rounded-full bg-turquesa"></span>
              Nuestro Respaldo
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-violeta font-normal leading-[1.1]">
              Contamos con el apoyo de <em className="italic font-bold">instituciones líderes</em>
            </h2>

            <p className="text-violeta/70 text-lg md:text-xl leading-relaxed">
              Trabajamos en colaboración con las mejores instituciones educativas para garantizar y ofrecerte la más alta calidad y prestigio en todas nuestras formaciones.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center "
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center"
            >
              <img
                className="max-h-[160px] lg:max-h-[240px] xl:max-h-[400px] w-auto object-contain "
                src="/assets/escuelas/escuela-1.png"
                alt="Escuela 1"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center"
            >

              <img
                className="max-h-[160px] lg:max-h-[240px] xl:max-h-[400px] w-auto object-contain "
                src="/assets/escuelas/escuela-3.png"
                alt="Escuela 3"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center"
            >
              <img
                className="max-h-[160px] lg:max-h-[240px] xl:max-h-[400px] w-auto object-contain "
                src="/assets/escuelas/escuela-2.png"
                alt="Escuela 2"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};