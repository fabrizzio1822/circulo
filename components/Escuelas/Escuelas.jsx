import React from 'react';

export default () => {
  return (
    <div className="py-28 bg-white w-full"> {/* Añadimos w-full para ocupar todo el ancho */}
      <div className="mx-auto px-4 md:px-8 flex flex-wrap gap-x-20 justify-between items-center max-w-screen-xl"> {/* max-w-screen-xl para un ancho máximo amplio */}
        <div className="space-y-4"> {/* Aumentamos el espacio entre elementos */}
          <h3 className="text-cyan-400 text-sm font-semibold">
            NUESTRO RESPALDO
          </h3>
          <p className="text-gray-800 text-2xl font-semibold sm:text-5xl">
            Contamos con el apoyo de las mejores instituciones educativas
          </p>
          <p className="text-gray-500 text-lg md:text-2xl  "> {/* Aumentamos la legibilidad del texto secundario */}
            Trabajamos en colaboración con instituciones líderes para ofrecerte la mejor calidad educativa.
          </p>
        </div>
        <div className="mt-12 lg:mt-0">
          <ul className="grid grid-cols-2 gap-4 items-center justify-center"> {/* Aumentamos el gap entre logos */}
            {/* LOGO 2 */}
            <li className="p-6 bg-white flex justify-center items-center "> {/* Añadimos padding y sombra */}
              <img className="max-h-[250px] w-auto object-contain" src="/assets/colegio2.png" alt="Escuela 2" /> {/* Aumentamos la altura de la imagen */}
            </li>
            {/* LOGO 1 */}
            <li className="p-6 bg-white flex justify-center items-center "> {/* Añadimos padding y sombra */}
              <img className="max-h-[250px] w-auto object-contain" src="/assets/colegio1-Photoroom.png" alt="Escuela 1" /> {/* Aumentamos la altura de la imagen */}
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};