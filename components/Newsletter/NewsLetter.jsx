'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const res = await fetch('/api/send-newsletter-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSuccessMessage('¡Gracias por suscribirte!');
        setEmail('');
      } else {
        const data = await res.json();
        setErrorMessage(data?.error || 'Hubo un problema al suscribirte.');
      }
    } catch (err) {
      setErrorMessage('Error al conectar con el servidor.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-14 max-w-screen-xl mx-auto">
      <div className="relative overflow-hidden mx-4 px-4 py-14 rounded-2xl bg-lila md:px-8 md:mx-8">
        <div className="relative z-10 max-w-xl mx-auto sm:text-center">
          <div className="space-y-3">
            <h3 className="text-3xl text-white font-bold">
              ¡Mantente atento a nuestras novedades!
            </h3>
          </div>
          <div className="mt-6">
            <form
              onSubmit={handleSubmit}
              className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto"
            >
              <input
                type="email"
                placeholder="Ingresa tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-gray-500 w-full p-2 outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="p-2 px-3 rounded-lg font-medium text-white bg-lila hover:bg-lila/70 active:bg-purple-900/90 duration-150 outline-none shadow-md focus:shadow-none sm:px-4"
              >
                {isSubmitting ? 'Enviando...' : 'Notifícame'}
              </button>
            </form>

            {successMessage && (
              <p className="text-green-100 mt-2 text-sm">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-100 mt-2 text-sm">{errorMessage}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
