// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                space: {
                    900: "#0B0D17", // Fondo profundo (no negro absoluto)
                    800: "#151932", // Fondo de tarjetas
                },
                neon: {
                    cyan: "#00F3FF", // Cian eléctrico
                    purple: "#BC13FE", // Púrpura láser
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
};
export default config;