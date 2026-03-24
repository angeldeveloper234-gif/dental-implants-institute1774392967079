import { config } from "@/config";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
    const { branding } = config;

    return (
        <footer className="bg-obsidian text-white pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-serif font-bold mb-4 text-white">{branding.name}</h2>
                        <p className="text-gray-500 max-w-sm mb-8 font-sans text-sm leading-relaxed">
                            {branding.slogan}. Transformando vidas a través de la excelencia en implantología dental.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-bold mb-6 font-sans text-xs uppercase tracking-widest text-gold">Navegación</h4>
                        <ul className="space-y-4 text-gray-400 font-sans text-sm">
                            <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="/about" className="hover:text-white transition-colors">Nosotros</a></li>
                            <li><a href="/services" className="hover:text-white transition-colors">Tratamientos</a></li>
                            <li><a href="/contact" className="hover:text-white transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 font-sans text-xs uppercase tracking-widest text-gold">Legal</h4>
                        <ul className="space-y-4 text-gray-400 font-sans text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-[10px] font-sans tracking-widest uppercase">
                    <p>© {new Date().getFullYear()} {branding.name}. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}