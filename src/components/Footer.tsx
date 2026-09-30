import { Link } from 'react-router-dom';
import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-paper/5 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="font-serif text-xl text-paper hover:text-gold transition-colors duration-300">
              subhrajit<span className="text-gold">.</span>pro
            </Link>
            <p className="mt-4 text-sm text-paper/50 leading-relaxed max-w-xs">
              I build systems that automate operations, launch products, and get businesses selling online — end to end, not prototypes.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-ultra-wide text-paper/40 mb-4">Navigate</p>
            <div className="flex flex-col gap-3">
              <Link to="/work" className="text-sm text-paper/70 hover:text-gold transition-colors duration-300">Work</Link>
              <Link to="/services" className="text-sm text-paper/70 hover:text-gold transition-colors duration-300">Services</Link>
              <Link to="/about" className="text-sm text-paper/70 hover:text-gold transition-colors duration-300">About</Link>
              <Link to="/contact" className="text-sm text-paper/70 hover:text-gold transition-colors duration-300">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-ultra-wide text-paper/40 mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@subhrajit.pro" className="inline-flex items-center gap-2 text-sm text-paper/70 hover:text-gold transition-colors duration-300">
                <Mail size={16} /> hello@subhrajit.pro
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-paper/70 hover:text-gold transition-colors duration-300">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-paper/5 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-paper/30">© {new Date().getFullYear()} Subhrajit. All rights reserved.</p>
          <p className="text-xs text-paper/30">Built with intention.</p>
        </div>
      </div>
    </footer>
  );
}
