import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import Link from "next/link";

interface FormacionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormacionModal({ isOpen, onClose }: FormacionModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-12">
              <div className="inline-block bg-violeta/10 text-violeta px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                DIPLOMADO
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-violeta leading-tight mb-4">
                Terapia Sistémica Individual
              </h2>
              <p className="text-lg text-violeta/80 font-medium mb-8">
                Coordinación: Dr. Adrián Hinojosa
              </p>

              <div className="bg-[#f5f7fa] p-6 rounded-2xl mb-8 space-y-3 text-violeta/80">
                <p><strong>Modalidad:</strong> Virtual (clases sincrónicas en vivo, grabaciones disponibles)</p>
                <p><strong>Frecuencia mensual:</strong> 2do miércoles y jueves de cada mes de 18 a 21hs</p>
                <p><strong>Duración:</strong> 8 clases (De agosto a noviembre)</p>
                <p><strong>Dirigido a:</strong> Profesionales de la salud mental</p>
              </div>

              <div className="space-y-6 text-violeta/80 leading-relaxed text-sm md:text-base">
                <div>
                  <h3 className="text-xl font-serif text-violeta mb-3">Fundamentos</h3>
                  <p className="mb-4">
                    El modelo sistémico ha tenido, históricamente, una predilección por el estudio de los grupos (familia, pareja, instituciones, comunidad) y ha dejado en un segundo plano el trabajo sobre el individuo. Fue valioso y pertinente que se ocupe de los sistemas familiares, pero el trabajo en los dispositivos individuales es una necesidad y un complemento que merece ser estudiado para efectivizar aún más los procesos clínicos.
                  </p>
                  <p className="mb-4">
                    Existen muchos terapeutas que, luego de estudiar el modelo sistémico, no se convierten en terapeutas de familia y pareja, sino que siguen siendo terapeutas individuales, pero sin que hayan recibido una formación sobre la influencia de las relaciones y su instrumentación a nivel individual.
                  </p>
                  <p>
                    Por ello emergen algunas preguntas: ¿Cuáles son las especificidades de la terapia individual? ¿Cuándo indicar terapia individual y cuándo de familia? ¿Hay recursos exclusivos de la terapia individual? ¿Qué ocurre con la coordinación y combinación entre terapias grupales e individuales?
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-violeta mb-3">Objetivos generales</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Comprender los beneficios y complejidad de la terapia individual sistémica</li>
                    <li>Definir criterios para la indicación de terapia individual, de pareja o de familia</li>
                    <li>Desarrollar estrategias de intervenciones sistémicas en terapia individual</li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 flex justify-center">
                <Link
                  href="https://wa.me/543885737111"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:bg-[#20bd5a] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Consultar por WhatsApp
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
