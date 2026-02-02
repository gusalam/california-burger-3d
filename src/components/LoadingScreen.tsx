import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const LoadingScreen = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 3D Burger Loading Animation */}
      <div className="relative mb-8">
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
            width: 200,
            height: 200,
            marginLeft: -50,
            marginTop: -50,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Burger Stack Animation */}
        <div className="relative flex flex-col items-center">
          {/* Top Bun */}
          <motion.div
            className="w-24 h-8 rounded-t-full bg-gradient-to-b from-amber-600 to-amber-700"
            style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.3)" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          />

          {/* Lettuce */}
          <motion.div
            className="w-28 h-3 -mt-1"
            style={{
              background: "linear-gradient(90deg, #4ade80, #22c55e, #4ade80)",
              borderRadius: "50%",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
          />

          {/* Cheese */}
          <motion.div
            className="w-26 h-2"
            style={{
              background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
              borderRadius: "2px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />

          {/* Patty */}
          <motion.div
            className="w-24 h-5 rounded-sm"
            style={{
              background: "linear-gradient(180deg, #7c2d12, #451a03)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
            }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          />

          {/* Bottom Bun */}
          <motion.div
            className="w-24 h-6 rounded-b-lg"
            style={{
              background: "linear-gradient(180deg, #d97706, #b45309)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          />
        </div>
      </div>

      {/* Brand Logo */}
      <motion.img
        src={logo}
        alt="California Burger"
        className="h-24 md:h-32 w-auto mb-4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Loading Bar */}
      <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-golden"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>

      <motion.p
        className="mt-4 text-muted-foreground text-sm tracking-widest uppercase"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {t("loading.text")}
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
