import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "¿Soy candidato para implantes dentales?",
        a: "La mayoría de los pacientes lo son. En Dental Implants Institute utilizamos tecnología 3D para evaluar tu hueso y determinar el mejor tratamiento, incluso si te han dicho que no tienes suficiente hueso.",
    },
    {
        q: "¿Es doloroso el procedimiento?",
        a: "No. Utilizamos sedación consciente y anestesia local para garantizar que tu experiencia sea completamente indolora y relajada.",
    },
    {
        q: "¿Cuánto tiempo dura el tratamiento?",
        a: "Con nuestra técnica de carga inmediata, puedes salir con dientes fijos el mismo día de la cirugía en muchos casos.",
    },
    {
        q: "¿Ofrecen garantía?",
        a: "Sí, todos nuestros implantes cuentan con garantía por escrito sobre los materiales y la integración.",
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-32 bg-obsidian border-t border-white/5">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-20">
                    <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Dudas Comunes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white">
                        PREGUNTAS <span className="italic text-gray-500">FRECUENTES</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div 
                            key={i} 
                            className={`border transition-all duration-300 ${openIndex === i ? "bg-[#15181E] border-gold/30" : "bg-transparent border-white/5 hover:border-white/10"}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className={`text-lg font-serif font-medium transition-colors ${openIndex === i ? "text-white" : "text-gray-400"}`}>
                                    {faq.q}
                                </span>
                                <Plus className={`w-5 h-5 text-gold transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                    >
                                        <div className="px-6 pb-6">
                                            <p className="text-gray-400 font-sans text-sm leading-relaxed border-t border-white/5 pt-4">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}