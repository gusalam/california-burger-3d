import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FloatingWhatsApp = () => {
  const { t } = useLanguage();

  return (
    <motion.a
      href="https://wa.me/6282145997006?text=Hi,%20I%20want%20to%20order%20a%20burger!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse Ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Button */}
      <motion.div
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <MessageCircle className="w-8 h-8 text-white" fill="white" />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-card border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
        initial={{ x: 10 }}
        whileHover={{ x: 0 }}
      >
        <span className="text-foreground font-medium">{t("whatsapp.chat")}</span>
        <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-card border-y-4 border-y-transparent" />
      </motion.div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
