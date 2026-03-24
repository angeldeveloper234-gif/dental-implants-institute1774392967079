import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { branding } = config;

    const links = [
        { href: "/", label: "Inicio" },
        { href: "/about", label: "Nosotros" },
        { href: "/services", label: "Tratamientos" },
        { href: "/contact", label: "Contacto" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-obsidian/90 backdrop-blur-xl border-b border-gold/10 py-4" : "bg-transparent py-6"}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex flex-col group">
                    <span className="text-2xl font-serif font-bold text-white tracking-tight block group-hover:text-gold transition-colors">
                        {branding.name}
                    </span>
                    <span className="text-[9px] text-gold font-bold tracking-[0.3em] uppercase">
                        {branding.trade}
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`text-[11px] font-sans font-bold uppercase tracking-widest transition-colors ${isActive(link.href) ? "text-gold" : "text-gray-400 hover:text-white"}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/contact">
                        <Button className="bg-gold text-black hover:bg-white hover:text-black rounded-none px-8 h-10 text-[11px] font-bold uppercase tracking-wider transition-all">
                            Agendar Valoración
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-full left-0 right-0 bg-obsidian border-t border-gold/10 shadow-2xl"
                >
                    <div className="flex flex-col p-8 gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`text-sm font-sans font-bold uppercase tracking-widest ${isActive(link.href) ? "text-gold" : "text-gray-400"}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                            <Button className="w-full mt-4 bg-gold text-black h-12 rounded-none uppercase tracking-widest text-xs font-bold">
                                Agendar Cita
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}