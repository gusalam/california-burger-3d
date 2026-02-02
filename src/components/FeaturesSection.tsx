import { motion } from "framer-motion";
import { Flame, Leaf, Award, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
  const { t, isTransitioning } = useLanguage();

  const features = [
    {
      icon: Flame,
      titleKey: "features.premium.title",
      descKey: "features.premium.desc",
    },
    {
      icon: Leaf,
      titleKey: "features.fresh.title",
      descKey: "features.fresh.desc",
    },
    {
      icon: Award,
      titleKey: "features.award.title",
      descKey: "features.award.desc",
    },
    {
      icon: Clock,
      titleKey: "features.fast.title",
      descKey: "features.fast.desc",
    },
  ];

  return (
    <section id="about" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--primary)) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, hsl(var(--secondary)) 0%, transparent 50%)`,
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
            {t("features.subtitle")}
          </motion.p>
          <motion.h2
            className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {t("features.title1")} <span className="text-gradient-golden">{t("features.title2")}</span>
          </motion.h2>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="mb-16 relative group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Glow Effect Background */}
          <div className="absolute -inset-1 bg-gradient-golden rounded-2xl opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500" />
          
          {/* Video Container with Aspect Ratio */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_rgba(255,179,71,0.3)] group-hover:shadow-[0_0_50px_rgba(255,179,71,0.5)] transition-shadow duration-500">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/california-difference.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-200 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-golden" />

              {/* Icon */}
              <motion.div
                className="w-16 h-16 rounded-xl bg-gradient-golden flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              <h3 className="font-display text-2xl text-foreground mb-3">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(feature.descKey)}
              </p>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-golden transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
