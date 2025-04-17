'use client'
import { Title } from '@/components/Title/Title';
import React from 'react';
import {Envelope, Location, Clock,Phone} from 'akar-icons'
import { DIV } from '@/components/Div/Div';


export default function ContactPage() {
  return (
    <div className=" mx-auto  px-4 py-8">
      <div className='md:text-7xl text-5xl max-w-[90rem] mx-auto'>
        <Title>Contacto</Title>
      </div>
      
      <DIV>
      <div className="grid max-w-[90rem] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className='flex items-center color-lila mb-2 gap-2'>
            <Location size={25} />
            <h2 className="text-xl color-gris font-semibold">
               Ubicación
            </h2>
          </div>
          <p>San Salvador de Jujuy, Jujuy, Argentina</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className='flex items-center color-lila mb-2 gap-2'>
            <Clock size={25} />
            <h2 className="text-xl color-gris font-semibold">
               Horarios
            </h2>
          </div>
          <p>Lunes a Viernes</p>
          <p>10hs a 13hs y de 15hs a 22hs</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className='flex items-center color-lila mb-2 gap-2'>
            <Envelope size={25} />
            <h2 className="text-xl color-gris font-semibold ">
              Correo
            </h2>
          </div>
          <a href="mailto:circulosistemico1@gmail.com" className="text-blue-600 hover:underline">
            circulosistemico1@gmail.com
          </a>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div>
          <div className='flex items-center color-lila mb-2 gap-2' >
            <Phone size={25} />
            <h2 className="text-xl color-gris font-semibold ">
              Celular
            </h2>
          </div>
          </div>
          <a href="tel:+543885737111" className="text-blue-600 hover:underline">
            3885737111
          </a>
        </div>
      </div>

      <div 
        className="w-full bg-cover bg-center rounded-lg shadow-lg"
        style={{
          backgroundImage: "url('/assets/formulario.webp')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-2xl  h-auto text-white mx-auto p-4 md:p-8">
          <div className='bg-lila/80 rounded-2xl py-20 md:px-10 p-2'>
          <h2 className="text-3xl font-bold mb-6 text-center">¡Anotate con Nosotros!</h2>
          <form action="https://formsubmit.co/circulosistemico1@gmail.com" method="post" className="space-y-4 ">
            <div>
              <label htmlFor="nombre" className="block text-lg font-bold mb-1">Nombre:</label>
              <input 
                type="text" 
                placeholder="Ingresa tu Nombre" 
                name="nombre" 
                id="nombre" 
                pattern="[A-Za-z\s]+" 
                title="Solo letras y espacios permitidos" 
                required
                className="w-full p-2 border rounded-md bg-white"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-lm font-bold mb-1">Teléfono:</label>
              <input 
                type="tel" 
                placeholder="Ingresa tu numero" 
                name="telefono" 
                id="telefono" 
                pattern="[0-9]+" 
                title="Solo números permitidos" 
                required
                className="w-full p-2 border rounded-md bg-white "
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-bold mb-1">Correo:</label>
              <input 
                type="email" 
                placeholder="Ingresa tu Correo" 
                name="email" 
                id="email" 
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" 
                title="Ingrese una dirección de correo electrónico válida" 
                required
                className="w-full p-2 border  rounded-md bg-white "
              />
            </div>
            <input 
              type="submit" 
              value="Enviar" 
              className="mx-auto  w-full p-2 bg-purple-800 rounded-md "
            />
            <input type="hidden" name="_next" value="https://www.circulo-sistemico.com/"/>
            <input type="hidden" name="_captcha" value="false"/>
          </form>
          </div>
        </div>
      </div>
      </DIV>
    </div>
  );
}