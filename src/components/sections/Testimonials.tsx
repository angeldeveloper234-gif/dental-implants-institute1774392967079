import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { config } from "@/config";

export function Testimonials() {
    const { testimonials } = config;

    return (
        <section className="py-32 bg-obsidian">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div>
                        <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                            Testimonios
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">
                            HISTORIAS <span className="text-gray-600 italic">REALES</span>
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-[#15181E] p-10 border border-white/5 relative group hover:border-gold/20 transition-colors"
                        >
                            <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12 group-hover:text-gold/10 transition-colors" />
                            
                            <div className="flex gap-1 mb-8">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} size={12} className="fill-gold text-gold" />
                                ))}
                            </div>
                            
                            <p className="text-lg text-gray-300 font-light leading-relaxed mb-8 italic">
                                "{item.text}"
                            </p>
                            
                            <div>
                                <p className="font-bold text-white font-serif tracking-wide">{item.name}</p>
                                <p className="text-[10px] text-gold font-bold uppercase tracking-widest mt-1">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}