import { motion } from "framer-motion";
import BurningLogo from "./BurningLogo";
import { useLanguage } from "@/contexts/LanguageContext";

const LoadingScreen = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Fire Particles Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating fire particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? "#ff6b35" : i % 3 === 1 ? "#f7931e" : "#ffd700"
              }, transparent)`,
              left: `${15 + Math.random() * 70}%`,
              bottom: "30%",
            }}
            animate={{
              y: [0, -200 - Math.random() * 200],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Logo Container with Fire Effect */}
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <BurningLogo size="lg" alt="California Burger - Premium West Coast Burgers" />
      </motion.div>

      {/* Loading Bar */}
      <motion.div
        className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #ff6b35, #f7931e, #ffd700, #f7931e, #ff6b35)",
            backgroundSize: "200% 100%",
          }}
          initial={{ width: "0%" }}
          animate={{ 
            width: "100%",
            backgroundPosition: ["0% 0%", "100% 0%"],
          }}
          transition={{ 
            width: { duration: 2, ease: "easeInOut" },
            backgroundPosition: { duration: 1, repeat: Infinity, ease: "linear" },
          }}
        />
      </motion.div>

      {/* Loading Text */}
      <motion.p
        className="mt-6 text-white/70 text-sm tracking-[0.4em] uppercase font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {t("loading.text")}
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
