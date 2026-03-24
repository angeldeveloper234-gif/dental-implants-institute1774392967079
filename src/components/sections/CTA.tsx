import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function CTA() {
    return (
        <section className="py-32 bg-obsidian relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-[#15181E] p-12 md:p-20 border border-white/5 relative"
                >
                    <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Decisión Inteligente</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">
                        ¿LISTO PARA <span className="italic text-gray-500">SONREÍR</span> DE NUEVO?
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-light">
                        Agenda tu valoración hoy mismo. Sin compromiso y con la tecnología más avanzada de {config.dynamicContent.city}.
                    </p>
                    
                    <div className="flex justify-center">
                        <Button 
                            size="lg" 
                            className="bg-gold text-black hover:bg-white h-16 px-12 rounded-none text-sm font-bold uppercase tracking-widest transition-all"
                        >
                            <CalendarCheck className="mr-2 w-5 h-5" />
                            Agendar Cita Online
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}