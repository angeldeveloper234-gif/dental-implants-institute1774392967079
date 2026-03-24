export interface GalleryItem {
    title: string;
    category: string;
    image: string;
}

export interface ProductItem {
    id: string;
    name: string;
    price: string;
    desc: string;
    image: string;
}

export interface ServiceItem {
    id: string;
    icon: string;
    title: string;
    problem: string;
    agitation: string;
    solve: string;
    price: string;
}

export interface TestimonialItem {
    name: string;
    role: string;
    text: string;
    tags: string[];
}

export interface Config {
    branding: {
        name: string;
        slogan: string;
        logo: string;
        trade: string;
    };
    supabase: {
        url: string;
        anonKey: string;
    };
    analytics: {
        webhookUrl: string;
    };
    bookingUrl: string;
    paymentLink: string;
    googleMapsReviewUrl: string;
    dynamicContent: {
        city: string;
        localAnchor: string;
        stats: {
            projectsDone: number;
            experienceYears: number;
            happyClients: number;
            m2Built?: string;
        };
        specialization: {
            title: string;
            pain: string;
            ego: string;
            hook: string;
        };
        roadmap: Array<{
            step: string;
            title: string;
            desc: string;
        }>;
        pricing: {
            basic: string;
            comprehensive: string;
            retainer: string;
        };
    };
    services: ServiceItem[];
    testimonials: TestimonialItem[];
    demoUser: {
        name: string;
        email: string;
        whatsapp: string;
    };
    features: {
        showGallery: boolean;
        showProducts: boolean;
        showTestimonials: boolean;
        showFAQ: boolean;
        showStats: boolean;
    };
    contact: {
        address: string;
        phone: string;
        email: string;
        googleMapsEmbed?: string;
    };
    team: {
        leadDoctors: string;
        badgeText: string;
    };
    gallery: GalleryItem[];
    products: ProductItem[];
}

export const config: Config = {
    branding: {
        name: "Dental Implants Institute",
        slogan: "Diseñamos sonrisas que cambian vidas",
        logo: "DII",
        trade: "Implantología Avanzada",
    },
    supabase: {
        url: "",
        anonKey: "",
    },
    analytics: {
        webhookUrl: "",
    },
    bookingUrl: "/contact",
    paymentLink: "",
    googleMapsReviewUrl: "",
    dynamicContent: {
        city: "Guadalajara",
        localAnchor: "Chapalita",
        stats: {
            projectsDone: 5000,
            experienceYears: 20,
            happyClients: 4800,
            m2Built: "100%"
        },
        specialization: {
            title: "Implantología Estratégica",
            pain: "¿Miedo a sonreír o comer en público?",
            ego: "Recupera tu confianza y calidad de vida",
            hook: "Soluciones definitivas en 24 horas"
        },
        roadmap: [
            {
                step: "01",
                title: "Diagnóstico 3D",
                desc: "Tomografía computarizada y escaneo intraoral para una planificación milimétrica sin sorpresas."
            },
            {
                step: "02",
                title: "Planificación",
                desc: "Diseño digital de tu sonrisa y guías quirúrgicas para una intervención mínimamente invasiva."
            },
            {
                step: "03",
                title: "Sonrisa Definitiva",
                desc: "Colocación de implantes y dientes fijos, devolviéndote la función y estética inmediata."
            }
        ],
        pricing: {
            basic: "Valoración Inicial",
            comprehensive: "Rehabilitación Completa",
            retainer: "Mantenimiento Anual"
        }
    },
    services: [
        {
            id: "01",
            icon: "💎",
            title: "Implantes All-on-4",
            problem: "Pérdida total de dientes",
            agitation: "La dentadura postiza es incómoda e insegura.",
            solve: "Arco completo fijo sobre 4 implantes.",
            price: "Valoración Personalizada"
        },
        {
            id: "02",
            icon: "🧬",
            title: "Implantes Cigomáticos",
            problem: "Poco hueso maxilar",
            agitation: "Te han dicho que no eres candidato para implantes.",
            solve: "Anclaje en hueso cigomático sin injertos.",
            price: "Alta Especialidad"
        },
        {
            id: "03",
            icon: "✨",
            title: "Diseño de Sonrisa",
            problem: "Dientes desgastados",
            agitation: "Tu sonrisa no refleja tu personalidad.",
            solve: "Carillas de porcelana de alta estética.",
            price: "Diseño Digital"
        }
    ],
    testimonials: [
        {
            name: "Roberto Méndez",
            role: "Paciente All-on-4",
            text: "Volví a comer manzanas después de 10 años. El Dr. Mongalo y su equipo cambiaron mi vida en un solo día.",
            tags: ["Implantes", "Cambio de Vida"]
        },
        {
            name: "Sarah Johnson",
            role: "Turismo Médico",
            text: "The attention to detail is superior to what I found in the US, and the facility is like a spaceship. Incredible.",
            tags: ["Internacional", "Calidad"]
        },
        {
            name: "María Elena G.",
            role: "Rehabilitación",
            text: "Tenía pánico al dentista. Aquí me trataron con sedación y no sentí absolutamente nada. Gracias infinitas.",
            tags: ["Sin Dolor", "Confianza"]
        }
    ],
    demoUser: {
        name: "Coordinación de Pacientes",
        email: "contacto@dentalimplants.mx",
        whatsapp: "+523324948947"
    },
    features: {
        showGallery: true,
        showProducts: false,
        showTestimonials: true,
        showFAQ: true,
        showStats: true
    },
    contact: {
        address: "C. Primo Feliciano Velázquez 761, Chapalita, 44500 Guadalajara, Jal., México",
        phone: "+52 33 2494 8947",
        email: "contacto@dentalimplants.mx",
    },
    team: {
        leadDoctors: "Dr. Jerry Mongalo y Dr. Roa",
        badgeText: "Líderes en Implantes",
    },
    gallery: [
        {
            title: "Rehabilitación Superior",
            category: "All-on-4",
            image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Estética Cerámica",
            category: "Carillas",
            image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
        }
    ],
    products: []
};