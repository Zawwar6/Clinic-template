import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import Button from '../ui/Button';
import { navLinks } from '../../data/nav';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-soft' : ''
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? 'py-3.5' : 'py-5'
        }`}
      >
        <Logo />

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-[14.5px] font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-ink-soft hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:5551234567"
            className="flex items-center gap-2 text-[14.5px] font-medium text-ink-soft hover:text-ink"
          >
            <Phone size={16} strokeWidth={2} />
            (555) 123-4567
          </a>
          <Button to="/book-appointment" size="md">
            Book Appointment
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} strokeWidth={1.75} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-ink/40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-white px-7 py-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full text-ink"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={22} strokeWidth={1.75} />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block border-b border-border py-4 text-[18px] font-medium ${
                          isActive ? 'text-primary' : 'text-ink'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-4 pt-6">
                <a
                  href="tel:5551234567"
                  className="flex items-center gap-2 text-[15px] font-medium text-ink-soft"
                >
                  <Phone size={17} strokeWidth={2} />
                  (555) 123-4567
                </a>
                <Button to="/book-appointment" onClick={() => setMenuOpen(false)} className="w-full">
                  Book Appointment
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
