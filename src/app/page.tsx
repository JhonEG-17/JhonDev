// src/app/page.tsx
"use client";

// Imports Hooks
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { ChevronDown, Terminal, Database, Download } from "lucide-react";
import SpaceBackground from "@/components/Backgrounds/SpaceBackground";
import ProjectCard from "@/components/Cards/ProjectCard";
import {
  profile,
  experience,
  projects,
  certifications,
} from "@/data/portfolio";

// Imports components
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

// Variantes de animación para reutilizar (Efecto Cascada)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Cada hijo aparece 0.2s después del anterior
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <>
      {/* Barra de navegación superior estilo "HUD" */}
      <Header profile={profile} />

      <main className="min-h-screen text-slate-200 font-sans selection:bg-neon-blue selection:text-black overflow-x-hidden">
        <SpaceBackground />

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col gap-40">
          {/* HERO SECTION MEJORADO */}
          <section
            id="mision"
            className="min-h-[90vh] flex items-center relative py-20" // Aumenté altura y padding
          >
            {/* Elemento decorativo de fondo (Ajustado para no estorbar) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/20 blur-[120px] rounded-full -z-1 animate-pulse-slow" />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* COLUMNA IZQUIERDA: TEXTO */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="space-y-3 text-center lg:text-left order-2 lg:order-1" // En móvil va segundo (opcional), en PC primero
              >
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-xs font-mono tracking-wider mx-auto lg:mx-0"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                  </span>
                  DISPONIBLE PARA DESPEGUE
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight"
                >
                  FULL STACK <br />
                  <span className="relative inline-block">
                    <span className="relative z-1 text-white drop-shadow-[0_0_15px_rgba(188,19,254,0.8)]">
                      DEVELOPER
                    </span>
                    <svg
                      className="absolute -bottom-2 w-full h-3 text-neon-purple"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5 Q 50 10 100 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="max-w-2xl text-lg md:text-xl text-slate-400 border-l-0 lg:border-l-2 border-neon-cyan lg:pl-6 py-2 mx-auto lg:mx-0"
                >
                  {profile.bio}
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
                >
                  <Link
                    href="#proyectos"
                    className="group relative px-8 py-4 bg-white text-black font-bold text-sm tracking-wider hover:bg-neon-cyan transition-all duration-300 clip-path-slant"
                  >
                    EXPLORAR SISTEMAS
                    <div className="absolute inset-0 border-2 border-white translate-x-1 translate-y-1 -z-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                  </Link>

                  <Link
                    href={profile.socialLinks.github}
                    target="_blank"
                    className="px-8 py-4 border border-slate-700 text-slate-300 font-bold text-sm tracking-wider bg-transparent hover:border-purple-500 hover:text-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                  >
                    GITHUB_ACCESS
                  </Link>

                  <Link
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    className="px-8 py-4 border border-slate-700 text-slate-300 font-bold text-sm tracking-wider bg-transparent hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                  >
                    LinkedIn
                  </Link>

                  <Link
                    href={profile.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="CV_Jhonatan_Espinal.pdf"
                    className="flex gap-3 px-8 py-4 border border-slate-700 text-slate-300 font-bold text-sm tracking-wider bg-transparent hover:border-blue-500 hover:text-white hover:bg-blue-500/10 transition-all duration-300"
                  >
                    <Download size={18} />
                    DESCARGAR CV
                  </Link>
                </motion.div>
              </motion.div>

              {/* COLUMNA DERECHA: IMAGEN (Perfil del Piloto) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
              >
                {/* Contenedor relativo para efectos */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
                  {/* Anillo exterior rotatorio (Decoración) */}
                  <div className="absolute inset-0 rounded-full border border-neon-cyan/30 border-dashed animate-[spin_10s_linear_infinite]" />

                  {/* Glow trasero */}
                  <div className="absolute inset-4 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow" />

                  {/* Marco de la imagen con animación de flotación */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 bg-gray-400 border-slate-800 shadow-[0_0_40px_rgba(0,243,255,0.3)] animate-float">
                    {/* Capa de tinte espacial (opcional, para integrar mejor la foto) */}
                    <div className="absolute inset-0 bg-neon-purple/10 mix-blend-overlay z-1 pointer-events-none" />

                    <Image
                      src={profile.photoUrl}
                      alt={profile.name}
                      fill
                      className="object-cover object-center transform transition-transform hover:scale-110 duration-700"
                      priority // Carga prioritaria para el LCP
                    />
                  </div>

                  {/* Badge flotante decorativo */}
                  <div className="absolute bottom-4 -left-4 bg-space-900/90 border border-neon-cyan p-3 rounded-lg backdrop-blur-md shadow-lg animate-bounce hidden md:block">
                    <div className="text-xs text-slate-400 font-mono">
                      STATUS
                    </div>
                    <div className="text-neon-cyan font-bold">ONLINE <span className="text-green-400">●</span></div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
            >
              <ChevronDown size={24} />
            </motion.div>
          </section>

          {/* PROYECTOS (Grid Holográfico) */}
          <section id="proyectos">
            <div className="flex items-end gap-4 mb-16 border-b border-slate-800 pb-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Proyectos
              </h2>
              <span className="text-neon-blue font-mono text-sm mb-2">
                / SELECTED_WORKS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projects.map((proj, i) => (
                <ProjectCard key={proj.id} projects={proj} index={i} />
              ))}
            </div>
          </section>

          {/* EXPERIENCIA (Diseño Data Stream) */}
          <section
            id="experiencia"
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="md:col-span-1">
              <h2 className="text-4xl font-bold text-white mb-4 sticky top-32">
                Historial <br />
                <span className="text-slate-500 text-2xl">de Vuelo</span>
              </h2>
            </div>

            <div className="md:col-span-2 space-y-12 relative">
              {/* Línea conectora vertical */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-neon-blue via-blue-300 to-transparent md:left-[-20px]" />

              {experience.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-8 md:pl-0"
                >
                  {/* Punto brillante */}
                  <div className="absolute left-[-4px] md:left-[-24px] top-2 w-2 h-2 rounded-full bg-neon-blue shadow-[0_0_10px_#3B82F6]"></div>

                  <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                  <div className="flex items-center gap-3 text-sm font-mono text-neon-blue mb-4 mt-1">
                    <span>{job.company}</span>
                    <span className="text-slate-600">|</span>
                    <span>{job.date}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-lg bg-slate-900/30 p-4 rounded-lg border-l-2 border-slate-700">
                    {job.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CERTIFICACIONES (Estilo Skill Matrix) */}
          <section className="bg-space-800/30 rounded-3xl p-8 md:p-12 border border-slate-800 relative overflow-hidden">
            {/* Fondo decorativo interno */}
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50" />

            <div className="flex flex-col md:flex-row gap-12 items-start relative z-1">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Credenciales & <br />
                  Tecnología
                </h2>
                <p className="text-slate-400 mb-6">
                  Arsenal técnico adquirido a través de certificaciones y
                  despliegues en producción.
                </p>

                {/* Stats decorativos */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-space-950 rounded-lg border border-slate-800">
                    <Terminal className="text-neon-blue mb-2" size={20} />
                    <div className="text-2xl font-bold text-white">
                      {certifications.length}+
                    </div>
                    <div className="text-xs text-slate-500 font-mono">
                      CERTIFICADOS
                    </div>
                  </div>
                  <div className="p-4 bg-space-950 rounded-lg border border-slate-800">
                    <Database className="text-neon-purple mb-2" size={20} />
                    <div className="text-2xl font-bold text-white">2+</div>
                    <div className="text-xs text-slate-500 font-mono">
                      AÑOS EXP
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded bg-space-900 border border-slate-800 hover:border-slate-600 transition-colors"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-neon-green/80"></div>
                      <span className="text-sm text-slate-300 font-medium truncate">
                        {cert}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
