interface NavBarProps {
  profile: {
    name: string;
  };
}

export default function NavBar({ profile }: NavBarProps) {
  return (
    <nav className="w-full px-6 py-4 backdrop-blur-md border-b border-white/5 flex justify-between items-center">
      <div className="text-neon-blue font-mono text-xs tracking-[0.2em] animate-pulse">
        SYS.ONLINE // {profile.name.toUpperCase()}
      </div>
      <div className="hidden md:flex gap-6 text-xs font-mono text-slate-400">
        <a href="#mision" className="hover:text-white transition-colors">
          [01] MISIÓN
        </a>
        <a href="#proyectos" className="hover:text-white transition-colors">
          [02] PROYECTOS
        </a>
        <a href="#experiencia" className="hover:text-white transition-colors">
          [03] BITÁCORA
        </a>
      </div>
    </nav>
  );
}
