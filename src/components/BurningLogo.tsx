import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

interface BurningLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  alt?: string;
}

const BurningLogo = ({ className = "", size = "md", alt = "California Burger" }: BurningLogoProps) => {
  const sizeClasses = {
    sm: "h-10 md:h-12",
    md: "h-16 md:h-20",
    lg: "h-40 md:h-52",
  };

  const flameCount = size === "lg" ? 12 : size === "md" ? 8 : 6;
  const emberCount = size === "lg" ? 10 : size === "md" ? 6 : 4;
  const flameSize = size === "lg" ? { width: 16, height: 50 } : size === "md" ? { width: 10, height: 30 } : { width: 6, height: 20 };
  const glowSize = size === "lg" ? 200 : size === "md" ? 100 : 60;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Outer fire glow */}
      <motion.div
        className="absolute rounded-full blur-2xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,107,53,0.4) 0%, rgba(247,147,30,0.2) 50%, transparent 70%)",
          width: glowSize,
          height: glowSize,
        }}
        animate={{
          scale: [1, 1.2, 1.1, 1.15, 1],
          opacity: [0.5, 0.8, 0.6, 0.7, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Inner golden glow */}
      <motion.div
        className="absolute rounded-full blur-xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,215,0,0.5) 0%, rgba(255,107,53,0.3) 50%, transparent 70%)",
          width: glowSize * 0.7,
          height: glowSize * 0.7,
        }}
        animate={{
          scale: [1.1, 1, 1.15, 1.05, 1.1],
          opacity: [0.6, 0.4, 0.7, 0.5, 0.6],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dancing flames around logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(flameCount)].map((_, i) => {
          const angle = (i * 360) / flameCount;
          const distance = size === "lg" ? 70 : size === "md" ? 40 : 25;
          
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: flameSize.width,
                height: flameSize.height,
                background: `linear-gradient(to top, 
                  ${i % 3 === 0 ? "#ff6b35" : i % 3 === 1 ? "#f7931e" : "#ffd700"}, 
                  ${i % 3 === 0 ? "#ffd700" : "#ff6b35"}, 
                  transparent)`,
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                filter: "blur(2px)",
                transform: `rotate(${angle}deg) translateY(-${distance}px)`,
                transformOrigin: "center center",
              }}
              animate={{
                scaleY: [0.7, 1.3, 0.8, 1.2, 0.7],
                scaleX: [1, 0.8, 1.1, 0.9, 1],
                opacity: [0.5, 0.9, 0.6, 0.85, 0.5],
              }}
              transition={{
                duration: 1.2 + Math.random() * 0.5,
                repeat: Infinity,
                delay: i * 0.08,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Floating embers/sparks */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
        {[...Array(emberCount)].map((_, i) => (
          <motion.div
            key={`ember-${i}`}
            className="absolute rounded-full"
            style={{
              width: 3 + Math.random() * 3,
              height: 3 + Math.random() * 3,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? "#ff6b35" : i % 3 === 1 ? "#ffd700" : "#f7931e"
              }, transparent)`,
              left: `${40 + Math.random() * 20}%`,
              top: "50%",
            }}
            animate={{
              y: [0, -60 - Math.random() * 40],
              x: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 50],
              opacity: [0, 1, 0.8, 0],
              scale: [0.5, 1.2, 0.8, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 1.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Main Logo with fire glow effect */}
      <motion.img
        src={logo}
        alt={alt}
        className={`relative z-10 w-auto ${sizeClasses[size]}`}
        style={{
          filter: `drop-shadow(0 0 ${size === "lg" ? "30px" : size === "md" ? "15px" : "8px"} rgba(255,107,53,0.6)) 
                   drop-shadow(0 0 ${size === "lg" ? "60px" : size === "md" ? "30px" : "15px"} rgba(247,147,30,0.4))`,
        }}
        animate={{
          filter: [
            `drop-shadow(0 0 ${size === "lg" ? "30px" : size === "md" ? "15px" : "8px"} rgba(255,107,53,0.6)) drop-shadow(0 0 ${size === "lg" ? "60px" : size === "md" ? "30px" : "15px"} rgba(247,147,30,0.4))`,
            `drop-shadow(0 0 ${size === "lg" ? "40px" : size === "md" ? "20px" : "12px"} rgba(255,107,53,0.8)) drop-shadow(0 0 ${size === "lg" ? "80px" : size === "md" ? "40px" : "20px"} rgba(247,147,30,0.6))`,
            `drop-shadow(0 0 ${size === "lg" ? "30px" : size === "md" ? "15px" : "8px"} rgba(255,107,53,0.6)) drop-shadow(0 0 ${size === "lg" ? "60px" : size === "md" ? "30px" : "15px"} rgba(247,147,30,0.4))`,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle pulse overlay */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default BurningLogo;
