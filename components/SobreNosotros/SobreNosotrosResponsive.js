import React from 'react';
import {InstagramFill,CircleChevronRight} from 'akar-icons'
export default function SobreNosotrosResponsive() {
  const trabajadores = [
    {
      img: "/assets/Adrian.png",
      nombre: "Adrian Hinojosa",
      lista: [
        "Director y Fundador del Circulo de Estudios Sistémicos.",
        "Doctor en Psicología",
        "Máster en Terapia Familiar",
        "Terapeuta de familia y de pareja",
        "Especialista en el Modelo Sistémico.",
        "Docente universitario",
        "Docente en escuelas de posgrado (Escuela Sistémica Argentina y Escuela de Terapia Familiar Sant Pau, Barcelona)",
      ],
      instagram: "https://www.instagram.com/adriancitohinojosa?igsh=dWM0YjgzbzUxcWwy",
    },
    {
      img: "/assets/Diego Ficoseco.jpg",
      nombre: "Diego Ficoseco",
      lista: [
        "Mg Terapia Familiar y de Parejas (Escuela de TF Sant Pau, Barcelona).",
        "Lic. en Psicología (UNSTA, Tucumán).",
        "Psicoterapeuta clínico",
        "Especialista en modelo sistémico.",
        "Docente universitario y de escuelas de posgrado.",
      ],
      instagram: "https://www.instagram.com/psico.fico?igsh=MW52dWJyeHlhYmgzMQ",
    },
    {
      img: "/assets/Alejandra Peñaloza.jpeg",
      nombre: "Alejandra Peñaloza",
      lista: [
        "Licenciada en Psicología (UNT)",
        "Especialista en Modelo Sistémico (ESA)",
        "Diplomado en psicoterapia sistémica de Niños, niñas y adolescentes",
        "Psicóloga en Nivel Educación Secundaria",
        "Docente en IES de la provincia de Jujuy",
        "Psicoterapeuta clínica especialista en modelo sistémico. Adolescentes, Adultos, Parejas y Familias",
      ],
      instagram: "https://www.instagram.com/circulosistemico/",
    },
    {
      img: "/assets/Anja Schindler.jpeg",
      nombre: "Anja Schindler",
      lista: [
        "Licenciada en Psicología",
        "Especialista en Modelo Sistémico",
        "Psicoterapeuta de familia e individual.",
        "Diplomado en psicoterapia sistémica de Niños, niñas y adolescentes",
      ],
      instagram: "https://www.instagram.com/circulosistemico/",
    },
    {
      img: "/assets/Cristian Maidana.jpeg",
      nombre: "Cristian Maidana",
      lista: [
        "Profesor en psicología",
        "Especialista en docencia superior.",
        "Docente en nivel secundario y nivel superior – técnico",
        "Diplomado en psicoterapia sistémica de Niños, niñas y adolescentes",
      ],
      instagram: "https://www.instagram.com/circulosistemico/",
    },
    {
      img: "/assets/TatianaSoruco.jpg",
      nombre: "Tatiana Soruco",
      lista: [
        "Licenciada en Psicología",
        "Especialista en Modelo Sistémico",
        "Psicoterapeuta individual (adolescentes y adultos)",
        "Diplomado en psicoterapia sistémica de Niños, niñas y adolescentes",
      ],
      instagram: "https://www.instagram.com/circulosistemico/",
    },
    {
      img: "/assets/jose.jpg",
      nombre: "José María Rojas",
      lista: [
        "Licenciado en Educación",
        "Profesor de Educación Especial",
        "Experto Universitario en Autismo y TGD.",
        "Abordaje Integral de la Discapacidad.",
        "Diplomado en psicoterapia sistémica de Niños, niñas y adolescentes",
      ],
      instagram: "https://www.instagram.com/jorojascordoba?utm_source=qr&igsh=MW0wNnp4bjQzMXNvNQ==",
    },
    {
      img: "/assets/Joanna Abregu.jpg",
      nombre: "Joanna Abregu",
      lista: [
        "Licenciada en Psicología",
        "Especialista en Modelo Sistémico",
        "Diplomado en psicoterapia sistémica de Niños, niñas y adolescentes",
      ],
      instagram: "https://www.instagram.com/circulosistemico/",
    },
  ];

  return (
    <div className="trabajadores-container-responsive">
      {trabajadores.map((trabajador) => (
        <div
          key={trabajador.nombre}
        >   
          <hr className='linea-trabajador'/>
          <h2 className=' font-bold trabajador-nombre-responsive color-gris'>{trabajador.nombre}</h2>
          <hr className='linea-trabajador'/>
          <img src={trabajador.img} alt={trabajador.nombre} className="trabajador-img-responsive fancy-border-radius" />
          
          <div className="trabajador-info-responsive">
           
            <ul className='py-3 '>
              {trabajador.lista.map((item, idx) => (
                <li className=' py-3 text-xl lista-trabajador-responsive' key={idx}> {item}</li>
                
              ))}
            </ul>
            <div className='enlaces-trabajador'>
            <p className='font-bold color-gris'>Redes Sociales:</p>
            <a href={trabajador.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramFill strokeWidth={2} size={30} />
            </a>
            </div>
            
          </div>
          
        </div>
        
      ))}
    </div>
  );
}