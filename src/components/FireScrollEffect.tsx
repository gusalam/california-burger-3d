import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FireScrollEffect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform scroll position to opacity and scale
  const fireOpacity = useTransform(scrollY, [0, 100, 300], [0, 0.8, 0.4]);
  const fireScale = useTransform(scrollY, [0, 200], [0.8, 1.2]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Left side fire effect */}
      <motion.div
        className="absolute left-0 bottom-0 w-32 h-full"
        style={{ opacity: fireOpacity }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`left-${i}`}
            className="absolute bottom-0 left-0"
            style={{
              width: 40 + Math.random() * 30,
              height: 100 + Math.random() * 150,
              background: `linear-gradient(to top, 
                rgba(255, 107, 53, 0.6) 0%, 
                rgba(247, 147, 30, 0.4) 30%, 
                rgba(255, 215, 0, 0.2) 60%, 
                transparent 100%)`,
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              filter: "blur(8px)",
              left: i * 15,
              transformOrigin: "bottom center",
            }}
            animate={{
              scaleY: [0.8, 1.2, 0.9, 1.1, 0.8],
              scaleX: [1, 0.9, 1.1, 0.95, 1],
              x: [0, -5, 3, -2, 0],
              rotate: [0, -3, 2, -1, 0],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Floating embers - left */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`ember-left-${i}`}
            className="absolute rounded-full"
            style={{
              width: 4 + Math.random() * 4,
              height: 4 + Math.random() * 4,
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? "#ff6b35" : "#ffd700"
              }, transparent)`,
              left: 10 + Math.random() * 40,
              bottom: 50,
            }}
            animate={{
              y: [0, -300 - Math.random() * 200],
              x: [0, 20 + Math.random() * 30],
              opacity: [0, 1, 0.8, 0],
              scale: [0.5, 1, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>

      {/* Right side fire effect */}
      <motion.div
        className="absolute right-0 bottom-0 w-32 h-full"
        style={{ opacity: fireOpacity }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`right-${i}`}
            className="absolute bottom-0 right-0"
            style={{
              width: 40 + Math.random() * 30,
              height: 100 + Math.random() * 150,
              background: `linear-gradient(to top, 
                rgba(255, 107, 53, 0.6) 0%, 
                rgba(247, 147, 30, 0.4) 30%, 
                rgba(255, 215, 0, 0.2) 60%, 
                transparent 100%)`,
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              filter: "blur(8px)",
              right: i * 15,
              transformOrigin: "bottom center",
            }}
            animate={{
              scaleY: [0.9, 1.1, 0.8, 1.2, 0.9],
              scaleX: [1, 1.1, 0.9, 1.05, 1],
              x: [0, 5, -3, 2, 0],
              rotate: [0, 3, -2, 1, 0],
            }}
            transition={{
              duration: 2.2 + Math.random(),
              repeat: Infinity,
              delay: i * 0.12,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating embers - right */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`ember-right-${i}`}
            className="absolute rounded-full"
            style={{
              width: 4 + Math.random() * 4,
              height: 4 + Math.random() * 4,
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? "#f7931e" : "#ff6b35"
              }, transparent)`,
              right: 10 + Math.random() * 40,
              bottom: 50,
            }}
            animate={{
              y: [0, -300 - Math.random() * 200],
              x: [0, -20 - Math.random() * 30],
              opacity: [0, 1, 0.8, 0],
              scale: [0.5, 1, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>

      {/* Bottom glow effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{
          background: "linear-gradient(to top, rgba(255, 107, 53, 0.15), transparent)",
          opacity: fireOpacity,
          scale: fireScale,
        }}
      />

      {/* Subtle vignette fire glow on edges */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at bottom left, rgba(255, 107, 53, 0.1) 0%, transparent 40%),
            radial-gradient(ellipse at bottom right, rgba(247, 147, 30, 0.1) 0%, transparent 40%)
          `,
          opacity: fireOpacity,
        }}
      />
    </div>
  );
};

export default FireScrollEffect;
