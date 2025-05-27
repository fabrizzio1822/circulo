'use client';

import { useState } from 'react';
import { Title } from '@/components/Title/Title';
import { Envelope, Location, Clock, Phone } from 'akar-icons';
import { DIV } from '@/components/Div/Div';
import FixedWhatsappButton from '@/components/Whatsapp/Whatsapp';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
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
          
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          telefono: '',
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
    <div className="mx-auto px-4 py-8">
      <FixedWhatsappButton/>
      <div className="md:text-7xl text-5xl max-w-[90rem] mx-auto">
        <Title>Contacto</Title>
      </div>

      <DIV>
        <div className="grid max-w-[90rem] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className='flex items-center text-lila mb-2 gap-2'>
              <Location size={25} />
              <h2 className="text-xl color-gris font-semibold">Ubicación</h2>
            </div>
            <p>San Salvador de Jujuy, Jujuy, Argentina</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className='flex items-center text-lila mb-2 gap-2'>
              <Clock size={25} />
              <h2 className="text-xl color-gris font-semibold">Horarios</h2>
            </div>
            <p>Lunes a Viernes</p>
            <p>10hs a 13hs y de 15hs a 22hs</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className='flex items-center text-lila mb-2 gap-2'>
              <Envelope size={25} />
              <h2 className="text-xl color-gris font-semibold">Correo</h2>
            </div>
            <a href="mailto:circulosistemico1@gmail.com" className="text-blue-600 hover:underline">
              circulosistemico1@gmail.com
            </a>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className='flex items-center text-lila mb-2 gap-2'>
              <Phone size={25} />
              <h2 className="text-xl color-gris font-semibold">Celular</h2>
            </div>
            <a href="tel:+543885737111" className="text-blue-600 hover:underline">
              3885737111
            </a>
          </div>
        </div>

        {/* Formulario */}
        <div
          className="w-full bg-cover bg-center rounded-lg shadow-lg"
          style={{
            backgroundImage: "url('/assets/formulario.webp')",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="max-w-lg h-auto text-white mx-auto p-4 md:p-8">
            
            <form onSubmit={handleSubmit} className="bg-indigo-900/60 backdrop-blur-md rounded-2xl p-6 md:p-10 space-y-6">
            <h2 className="text-3xl font-bold mb-6 text-center">¡Contactanos!</h2>
              
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  required
                  className="p-3 rounded bg-white text-black placeholder-gray-600"
                />
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  placeholder="Apellido"
                  required
                  className="p-3 rounded bg-white text-black placeholder-gray-600"
                />
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo Electrónico"
                required
                className="w-full p-3 rounded bg-white text-black placeholder-gray-600"
              />
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                className="w-full p-3 rounded bg-white text-black placeholder-gray-600"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="mx-auto  w-full p-2 bg-purple-900 font-semibold hover:bg-purple-800 transition transform duration-200 rounded-2xl"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>

              {submitSuccess && <p className="text-green-200 text-sm mt-2">¡Mensaje enviado con éxito!</p>}
              {submitError && <p className="text-red-200 text-sm mt-2">{submitError}</p>}
            </form>
          </div>
        </div>
      </DIV>
    </div>
  );
}
