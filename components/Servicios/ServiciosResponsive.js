import { HiAcademicCap } from "react-icons/hi2";
import { Person , PeopleMultiple, PeopleGroup} from 'akar-icons'
export default function ServiciosResponsive(){
    return (
        <div className="servicios-responsive py-3 sombra">
            <h2 className="text-3xl font-bold color-gris text-center">Nuestros <span className="color-lila">Servicios</span></h2>    
                <div className="tipos-servicios-responsive ">
                    <div className="tipos-servicios-div-responsive">
                    <div className="enlaces-servicios">
                            <a href="servicios" className="icono-servicios-container">
                            <Person strokeWidth={2} size={50} className="icono-servicios" />
                            </a>
                            <a  className="font-bold color-gris">Atención Individual</a>
                        </div>
                        <div className="enlaces-servicios">
                            <a href="servicios" className="icono-servicios-container"><PeopleMultiple strokeWidth={2} size={50} className="icono-servicios" /></a>
                            <a  className="font-bold color-gris"> Atención de Parejas</a>
                        </div>
                        <div  className="enlaces-servicios">
                            <a href="servicios" className="icono-servicios-container"><PeopleGroup strokeWidth={2} size={50} className="icono-servicios" /></a>
                            <a  className="font-bold color-gris">Atención Familiar</a>
                        </div>
                    </div>
                    
                </div>    
                
        </div>
    )
}