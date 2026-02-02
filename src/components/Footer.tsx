import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Code } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, isTransitioning } = useLanguage();

  const navLinks = [
    { nameKey: "nav.home", href: "#home" },
    { nameKey: "nav.menu", href: "#menu" },
    { nameKey: "nav.about", href: "#about" },
    { nameKey: "nav.contact", href: "#contact" },
  ];

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-3 gap-12 mb-12 transition-all duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={logo} alt="California Burger" className="h-20 w-auto mb-4" />
            <p className="text-muted-foreground leading-relaxed">
              {t("footer.description")}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-xl text-foreground mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.nameKey}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(link.nameKey)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-xl text-foreground mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/6282145997006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={18} />
                  +62 821-4599-7006
                </a>
              </li>
              <li>
                <a
                  href="https://share.google/Bz8Fq6T1EMSc5PXeN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin size={18} />
                  Google Maps
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/california.official8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram size={18} />
                  @california.official8
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Copyright */}
        <motion.div
          className={`text-center text-muted-foreground text-sm transition-all duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} California Burger. {t("footer.rights")}</p>
          <p className="mt-2">
            {t("footer.madeWith")} <span className="text-secondary">♥</span> {t("footer.style")}
          </p>
          
          {/* Developer Credit */}
          <motion.a
            href="https://tretandevelopment.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-muted/50 hover:bg-muted border border-border hover:border-primary/30 rounded-full text-xs text-muted-foreground hover:text-primary transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code size={14} />
            <span>Developed by Tretan Development</span>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
