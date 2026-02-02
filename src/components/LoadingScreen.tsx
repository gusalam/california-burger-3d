import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
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
      <div className="relative mb-8">
        {/* Outer glow ring - fire effect */}
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255,107,53,0.4) 0%, rgba(247,147,30,0.2) 40%, transparent 70%)",
            width: 350,
            height: 350,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.15, 1.05, 1.2, 1],
            opacity: [0.6, 0.9, 0.7, 0.85, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary inner glow */}
        <motion.div
          className="absolute rounded-full blur-2xl"
          style={{
            background: "radial-gradient(circle, rgba(255,215,0,0.5) 0%, rgba(255,107,53,0.3) 50%, transparent 70%)",
            width: 250,
            height: 250,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1.1, 1, 1.15, 1.05, 1.1],
            opacity: [0.7, 0.5, 0.8, 0.6, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Fire flames around logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: 20,
                height: 60,
                background: `linear-gradient(to top, 
                  ${i % 2 === 0 ? "#ff6b35" : "#f7931e"}, 
                  ${i % 2 === 0 ? "#ffd700" : "#ff6b35"}, 
                  transparent)`,
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                left: "50%",
                bottom: "50%",
                transformOrigin: "bottom center",
                transform: `translateX(-50%) rotate(${i * 45}deg) translateY(80px)`,
                filter: "blur(3px)",
              }}
              animate={{
                scaleY: [0.8, 1.2, 0.9, 1.1, 0.8],
                scaleX: [1, 0.8, 1.1, 0.9, 1],
                opacity: [0.6, 0.9, 0.7, 0.85, 0.6],
              }}
              transition={{
                duration: 1.5 + Math.random() * 0.5,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Main Logo */}
        <motion.img
          src={logo}
          alt="California Burger - Premium West Coast Burgers"
          className="relative z-10 h-40 md:h-52 w-auto drop-shadow-2xl"
          style={{
            filter: "drop-shadow(0 0 30px rgba(255,107,53,0.5)) drop-shadow(0 0 60px rgba(247,147,30,0.3))",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Subtle pulse on logo */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,215,0,0.2) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

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
