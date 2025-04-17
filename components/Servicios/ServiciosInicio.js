export default function ServiciosInicio(){
    return (
        <div className="servicios py-3">
            <h2 className="text-3xl font-bold color-gris text-center">Nuestros <span className="color-lila">Servicios</span></h2>    
                <div className="tipos-servicios ">
                    <div className="tipos-servicios-div md:flex block">
                        <a href="/servicios" className="container-servicios container-servicios-uno">
                            <h2 className="font-bold">Atención <br/> Individual</h2>
                        </a>
                        <a href="/servicios" className="container-servicios container-servicios-dos">
                            <h2 className="font-bold">Atención <br/> de Parejas</h2>
                        </a>
                        <a href="/servicios" className="container-servicios container-servicios-tres">
                            <h2 className="font-bold text-white">Atención <br/> Familiar</h2>
                        </a>
                        </div>
                        <hr className="linea-servicios"/>
                </div>    

        </div>
    )
}