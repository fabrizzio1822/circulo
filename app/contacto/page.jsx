'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Phone, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FixedWhatsappButton from '@/components/Whatsapp/Whatsapp';
import Newsletter from '@/components/Newsletter/NewsLetter';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.nombre} ${formData.apellido}`,
          email: formData.email,
          phone: formData.telefono,
          message: formData.mensaje,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          telefono: '',
          mensaje: '',
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        const errorData = await response.json();
        setSubmitError(errorData?.error || 'Error al enviar el mensaje. Intenta nuevamente.');
      }
    } catch (error) {
      setSubmitError('Ocurrió un error inesperado. Intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <FixedWhatsappButton />

      {/* Hero Section */}
      <section className="pt-16 lg:pt-20 pb-16 lg:pb-24 px-6 lg:px-12 lg:mx-[50px] mx-auto text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div className="max-w-xl text-left">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-violeta font-normal leading-[1.1] mb-6">
              Ponte en <br /><em className="italic font-bold">Contacto</em>
            </h1>
            <p className="text-violeta/60 text-lg lg:text-xl">
              Contanos qué necesitás y te responderemos a la brevedad. Estamos aquí para acompañarte.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Formulario y Mapa */}
      <section className="pb-20 lg:pb-32 px-6 lg:px-12 lg:mx-[50px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#f5f7fa] rounded-3xl p-8 lg:p-12 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-violeta/80 mb-2 font-medium">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="w-full p-4 rounded-xl bg-white border border-transparent text-violeta placeholder-violeta/40 focus:outline-none focus:ring-2 focus:ring-sky-300 transition-all shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-violeta/80 mb-2 font-medium">
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    placeholder="Tu apellido"
                    required
                    className="w-full p-4 rounded-xl bg-white border border-transparent text-violeta placeholder-violeta/40 focus:outline-none focus:ring-2 focus:ring-sky-300 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-violeta/80 mb-2 font-medium">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vos@ejemplo.com"
                    required
                    className="w-full p-4 rounded-xl bg-white border border-transparent text-violeta placeholder-violeta/40 focus:outline-none focus:ring-2 focus:ring-sky-300 transition-all shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-violeta/80 mb-2 font-medium">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+54 388 573 7111"
                    className="w-full p-4 rounded-xl bg-white border border-transparent text-violeta placeholder-violeta/40 focus:outline-none focus:ring-2 focus:ring-sky-300 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-violeta/80 mb-2 font-medium">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  rows={4}
                  className="w-full p-4 rounded-xl bg-white border border-transparent text-violeta placeholder-violeta/40 resize-none focus:outline-none focus:ring-2 focus:ring-sky-300 transition-all shadow-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex justify-center items-center gap-2 bg-violeta text-white px-8 py-4 rounded-full font-medium hover:bg-violeta/90 transition-colors shadow-sm disabled:opacity-70"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>

              {submitSuccess && (
                <p className="text-[#059669] text-center text-sm font-medium mt-4 bg-[#d1fae5] p-3 rounded-xl">¡Mensaje enviado con éxito!</p>
              )}
              {submitError && (
                <p className="text-[#dc2626] text-center text-sm font-medium mt-4 bg-[#fee2e2] p-3 rounded-xl">{submitError}</p>
              )}
            </form>
          </motion.div>

          {/* Mapa e Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            {/* Tarjetas de info rápida */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#E8E6F5] rounded-3xl p-6 flex flex-col items-start gap-4">
                <div className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center text-violeta">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-violeta mb-1">WhatsApp</h3>
                  <a href="https://wa.me/543885737111" className="text-violeta/70 text-sm hover:text-violeta transition-colors">
                    +54 388 573 7111
                  </a>
                </div>
              </div>

              <div className="bg-[#E8E6F5] rounded-3xl p-6 flex flex-col items-start gap-4">
                <div className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center text-violeta">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-violeta mb-1">Correo</h3>
                  <a href="mailto:circulosistemico1@gmail.com" className="text-violeta/70 text-sm hover:text-violeta transition-colors break-all">
                    circulosistemico1@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="relative rounded-3xl overflow-hidden flex-grow min-h-[300px] shadow-sm">
              <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md text-violeta text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-violeta/10 flex items-center gap-2 shadow-sm">
                <MapPin size={14} /> Nuestra Ubicación
              </div>
              <iframe
                title="Ubicación Círculo Sistémico"
                src="https://www.google.com/maps?q=San+Salvador+de+Jujuy,+Jujuy,+Argentina&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Conocé nuestro espacio */}
      <section className="pb-20 lg:pb-32 px-6 lg:px-12 lg:mx-[50px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-violeta rounded-[3rem] p-10 lg:p-16 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            <div className="text-left">
              <h2 className="font-serif text-4xl lg:text-5xl text-white font-normal leading-tight mb-6">
                Conocé nuestro <em className="italic font-bold">espacio de trabajo</em>
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-md">
                Un lugar pensado y diseñado para acompañarte. Descubrí el estudio donde trabajamos cada día, antes de tu primera consulta.
              </p>

              <div className="flex items-center gap-4 text-white/90">
                <Clock className="w-5 h-5 text-sky-300" />
                <span className="text-sm font-medium">Lunes a Viernes de 10 a 13hs y de 15 a 22hs.</span>
              </div>
            </div>

            {/* Grid de fotos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] relative mt-12">
                <Image
                  src="/assets/casa/vidrio.jpg"
                  alt="Espacio de trabajo 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                <Image
                  src="/assets/casa/sillones.jpg"
                  alt="Espacio de trabajo 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <Newsletter />
    </div>
  );
}
