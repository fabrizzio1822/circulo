'use client'
import { DIV } from "@/components/Div/Div";
import SobreNosotros from "@/components/SobreNosotros/SobreNosotros";
import SobreNosotrosResponsive from "@/components/SobreNosotros/SobreNosotrosResponsive";
import { Subtitle } from "@/components/Subtitle/SubTitle";
import { Title } from "@/components/Title/Title";
import FixedWhatsappButton from "@/components/Whatsapp/Whatsapp";
export default function Nosotros(){
    return (
        <div className="max-w-7xl mx-auto p-3">
            <FixedWhatsappButton/>
            <div className="flex md:text-7xl text-3xl gap-4">
                <Title >Sobre</Title>
                <Subtitle>Nosotros</Subtitle>
            </div>
            <DIV>
            <SobreNosotros/>
            <SobreNosotrosResponsive/>
            </DIV>
                
            
            <div className="bg-lila rounded-xl hidden sm:block" >
      <img
          src='/assets/image.webp'
          alt="Logo"
          className='m-auto  '
      />
    </div>
        </div>
    )
}