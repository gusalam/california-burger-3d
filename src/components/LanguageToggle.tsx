import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage, isTransitioning } = useLanguage();

  return (
    <motion.div
      className="flex items-center gap-1 p-1 bg-muted rounded-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 }}
    >
      <motion.div
        className={`transition-all duration-200 ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}
      >
        <div className="flex items-center gap-1">
          <Globe className="w-3.5 h-3.5 text-muted-foreground ml-2" />
          <button
            onClick={() => setLanguage("id")}
            className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              language === "id"
                ? "bg-gradient-golden text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            ID
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              language === "en"
                ? "bg-gradient-golden text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            EN
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LanguageToggle;
