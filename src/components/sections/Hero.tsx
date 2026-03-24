import { motion } from "framer-motion";
import { ArrowRight, Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Hero() {
    const { dynamicContent } = config;
    const { city } = dynamicContent;

    return (
        <section className="relative min-h-screen flex flex-col pt-24 overflow-hidden bg-obsidian">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
                    alt="Dental Implants Institute" 
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-obsidian/80 to-obsidian" />
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/60 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex-grow flex items-center py-12 lg:py-0">
                <div className="w-full lg:w-[65%]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl py-10"
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 border-l-2 border-gold pl-4 mb-8"
                        >
                            <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em]">
                                Excelencia en Implantología en {city}
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-white leading-[1.05] mb-8 font-medium">
                            DISEÑAMOS SONRISAS QUE <span className="text-gold italic">CAMBIAN VIDAS</span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-10 leading-relaxed font-sans max-w-xl font-light">
                            Líderes en implantología y rehabilitación oral compleja. 
                            Bajo la dirección del <span className="text-white font-medium">Dr. Jerry Mongalo</span>, recupera tu confianza con tecnología de vanguardia.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-8 mb-16">
                            <Button 
                                size="lg" 
                                className="bg-gold text-black hover:bg-white h-14 px-10 rounded-none text-xs font-bold tracking-[0.2em] transition-all w-full sm:w-auto uppercase"
                            >
                                Agendar Valoración <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            
                            <button className="flex items-center gap-4 group">
                                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:border-gold group-hover:text-gold text-white">
                                    <Play size={16} fill="currentColor" />
                                </span>
                                <span className="text-xs font-bold text-white uppercase tracking-widest group-hover:text-gold transition-colors">
                                    Ver Testimonios
                                </span>
                            </button>
                        </div>

                        <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-gray-800 border-2 border-obsidian flex items-center justify-center text-xs text-white">
                                        <Star size={12} className="fill-gold text-gold" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex gap-1 mb-1">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                                    ))}
                                </div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                                    Pacientes Satisfechos
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}