import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Monolith Palette Mapping
                obsidian: "#0F1216",
                gold: "#D4AF37",
                white: "#FFFFFF",
                
                // Mapping legacy semantic names to new palette to maintain compatibility
                background: "#0F1216", 
                foreground: "#FFFFFF",
                
                navy: "#FFFFFF",       // Text is now white
                ivory: "#0F1216",      // Background is now Obsidian
                peach: "#D4AF37",      // Accent is now Gold
                softblue: "#1A1D24",   // Secondary cards are dark gray
                dark: "#E5E5E5",       // Body text is light gray
                
                primary: {
                    DEFAULT: "#D4AF37", // Gold
                    foreground: "#0F1216",
                },
                secondary: {
                    DEFAULT: "#1A1D24",
                    foreground: "#FFFFFF",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Playfair Display", "serif"],
            },
            borderRadius: {
                'xl': '0.5rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
            }
        },
    },
    plugins: [],
}

export default config