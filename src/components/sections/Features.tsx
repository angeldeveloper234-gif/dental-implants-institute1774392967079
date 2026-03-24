import { motion } from "framer-motion";
import { config } from "@/config";
import { ArrowRight } from "lucide-react";

export function Features() {
    const { services } = config;

    return (
        <section className="py-32 bg-obsidian relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                    <div className="max-w-2xl">
                        <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-6 block">
                            Áreas de Especialidad
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                            SOLUCIONES AVANZADAS PARA <br/>
                            <span className="text-gray-500 italic">CASOS COMPLEJOS</span>
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <Button variant="outline" className="border-white/10 text-white hover:bg-gold hover:text-black rounded-none uppercase tracking-widest text-xs h-12 px-8">
                            Ver todos los servicios
                        </Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-[#15181E] border border-white/5 p-10 hover:border-gold/30 transition-all duration-500"
                        >
                            <div className="text-4xl mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
                                {service.icon}
                            </div>
                            
                            <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">
                                {service.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                                {service.agitation} {service.solve}
                            </p>

                            <div className="flex items-center text-gold text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                Más Información <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { Button } from "@/components/ui/button";