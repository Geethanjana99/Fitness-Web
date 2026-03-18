import { useEffect, useState } from 'react';
import {
  SunIcon,
  MoonIcon,
  MenuIcon,
  XIcon,
  FacebookIcon,
  InstagramIcon } from
'lucide-react';
interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}
export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['hero', 'about', 'services', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'HOME',
    href: '#hero'
  },
  {
    name: 'ABOUT',
    href: '#about'
  },
  {
    name: 'SERVICES',
    href: '#services'
  },
  {
    name: 'CONTACT',
    href: '#contact'
  }];

  return (
    <nav
      className={`fixed top-0 z-50 transition-all duration-500 ${isScrolled ? 'left-4 right-4 md:left-8 md:right-8 mt-4 liquid-glass py-3 rounded-2xl' : 'left-0 right-0 bg-transparent py-6 w-full'}`}>
      
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        <a href="#hero" className="flex items-center gap-2 z-50">
          <img src="/Logo.png" alt="Logo" className="h-10 w-auto object-contain" />
          <span className="font-heading font-bold text-2xl tracking-wider text-foreground">
            FITNESS
          </span>
          <span className="font-heading font-bold text-2xl tracking-wider text-gold">
            SPORTS CENTER
          </span>
        </a>

        
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) =>
            <li key={link.name} className="relative flex flex-col group">
                <a
                href={link.href}
                className={`font-heading text-sm uppercase tracking-wider transition-colors hover:text-gold pb-1 ${activeSection === link.href.substring(1) ? 'text-gold font-bold' : 'text-foreground'}`}>
                
                  {link.name}
                </a>
                
                <div
                className={`h-0.5 rounded-full transition-all duration-300 ${activeSection === link.href.substring(1) ? 'bg-gold w-full' : 'bg-transparent w-0 group-hover:w-full group-hover:bg-gold/50'}`} />
              
              </li>
            )}
          </ul>

          <div className="flex items-center gap-3 border-l border-border/30 pl-6">
            <button
              onClick={toggleTheme}
              className="rounded-full bg-white/10 hover:bg-gold/20 p-2.5 transition-all text-foreground"
              aria-label="Toggle theme">
              
              {isDark ?
              <SunIcon className="w-4 h-4" /> :

              <MoonIcon className="w-4 h-4" />
              }
            </button>
            <a
              href="#"
              className="rounded-full bg-white/10 hover:bg-gold/20 p-2.5 transition-all text-foreground hover:text-gold">
              
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="rounded-full bg-white/10 hover:bg-gold/20 p-2.5 transition-all text-foreground hover:text-gold">
              
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        
        <div className="md:hidden flex items-center gap-3 z-50">
          <button
            onClick={toggleTheme}
            className="rounded-full bg-white/10 hover:bg-gold/20 p-2.5 transition-all text-foreground"
            aria-label="Toggle theme">
            
            {isDark ?
            <SunIcon className="w-4 h-4" /> :

            <MoonIcon className="w-4 h-4" />
            }
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-full bg-white/10 hover:bg-gold/20 p-2.5 transition-all text-foreground">
            
            {isMobileMenuOpen ?
            <XIcon className="w-5 h-5" /> :

            <MenuIcon className="w-5 h-5" />
            }
          </button>
        </div>

        
        <div
          className={`fixed inset-0 backdrop-blur-xl bg-black/90 z-40 flex flex-col items-center justify-center transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) =>
            <li key={link.name} className="flex flex-col items-center">
                <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-heading text-2xl uppercase tracking-wider transition-colors hover:text-gold pb-2 ${activeSection === link.href.substring(1) ? 'text-gold font-bold' : 'text-white'}`}>
                
                  {link.name}
                </a>
                <div
                className={`h-1 rounded-full transition-all duration-300 ${activeSection === link.href.substring(1) ? 'bg-gold w-12' : 'bg-transparent w-0'}`} />
              
              </li>
            )}
          </ul>
          <div className="flex items-center gap-6 mt-12">
            <a
              href="#"
              className="rounded-full bg-white/10 hover:bg-gold/20 p-3 transition-all text-white hover:text-gold">
              
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="rounded-full bg-white/10 hover:bg-gold/20 p-3 transition-all text-white hover:text-gold">
              
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>);

}