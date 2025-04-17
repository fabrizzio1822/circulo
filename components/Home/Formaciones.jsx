import React from 'react';
import { HiAcademicCap } from "react-icons/hi2";
import Link from 'next/link';
import { Subtitle } from '../Subtitle/SubTitle';

const formacionesData = [
  { nombre: 'Especialidad en el modelo Sistemico' },
  { nombre: 'Especialidad en terapia de Parejas' },
  { nombre: 'Coordinacion de Grupos' },
  { nombre: 'Problematicas Alimentarias' },
  { nombre: 'Infancia y Adolescencia' },
  { nombre: 'Trabajo Social Sistemico' },
  { nombre: 'Sexologia Clinica' },
  { nombre: 'Formacion en terapia centrada en soluciones' },
];

function FormacionesGrid() {
  return (
    <div>

        <Subtitle><h2 className='text-center text-2xl sm:text-5xl'>FORMACIONES 2025</h2></Subtitle>
        <div className="grid gap-4 lg:grid-cols-4 px-4 ">
        {formacionesData.map((formacion, index) => (
            <Link key={index} href='/formaciones' className="border border-gray-300 p-4 text-center flex items-center gap-4 rounded-2xl">
                <div  className='flex justify-center lg:justify-betweeen w-full items-center lg:space-x-10' >
                    <HiAcademicCap size={30} width={50} height={50} className=" lg:w-1/4 text-lila"/>
                    <span href="/formaciones" className="w-full lg:w-3/4 font-bold p-3">
                        {formacion.nombre}
                    </span>
                </div>
            </Link>
        ))}
        </div>
    </div>
  );
}

export default FormacionesGrid;