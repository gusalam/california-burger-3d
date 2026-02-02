import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useCallback } from "react";
import logo from "@/assets/logo.png";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { key: "home", nameKey: "nav.home", href: "#home" },
    { key: "menu", nameKey: "nav.menu", href: "#menu" },
    { key: "about", nameKey: "nav.about", href: "#about" },
    { key: "contact", nameKey: "nav.contact", href: "#contact" },
  ];

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Close menu first
    setIsOpen(false);
    
    // Small delay to allow menu close animation
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }, 100);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 glass-dark border-b border-primary/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 hover:scale-105 transition-transform z-50"
          >
            <img src={logo} alt="California Burger - Burger California Premium" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.key}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-foreground/80 hover:text-primary transition-colors text-sm uppercase tracking-widest font-medium cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {t(link.nameKey)}
              </motion.a>
            ))}
            
            <LanguageToggle />
            
            <motion.a
              href="https://share.google/cR2bPp78xYNP194xm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-golden text-primary-foreground rounded-full font-semibold text-sm uppercase tracking-wider glow-golden hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("nav.order")}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3 z-50">
            <LanguageToggle />
            <button
              className="text-foreground p-2 relative z-50"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              type="button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute left-0 right-0 top-full bg-background border-b border-primary/10 shadow-xl z-50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col gap-2 px-4 py-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.key}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-foreground/80 hover:text-primary active:text-primary transition-colors text-lg uppercase tracking-widest font-medium py-4 px-4 rounded-lg hover:bg-primary/10 active:bg-primary/20 cursor-pointer touch-manipulation"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {t(link.nameKey)}
                  </motion.a>
                ))}
                <motion.a
                  href="https://share.google/cR2bPp78xYNP194xm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-gradient-golden text-primary-foreground rounded-full font-semibold text-center uppercase tracking-wider glow-golden mt-4 touch-manipulation"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setIsOpen(false)}
                >
                  {t("nav.order")}
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
