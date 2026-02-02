import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { t, isTransitioning } = useLanguage();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay prevented by browser");
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <motion.video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <source src="/videos/hero-burger.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        {/* Dark Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Additional vignette effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 0%, hsl(var(--background) / 0.4) 100%)"
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
            top: "10%",
            right: "10%",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)",
            bottom: "20%",
            left: "5%",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          {/* Text Content */}
          <motion.div
            className={`max-w-4xl transition-all duration-200 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.p
              className="text-primary uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {t("hero.tagline")}
            </motion.p>

            <motion.h1
              className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-gradient-golden text-shadow-glow">{t("hero.title1")}</span>
              <br />
              <span className="text-foreground drop-shadow-2xl">{t("hero.title2")}</span>
            </motion.h1>
            {/* SEO H2 - hidden visually but readable by search engines */}
            <h2 className="sr-only">Burger California - California Burger Premium West Coast</h2>

            <motion.p
              className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.a
                href="https://wa.me/6282145997006"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-4 bg-gradient-golden text-primary-foreground rounded-full font-bold text-lg uppercase tracking-wider overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{t("hero.orderNow")}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 glow-golden-intense opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                href="#menu"
                className="group px-10 py-4 border-2 border-primary/60 text-primary rounded-full font-bold text-lg uppercase tracking-wider hover:border-primary hover:bg-primary/10 transition-all duration-300 neon-border backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("hero.viewMenu")}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2 backdrop-blur-sm"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
