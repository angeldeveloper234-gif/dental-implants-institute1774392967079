import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Contact() {
    const { dynamicContent, contact } = config;

    return (
        <section id="contact" className="py-32 bg-[#0A0C0F]">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    <div>
                        <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Contacto</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
                            VISÍTANOS EN <br/> <span className="italic text-gray-500">{dynamicContent.city.toUpperCase()}</span>
                        </h2>
                        <p className="text-gray-400 mb-12 font-light leading-relaxed max-w-md">
                            Instalaciones de clase mundial diseñadas para tu confort y privacidad.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <MapPin className="text-gold mt-1" size={20} />
                                <div>
                                    <h4 className="font-bold text-white mb-1 text-xs uppercase tracking-widest">Dirección</h4>
                                    <p className="text-gray-400 text-sm">{contact.address}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <Phone className="text-gold mt-1" size={20} />
                                <div>
                                    <h4 className="font-bold text-white mb-1 text-xs uppercase tracking-widest">Teléfono</h4>
                                    <p className="text-gray-400 text-sm">{contact.phone}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <Clock className="text-gold mt-1" size={20} />
                                <div>
                                    <h4 className="font-bold text-white mb-1 text-xs uppercase tracking-widest">Horario</h4>
                                    <p className="text-gray-400 text-sm">Lun - Vie: 9:00 AM - 7:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#15181E] p-10 border border-white/5"
                    >
                        <h3 className="text-2xl font-serif text-white mb-8">Solicita tu Valoración</h3>
                        <form className="space-y-5">
                            <div className="grid grid-cols-2 gap-5">
                                <input type="text" placeholder="Nombre" className="w-full bg-obsidian border border-white/10 px-4 py-3 text-white text-sm focus:border-gold outline-none transition-colors" />
                                <input type="text" placeholder="Apellido" className="w-full bg-obsidian border border-white/10 px-4 py-3 text-white text-sm focus:border-gold outline-none transition-colors" />
                            </div>
                            <input type="tel" placeholder="Teléfono" className="w-full bg-obsidian border border-white/10 px-4 py-3 text-white text-sm focus:border-gold outline-none transition-colors" />
                            <textarea rows={4} placeholder="¿Cómo podemos ayudarte?" className="w-full bg-obsidian border border-white/10 px-4 py-3 text-white text-sm focus:border-gold outline-none transition-colors"></textarea>
                            <Button className="w-full h-14 bg-gold text-black hover:bg-white rounded-none text-xs font-bold uppercase tracking-widest">
                                Enviar Mensaje
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}