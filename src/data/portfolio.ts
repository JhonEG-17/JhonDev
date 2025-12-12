const ASSETS_URL = "https://wlfxrqgczmkdisaygmra.supabase.co/storage/v1/object/public/portfolio-assets";

export interface Profile {
    name: string;
    role: string;
    bio: string;
    cvUrl: string;
    photoUrl: string;
    socialLinks: {
        github: string;
        linkedin: string;
        twitter: string;
    };
}

export const profile: Profile = {
    name: "Jhonatan Espinal",
    role: "Full Stack Developer",
    bio: "Actualmente funjo como desarrollador web en IAMSA y SEO jr donde constantemente doy mantenimiento y optimizaciones de los sitios web de marcas como ETN, AUTOVÍAS, COSTA LINE y VIVABUS",
    cvUrl: `${ASSETS_URL}/cv/CV_Jhonatan_Espinal_Garcia.pdf`,
    photoUrl: `${ASSETS_URL}/profile/jhonatan-espinal.webp`,
    socialLinks: {
        github: "https://github.com/JhonEG-17",
        linkedin: "https://www.linkedin.com/in/jhoneg",
        twitter: "https://x.com/JhonEG17",
    }
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    date: string;
    description: string;
}

export const experience: Experience[] = [
    {
        id: 1,
        title: "CEO & Desarrollador Full stack",
        company: "CalculFisc",
        date: "20 / mayo / 2024 - Actualidad",
        description: "Diseño y desarrollo de la plataforma web de CalculFisc, una aplicación web que permite a los usuarios calcular impuestos, administrar sus nóminas, verificar su salario real despues de impuestos y previsualizar facturas para personas fisicas en el regimen RESICO."
    },
    {
        id: 2,
        title: "Desarrollador Frontend | SEO jr",
        company: "ETN Turistar",
        date: "20 / feb / 2025 - Actualidad",
        description: "Lideré la reconstrucción técnica de sitios web clave, logrando un aumento del 40-50% en rendimiento y accesibilidad. Implementé optimización SEO, mejoras de carga con imágenes WebP/AVIF y el flujo de trabajo con Git/GitHub para el equipo."
    },
    {
        id: 3,
        title: "CEO & Desarrollador Full stack",
        company: "JEG Dev Studios",
        date: "20 / mayo / 2024 - Actualidad",
        description: "Liderazgo y desarrollo integral de proyectos full-stack. Responsable del desarrollo frontend con React/Next.js, backend con Node.js, y la implementación de estrategias SEO y marketing digital."
    }
]

export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
    github: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "CalculFisc",
        description: "Diseño y desarrollo de la plataforma web de CalculFisc, una aplicación web que permite a los usuarios calcular impuestos, administrar sus nóminas, verificar su salario real despues de impuestos y previsualizar facturas para personas fisicas en el regimen RESICO.",
        tech: ["Next", "TypeScript", "Tailwind CSS"],
        image: `${ASSETS_URL}/projects-img/CalculFisc.webp`,
        link: "https://www.calculfisc.com",
        github: "https://github.com/JhonEG-17/CalculFisc-Web"
    },
    {
        id: 2,
        title: "JEG Dev Studios WEB",
        description: "Sitio web corporativo full-stack con frontend en React/Next.js y backend en Node.js/Express. Integra Blogger API y Firebase, aplicando estrategias avanzadas de SEO on-page y optimización de rendimiento. Desplegado en Vercel y Render.",
        tech: ["Next", "TypeScript", "Tailwind CSS"],
        image: `${ASSETS_URL}/projects-img/JEGDEVSTUDIOS.webp`,
        link: "https://www.jegdevstudios.com",
        github: "https://github.com/JhonEG-17/jeg-dev-studios-site",
    },
    {
        id: 8,
        title: "Liverpool Shop Clone",
        description: "Clon de alta fidelidad de la página de Liverpool, enfocado en replicar y mejorar la UX/UI. Demuestra mi capacidad para construir componentes complejos y responsivos con React, Vite y TypeScript, utilizando Tailwind CSS para la maquetación avanzada.",
        image: `${ASSETS_URL}/projects-img/liverpool-shope-clone.webp`,
        tech: ["React", "TypeScript", "Tailwind CSS"],
        link: "https://liverpool-shop-clone.vercel.app/",
        github: "https://github.com/JhonEG-17/liverpool-shop-clone",
    }
]

export const certifications = [
    "Java paa principiantes",
    "Redes Neuronales desde cero: Un enfoque practico y fácil de entender",
    "React para principiantes",
    "Diseño accesible e inclusivo",
    "React en acción: De cero a experto en Desarrollo Front End",
    "CSS Avanzado",
    "Python",
    "QA Desde cero: Principios",
    "Java paa principiantes",
    "Bases de datos con un café",
    "HTML esencial",
    "Machine Learning con un café",
    "BD Relacionales con MySQL",
    "HTML y CSS desde cero",
    "Introducción a Git y GitHub",
    "C++ Esencial",
    "Curs de iniciación al desarrollo con IA",
]