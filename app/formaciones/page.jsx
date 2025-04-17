'use client'
import React from 'react';
import { HiDocument } from "react-icons/hi";
import { Subtitle } from "@/components/Subtitle/SubTitle";
import { Title } from "@/components/Title/Title";
import { Calendar, File, Envelope } from 'akar-icons';
import { DIV } from "@/components/Div/Div";
import Newsletter from '@/components/Newsletter/NewsLetter'
import Escuelas from '@/components/Escuelas/Escuelas'

const formacionesPdfData = [
  { nombre: 'Formacion en el Modelo Sistémico', pdf: '/pdf/.pdfformaciones-ModeloSistemico.pdf' },
  { nombre: 'Formacion en Terapia de Parejas', pdf: '/pdf/formaciones-TerapiaParejas.pdf' },
  { nombre: 'Formacion en Coordinación de Grupos', pdf: '/pdf/formaciones-Coordinacion.pdf' },
  { nombre: 'Formacion en Trabajo Social desde el Modelo Sistémico', pdf: '/pdf/formaciones-TrabajoSocial.pdf' },
  { nombre: 'Formacion en Problematicas Alimentarias', pdf: '/pdf/formaciones-ProblematicasAlimentarias.pdf' },
  { nombre: 'Formacion en Infancia y Adolescencia desde el modelo sistémico', pdf: '/pdf/formaciones-AdolescenciaInfancia.pdf' },
  { nombre: 'Formacion Sexología Clínica', pdf: '/pdf/formaciones-SexologiaClinica.pdf'},
  { nombre: 'Formacion en terapia centrada en soluciones', pdf: '/pdf/formaciones-TerapiaSoluciones.pdf'},

];


function FormacionesPdfGrid() {
  return (
    <div className="mb-12">
      <Subtitle><span className="text-4xl font-bold color-gris text-center mb-8">
        Nuestras <span className="color-lila">Formaciones</span>
      </span></Subtitle>
      <div className="grid gap-4 lg:grid-cols-3 px-4 "> {/* Ajusté a grid-cols-3 para que coincida con el diseño anterior */}
        {formacionesPdfData.map((formacion, index) => (
          <a
            key={index}
            href={formacion.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-slate-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{formacion.nombre}</h3>
              </div>
              <p className="text-sm text-purple-600 flex items-center">
                <File className="mr-2" size={16} /> Ver más
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Formaciones() {
  return (
    <div className="m-auto max-w-7xl py-5 px-6">
      <div className="md:flex lg:text-7xl md:text-6xl sm:text-6xl text-4xl md:gap-4  my-[50px]">
        <Title>Nuestras</Title>
        <Subtitle>Formaciones</Subtitle>
      </div>
      <DIV>
        <div className="mb-20">
          <h2 className="font-bold color-gris text-3xl py-3 subtitulo-formaciones">
            Desde el Círculo Sistémico, te ofrecemos una formación integral en psicología sistémica.
          </h2>
          <h3 className="font-bold color-gris text-2xl py-3 parrafo-formaciones">
            Nuestra metodología de enseñanza combina teoría con la práctica, brindándote herramientas prácticas para aplicar en el mundo real. Con nuestros postgrados, podrás adquirir habilidades y conocimientos.
          </h3>
        </div>

        <FormacionesPdfGrid /> {/* Reemplazamos la sección anterior con este componente */}

        <Newsletter/>

        <Escuelas/>
      </DIV>
    </div>
  );
}