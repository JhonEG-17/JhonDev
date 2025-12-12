// Import Data
import { profile } from "@/data/portfolio";


export default function Footer() {
  return(
    <>
      {/* FOOTER */}
        <footer className="text-center text-white/50 text-sm font-mono py-10 border-t border-slate-800/50">
          <p>ESTACIÓN: CDMX, MÉXICO // TRANSMISIÓN FINALIZADA</p>
          <p className="mt-2"> by {profile.name} © {new Date().getFullYear()}</p>
        </footer>
    </>
  );
}