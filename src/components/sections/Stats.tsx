import { motion } from 'framer-motion';
import { config } from '@/config';

export function Stats() {
    const { stats } = config.dynamicContent;

    const data = [
        { label: "Pacientes Felices", value: stats.happyClients, suffix: "+" },
        { label: "Años de Experiencia", value: stats.experienceYears, suffix: "+" },
        { label: "Implantes Colocados", value: stats.projectsDone, suffix: "+" },
        { label: "Garantía", value: "100", suffix: "%" },
    ];

    return (
        <section className="py-24 bg-obsidian border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="text-4xl md:text-6xl font-serif text-white mb-4">
                                {item.value}<span className="text-gold text-2xl align-top">{item.suffix}</span>
                            </div>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}