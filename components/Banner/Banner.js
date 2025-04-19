import Image from "next/image";
export default function Banner() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5  items-center justify-center flex-col">
         <div className="max-w-7xl px-6 my-8 mx-auto">
                  <h1 className="font-bold lg:text-5xl text-5xl py-3 mb-4 text-center titulo-inicio color-gris">
                    ¡Bienvenidos al <span className="text-lila">Circulo Sistémico!</span>{" "}
                  </h1>
        
                  <h2 className="text-xl lg:text-2xl font-bold color-gris text-center">
                    Somos una institución conformada por un grupo de profesionales, especializados en Psicología Sistémica.{" "}
                    <br  />
                    Brindamos formación y atención psicológica individual, de pareja y familiar.
                  </h2>
                </div>
        <Image quality='100' width={1000} height={800} src='/assets/banner.JPG'  objectFit="contain" className="rounded-2xl" alt="Banner"/>
  </div>
</section>
  );
}

