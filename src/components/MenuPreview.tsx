import { motion } from "framer-motion";
import { Star, Flame } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import burgerImg from "@/assets/menu/burger.jpg";
import tortillaImg from "@/assets/menu/tortilla.jpg";
import friesImg from "@/assets/menu/fries.jpg";
import spaghettiImg from "@/assets/menu/spaghetti.jpg";
import riceImg from "@/assets/menu/rice.jpg";

interface MenuItem {
  nameKey: string;
  price: number;
  bestSeller?: boolean;
}

interface MenuCategory {
  titleKey: string;
  image: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    titleKey: "category.burgers",
    image: burgerImg,
    items: [
      { nameKey: "menu.burger_beef", price: 28 },
      { nameKey: "menu.burger_double_beef", price: 37 },
      { nameKey: "menu.burger_beef_bacon", price: 40, bestSeller: true },
      { nameKey: "menu.burger_double_beef_cheese", price: 39, bestSeller: true },
      { nameKey: "menu.burger_double_cheese", price: 30 },
      { nameKey: "menu.burger_mozarella", price: 34 },
      { nameKey: "menu.burger_double_beef_mozarella", price: 44 },
      { nameKey: "menu.burger_double_beef_cheese_mozarella", price: 47 },
      { nameKey: "menu.burger_chicago", price: 39, bestSeller: true },
      { nameKey: "menu.burger_avocado", price: 31, bestSeller: true },
      { nameKey: "menu.burger_pineapple", price: 29 },
      { nameKey: "menu.burger_chicken", price: 25 },
      { nameKey: "menu.burger_spesial", price: 44 },
      { nameKey: "menu.burger_paket_lengkap", price: 56 },
    ],
  },
  {
    titleKey: "category.tortilla",
    image: tortillaImg,
    items: [
      { nameKey: "menu.beef_tortilla", price: 23, bestSeller: true },
      { nameKey: "menu.chicken_tortilla", price: 21 },
    ],
  },
  {
    titleKey: "category.kentang",
    image: friesImg,
    items: [
      { nameKey: "menu.kentang", price: 15 },
      { nameKey: "menu.kentang_chicken", price: 25, bestSeller: true },
      { nameKey: "menu.kentang_beef", price: 28 },
    ],
  },
  {
    titleKey: "category.spaghetti",
    image: spaghettiImg,
    items: [
      { nameKey: "menu.spaghetti_bolognese", price: 23 },
      { nameKey: "menu.spaghetti_carbonara", price: 25 },
    ],
  },
  {
    titleKey: "category.nasi",
    image: riceImg,
    items: [
      { nameKey: "menu.nasi_oregano", price: 23 },
      { nameKey: "menu.nasi_komplit", price: 27 },
    ],
  },
];

const formatPrice = (price: number) => {
  return `${price}K`;
};

const MenuPreview = () => {
  const { t, isTransitioning } = useLanguage();

  return (
    <section id="menu" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className={`text-center mb-16 transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
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
            {t("menu.subtitle")}
          </motion.p>
          <motion.h2
            className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {t("menu.title1")} <span className="text-gradient-red">{t("menu.title2")}</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Menu Burger California lengkap dengan berbagai pilihan California Burger premium, tortilla, kentang, dan lainnya.
          </p>
          <motion.div
            className="flex items-center justify-center gap-2 text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm">= {t("menu.bestSeller")}</span>
          </motion.div>
        </motion.div>

        {/* Menu Categories */}
        <div className={`space-y-16 transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {menuData.map((category, categoryIndex) => (
            <motion.div
              key={category.titleKey}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              {/* Category Header with Image */}
              <div className="relative mb-8 rounded-2xl overflow-hidden group">
                <div className="aspect-[21/9] md:aspect-[21/6] relative">
                  <img
                    src={category.image}
                    alt={t(category.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  {/* Category Title */}
                  <div className="absolute bottom-6 left-6 md:left-10">
                    <div className="flex items-center gap-3">
                      <Flame className="w-8 h-8 text-primary" />
                      <h3 className="font-display text-4xl md:text-5xl text-foreground">
                        {t(category.titleKey)}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.nameKey}
                    className="group relative p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 hover:bg-card transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.03 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    {/* Best Seller Badge */}
                    {item.bestSeller && (
                      <div className="absolute -top-2 -right-2 z-10">
                        <motion.div
                          className="flex items-center gap-1 px-3 py-1 bg-gradient-golden text-primary-foreground rounded-full text-xs font-bold shadow-lg"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3, type: "spring" }}
                        >
                          <Star className="w-3 h-3 fill-current" />
                          {t("menu.bestSeller")}
                        </motion.div>
                      </div>
                    )}

                    {/* Item Content */}
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors flex-1">
                        {t(item.nameKey)}
                      </h4>
                      <span className="font-display text-2xl text-gradient-golden whitespace-nowrap">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-golden w-0 group-hover:w-full transition-all duration-500" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order CTA */}
        <motion.div
          className={`text-center mt-16 transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground mb-6 text-lg">
            {t("menu.orderCta")}
          </p>
          <motion.a
            href="https://share.google/cR2bPp78xYNP194xm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-golden text-primary-foreground rounded-full font-bold text-lg uppercase tracking-wider glow-golden hover:scale-105 transition-transform shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t("menu.orderButton")}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPreview;
