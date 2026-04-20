import { Logo } from './Logo';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-xl py-3' : 'bg-white shadow-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className={`transition-transform duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
            <Logo />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-[#FF6B35] transition-colors relative group"
              style={{ fontWeight: 600 }}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#FFA500] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-[#FF6B35] transition-colors relative group"
              style={{ fontWeight: 600 }}
            >
              Menu
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#FFA500] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('party')}
              className="text-gray-700 hover:text-[#FF6B35] transition-colors relative group"
              style={{ fontWeight: 600 }}
            >
              Party Area
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#FFA500] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#FF6B35] transition-colors relative group"
              style={{ fontWeight: 600 }}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#FFA500] group-hover:w-full transition-all duration-300"></span>
            </button>
            <a
              href="tel:+919876543210"
              className="bg-gradient-to-r from-[#FF6B35] to-[#FFA500] text-white px-6 py-2.5 rounded-full hover:from-[#FF8555] hover:to-[#FFB84D] transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
              style={{ fontWeight: 600 }}
            >
              <Phone size={18} />
              Call Now
            </a>
          </nav>

          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-6 flex flex-col gap-4 pb-4 border-t border-gray-200 pt-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#FF6B35] transition-colors text-left py-2" style={{ fontWeight: 600 }}>
              Home
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-[#FF6B35] transition-colors text-left py-2" style={{ fontWeight: 600 }}>
              Menu
            </button>
            <button onClick={() => scrollToSection('party')} className="text-gray-700 hover:text-[#FF6B35] transition-colors text-left py-2" style={{ fontWeight: 600 }}>
              Party Area
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#FF6B35] transition-colors text-left py-2" style={{ fontWeight: 600 }}>
              Contact
            </button>
            <a
              href="tel:+919876543210"
              className="bg-gradient-to-r from-[#FF6B35] to-[#FFA500] text-white px-6 py-3 rounded-full text-center hover:from-[#FF8555] hover:to-[#FFB84D] transition-all flex items-center justify-center gap-2"
              style={{ fontWeight: 600 }}
            >
              <Phone size={18} />
              Call Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
