export default function Newsletter() {

    return (
        <section className="py-14 max-w-screen-xl mx-auto">
            <div className="relative overflow-hidden mx-4 px-4 py-14 rounded-2xl bg-lila md:px-8 md:mx-8">
                <div className="relative z-10 max-w-xl mx-auto sm:text-center">
                    <div className="space-y-3">

                        <h3 className="text-3xl text-white font-bold">
                            Próximamente...
                        </h3>
                        <p className="text-blue-100 leading-relaxed">
                             Estamos preparando nuevas formaciones para 2025. ¡Mantente atento a nuestras novedades!
                        </p>
                    </div>
                    <div className="mt-6">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto">
                            <input
                                type="email"
                                placeholder="Ingresa tu email"
                                className="text-gray-500 w-full p-2 outline-none"
                            />
                            <button
                                className="p-2 px-3 rounded-lg font-medium text-white bg-lila hover:bg-lila/70 active:bg-purple-900/90 duration-150 outline-none shadow-md focus:shadow-none sm:px-4"
                            >
                                Notifícame
                            </button>
                        </form>
                        
                    </div>
                </div>
                
            </div>
        </section>
    )
}