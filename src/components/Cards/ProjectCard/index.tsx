import { Project } from "@/data/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import React from "react";

interface ProjectCardProps {
  projects: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projects, index }) => {
  const { id, title, description, tech, image, link, github } = projects;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative bg-space-800/50 rounded-2xl border border-slate-800 hover:border-neon-blue/50 overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,243,255,0.1)]"
    >
      {/* Overlay gradiente al hacer hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-1" />

      {/* Imagen del proyecto */}
      <div className="h-64 bg-slate-700 w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="relative z-2 p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors">
            {title}
          </h3>
          <div className="flex gap-3">
            <Link
              href={github}
              target="_blank"
              className="p-2 bg-slate-900 rounded-full hover:bg-blue-900 hover:text-white transition-colors"
            >
              <Github size={18} />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="p-2 bg-slate-900 rounded-full hover:bg-purple-900 hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
            </Link>
          </div>
        </div>

        <p className="text-slate-400 mb-6 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-neon-blue border border-neon-blue/20 bg-neon-blue/5 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
