'use client';

import Image from 'next/image';

export default function Newsletter() {
  return (
    <section className="relative w-full bg-[#f5f7fa] py-16 lg:py-32 overflow-hidden flex flex-col justify-center items-center lg:min-h-[700px]">

      {/* Desktop Images - Absolute positioning across the whole section */}
      <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="relative w-full h-full max-w-[1440px] mx-auto">

          {/* Left Side (5 images) */}
          {/* Inner Column (3 images) */}
          <div className="absolute top-[15%] left-[15%] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl z-20">
            <Image src="/assets/img-1.jpg" alt="Terapeuta" fill className="object-cover" />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-[15%] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl z-30">
            <Image src="/assets/img-2.jpg" alt="Sesión" fill className="object-cover" />
          </div>
          <div className="absolute bottom-[15%] left-[15%] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl z-10">
            <Image src="/assets/img-3.jpg" alt="Paciente" fill className="object-cover" />
          </div>

          {/* Outer Column (2 smaller images) */}
          <div className="absolute top-[32%] left-[5%] w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-2xl overflow-hidden shadow-lg z-10">
            <Image src="/assets/img-4.jpg" alt="Profesional" fill className="object-cover" />
          </div>
          <div className="absolute bottom-[32%] left-[5%] w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-2xl overflow-hidden shadow-lg z-10">
            <Image src="/assets/img-5.jpg" alt="Consulta" fill className="object-cover" />
          </div>

          {/* Right Side (5 images) */}
          {/* Inner Column (3 images) */}
          <div className="absolute top-[15%] right-[15%] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl z-20">
            <Image src="/assets/img-6.jpg" alt="Profesional" fill className="object-cover" />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[15%] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl z-30">
            <Image src="/assets/img-7.jpg" alt="Consulta" fill className="object-cover" />
          </div>
          <div className="absolute bottom-[15%] right-[15%] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl z-10">
            <Image src="/assets/img-1.jpg" alt="Online" fill className="object-cover" />
          </div>

          {/* Outer Column (2 smaller images) */}
          <div className="absolute top-[32%] right-[5%] w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-2xl overflow-hidden shadow-lg z-10">
            <Image src="/assets/img-2.jpg" alt="Terapia" fill className="object-cover" />
          </div>
          <div className="absolute bottom-[32%] right-[5%] w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-2xl overflow-hidden shadow-lg z-10">
            <Image src="/assets/img-3.jpg" alt="Terapia" fill className="object-cover" />
          </div>

        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-50 flex flex-col items-center justify-center text-center px-6 mx-auto bg-[#f5f7fa]/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none p-8 lg:p-0 rounded-3xl">
        <h2 className="font-serif text-4xl lg:text-[3.5rem] leading-[1.1] text-violeta mb-5 font-normal tracking-tight">
          Tu <em className="italic font-bold">bienestar mental</em><br className="hidden sm:block" /> empieza aquí
        </h2>
        <p className="text-violeta/75 text-[15px] lg:text-[20px] leading-relaxed mb-8 max-w-md">
          Comunicate con nosotros para encontrar al profesional adecuado a tus necesidades y preferencias
        </p>
        <a href='https://wa.me/543885737111' className="bg-violeta text-white px-8 py-3.5 rounded-full font-medium hover:bg-violeta/90 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          Empecemos
        </a>
      </div>

      {/* Mobile Images - Clustered under the text */}
      <div className="relative lg:hidden w-full max-w-[320px] mx-auto mt-14 h-[240px] z-0">
        {/* Center large image */}
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-3xl overflow-hidden shadow-2xl z-30">
          <Image src="/assets/newsletter/perfil2.jpg" alt="Sesión" fill className="object-cover" />
        </div>
        {/* Top left */}
        <div className="absolute top-0 left-2 w-[100px] h-[100px] rounded-3xl overflow-hidden shadow-xl z-20">
          <Image src="/assets/newsletter/perfil1.jpg" alt="Terapeuta" fill className="object-cover" />
        </div>
        {/* Top right */}
        <div className="absolute top-0 right-2 w-[100px] h-[100px] rounded-3xl overflow-hidden shadow-xl z-20">
          <Image src="/assets/newsletter/perfil6.jpg" alt="Profesional" fill className="object-cover" />
        </div>
        {/* Bottom left */}
        <div className="absolute bottom-[-10px] left-8 w-[80px] h-[80px] rounded-2xl overflow-hidden shadow-lg z-10">
          <Image src="/assets/newsletter/perfil3.jpg" alt="Paciente" fill className="object-cover" />
        </div>
        {/* Bottom right */}
        <div className="absolute bottom-[-10px] right-8 w-[80px] h-[80px] rounded-2xl overflow-hidden shadow-lg z-10">
          <Image src="/assets/newsletter/perfil8.jpg" alt="Online" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
