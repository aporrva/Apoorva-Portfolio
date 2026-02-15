import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
    { label: 'Resume', pdf: '/pdfFolder/apoorva rawat resume.pdf' } // Resume button
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold bg-gradient-to-r from-[#4F46E5] to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            AR
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id || item.pdf}
                onClick={() => {
                  if (item.id) scrollToSection(item.id);
                  else if (item.pdf) window.open(item.pdf, "_blank");
                }}
                className={`font-medium transition-colors ${
                  item.pdf
                    ? 'bg-gradient-to-r from-[#4F46E5] to-purple-600 text-white px-4 py-2 rounded-lg hover:scale-105 transform transition-transform'
                    : isScrolled
                    ? 'text-[#111827] hover:text-[#4F46E5]'
                    : 'text-gray-700 hover:text-[#4F46E5]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-[12px] hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#111827]" />
            ) : (
              <Menu className="w-6 h-6 text-[#111827]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-[16px] shadow-xl border border-gray-100 animate-in slide-in-from-top-5">
            <div className="flex flex-col gap-2 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id || item.pdf}
                  onClick={() => {
                    if (item.id) scrollToSection(item.id);
                    else if (item.pdf) window.open(item.pdf, "_blank");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-3 font-medium rounded-[12px] transition-all ${
                    item.pdf
                      ? 'bg-gradient-to-r from-[#4F46E5] to-purple-600 text-white hover:scale-105 transform transition-transform'
                      : 'text-[#111827] hover:bg-indigo-50 hover:text-[#4F46E5]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
