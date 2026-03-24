import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { config } from "@/config";

export function WhatsAppWidget() {
    const { demoUser } = config;

    const handleClick = () => {
        const message = encodeURIComponent("Hola, me gustaría agendar una valoración para implantes.");
        const whatsappUrl = `https://wa.me/${demoUser.whatsapp.replace(/\+/g, '')}?text=${message}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-shadow"
            >
                <MessageCircle size={28} fill="currentColor" />
            </motion.button>
        </div>
    );
}