import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t, isTransitioning } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className={`text-center mb-16 transition-all duration-200 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t("contact.subtitle")}
          </motion.p>
          <motion.h2
            className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {t("contact.title1")} <span className="text-gradient-golden">{t("contact.title2")}</span>
          </motion.h2>
        </motion.div>

        <div className={`grid md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-200 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {/* Location Card */}
          <motion.a
            href="https://share.google/Bz8Fq6T1EMSc5PXeN"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <motion.div
              className="w-16 h-16 mx-auto rounded-xl bg-gradient-golden flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              whileHover={{ rotate: 10 }}
            >
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </motion.div>
            <h3 className="font-display text-2xl text-foreground mb-2">{t("contact.location")}</h3>
            <p className="text-muted-foreground mb-4">Google Maps</p>
            <span className="text-primary font-medium group-hover:underline">→</span>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            href="https://wa.me/6282145997006"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <motion.div
              className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              whileHover={{ rotate: 10 }}
            >
              <Phone className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="font-display text-2xl text-foreground mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-4">+62 821-4599-7006</p>
            <span className="text-green-500 font-medium group-hover:underline">Chat Now →</span>
          </motion.a>

          {/* Hours Card */}
          <motion.div
            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <motion.div
              className="w-16 h-16 mx-auto rounded-xl bg-gradient-red flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              whileHover={{ rotate: 10 }}
            >
              <Clock className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="font-display text-2xl text-foreground mb-2">{t("contact.hours")}</h3>
            <p className="text-primary font-bold text-lg">{t("contact.hoursValue")}</p>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          className={`mt-16 text-center transition-all duration-200 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6 uppercase tracking-widest text-sm">{t("contact.followUs")}</p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="https://www.instagram.com/california.official8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center hover:scale-110 transition-transform glow-golden"
              whileHover={{ y: -5, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href="https://www.tiktok.com/@california.official8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center hover:scale-110 transition-transform"
              whileHover={{ y: -5, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://youtube.com/@californiaburger8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center hover:scale-110 transition-transform"
              whileHover={{ y: -5, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
