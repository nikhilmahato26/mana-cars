import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.jpeg" alt="Mana Cars Logo" className="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-mana-yellow/50" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-mana-yellow transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/917032343568"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-mana-dark hover:text-mana-yellow transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              7032343568
            </a>
            <a
              href="#attach-car"
              className="text-sm font-medium border border-mana-border px-4 py-2 rounded-full hover:bg-gray-50 transition-colors"
            >
              Attach Your Car
            </a>
            <a
              href="#book"
              className="bg-mana-yellow text-mana-dark px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-mana-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-mana-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-mana-yellow"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-mana-border my-2" />
              <a
                href="#attach-car"
                className="text-lg font-medium text-gray-800 hover:text-mana-yellow"
              >
                Attach Your Car
              </a>
              <a
                href="tel:+917032343568"
                className="text-lg font-medium text-gray-800 hover:text-mana-yellow flex items-center gap-2"
              >
                <Phone size={20} />
                7032343568
              </a>
              <a
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-mana-yellow text-mana-dark text-center py-3 rounded-xl font-bold mt-2"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
