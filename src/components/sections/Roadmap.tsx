import { motion } from 'framer-motion';
import { config } from '@/config';

export function Roadmap() {
    const { roadmap } = config.dynamicContent;

    return (
        <section className="py-32 bg-[#0A0C0F] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">El Proceso</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white">
                        TU CAMINO A UNA <span className="italic text-gray-500">NUEVA VIDA</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-white/5 -z-10" />

                    {roadmap.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative bg-[#0A0C0F] pt-4"
                        >
                            <div className="w-16 h-16 bg-[#15181E] border border-gold/20 flex items-center justify-center text-xl font-serif text-gold mb-8 mx-auto shadow-[0_0_30px_-10px_rgba(212,175,55,0.2)]">
                                {item.step}
                            </div>
                            <div className="text-center px-6">
                                <h3 className="text-xl font-bold text-white mb-4 font-serif tracking-wide">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-light">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}