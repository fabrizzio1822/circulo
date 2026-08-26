'use client'
import { DIV } from "@/components/Div/Div";
import SobreNosotros from "@/components/SobreNosotros/SobreNosotros";
import SobreNosotrosResponsive from "@/components/SobreNosotros/SobreNosotrosResponsive";
import { Subtitle } from "@/components/Subtitle/SubTitle";
import { Title } from "@/components/Title/Title";
import FixedWhatsappButton from "@/components/Whatsapp/Whatsapp";
export default function Nosotros() {
    return (
        <div >
            <FixedWhatsappButton />
            <SobreNosotros />
        </div>
    )
}