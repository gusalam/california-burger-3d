import { createContext, useContext, useState, ReactNode } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isTransitioning: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  id: {
    // Navbar
    "nav.home": "Beranda",
    "nav.menu": "Menu",
    "nav.about": "Tentang",
    "nav.contact": "Kontak",
    "nav.order": "Pesan Sekarang",

    // Hero
    "hero.tagline": "Premium West Coast Burgers",
    "hero.title1": "CALIFORNIA",
    "hero.title2": "BURGER",
    "hero.description": "Rasakan cita rasa burger West Coast yang ultimate. Segar, juicy, dan premium dengan bahan-bahan berkualitas tinggi.",
    "hero.orderNow": "Pesan Sekarang",
    "hero.orderGofood": "Pesan via GoFood",
    "hero.viewMenu": "Lihat Menu",

    // Menu
    "menu.subtitle": "Menu Kami",
    "menu.title1": "PILIHAN",
    "menu.title2": "LEZAT",
    "menu.bestSeller": "Best Seller",
    "menu.orderCta": "Siap memesan? Hubungi kami sekarang!",
    "menu.orderButton": "Pesan Sekarang",

    // Categories
    "category.burgers": "BURGERS",
    "category.tortilla": "TORTILLA",
    "category.kentang": "KENTANG",
    "category.spaghetti": "SPAGHETTI",
    "category.nasi": "NASI",

    // Menu Items - Burgers
    "menu.burger_beef": "Burger Beef",
    "menu.burger_double_beef": "Burger Double Beef",
    "menu.burger_beef_bacon": "Burger Beef Bacon",
    "menu.burger_double_beef_cheese": "Burger Double Beef Cheese",
    "menu.burger_double_cheese": "Burger Double Cheese",
    "menu.burger_mozarella": "Burger Mozarella",
    "menu.burger_double_beef_mozarella": "Burger Double Beef Mozarella",
    "menu.burger_double_beef_cheese_mozarella": "Burger Double Beef Cheese Mozarella",
    "menu.burger_chicago": "Burger Chicago",
    "menu.burger_avocado": "Burger Avocado",
    "menu.burger_pineapple": "Burger Pineapple",
    "menu.burger_chicken": "Burger Chicken",
    "menu.burger_spesial": "Burger Spesial",
    "menu.burger_paket_lengkap": "Burger Paket Lengkap",

    // Menu Items - Tortilla
    "menu.beef_tortilla": "Beef Tortilla",
    "menu.chicken_tortilla": "Chicken Tortilla",

    // Menu Items - Kentang
    "menu.kentang": "Kentang",
    "menu.kentang_chicken": "Kentang Chicken",
    "menu.kentang_beef": "Kentang Beef",

    // Menu Items - Spaghetti
    "menu.spaghetti_bolognese": "Spaghetti Bolognese",
    "menu.spaghetti_carbonara": "Spaghetti Carbonara",

    // Menu Items - Nasi
    "menu.nasi_oregano": "Nasi Oregano",
    "menu.nasi_komplit": "Nasi Komplit",

    // Features
    "features.subtitle": "Mengapa California Burger?",
    "features.title1": "THE CALIFORNIA",
    "features.title2": "DIFFERENCE",
    "features.fresh.title": "Bahan Segar",
    "features.fresh.desc": "Semua bahan dipilih dengan cermat dan segar setiap hari untuk kualitas terbaik.",
    "features.premium.title": "Kualitas Premium",
    "features.premium.desc": "Daging berkualitas tinggi dengan resep rahasia yang membuat rasa tak terlupakan.",
    "features.fast.title": "Pelayanan Cepat",
    "features.fast.desc": "Pesanan Anda disiapkan dengan cepat tanpa mengorbankan kualitas.",
    "features.award.title": "Pemenang Penghargaan",
    "features.award.desc": "Diakui sebagai burger gourmet terbaik di kota sejak 2020.",

    // Contact
    "contact.subtitle": "Hubungi Kami",
    "contact.title1": "TEMUKAN",
    "contact.title2": "KAMI",
    "contact.location": "Lokasi",
    "contact.phone": "Telepon",
    "contact.hours": "Jam Buka",
    "contact.hoursValue": "Setiap Hari 09:00 - 22:00",
    "contact.followUs": "Ikuti Kami",

    // Footer
    "footer.description": "Rasakan cita rasa burger West Coast yang ultimate. Bahan premium, resep signature, dan rasa yang tak terlupakan.",
    "footer.quickLinks": "Link Cepat",
    "footer.contact": "Kontak",
    "footer.rights": "Hak Cipta Dilindungi.",
    "footer.madeWith": "Dibuat dengan",
    "footer.style": "California Style",

    // Loading
    "loading.text": "Memuat...",

    // WhatsApp
    "whatsapp.chat": "Chat dengan kami!",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.order": "Order Now",

    // Hero
    "hero.tagline": "Premium West Coast Burgers",
    "hero.title1": "CALIFORNIA",
    "hero.title2": "BURGER",
    "hero.description": "Experience the ultimate West Coast burger taste. Fresh, juicy, and premium with the finest ingredients.",
    "hero.orderNow": "Order Now",
    "hero.orderGofood": "Order via GoFood",
    "hero.viewMenu": "View Menu",

    // Menu
    "menu.subtitle": "Our Menu",
    "menu.title1": "DELICIOUS",
    "menu.title2": "CHOICES",
    "menu.bestSeller": "Best Seller",
    "menu.orderCta": "Ready to order? Contact us now!",
    "menu.orderButton": "Order Now",

    // Categories
    "category.burgers": "BURGERS",
    "category.tortilla": "TORTILLA",
    "category.kentang": "FRIES",
    "category.spaghetti": "SPAGHETTI",
    "category.nasi": "RICE",

    // Menu Items - Burgers
    "menu.burger_beef": "Beef Burger",
    "menu.burger_double_beef": "Double Beef Burger",
    "menu.burger_beef_bacon": "Beef Bacon Burger",
    "menu.burger_double_beef_cheese": "Double Beef Cheese Burger",
    "menu.burger_double_cheese": "Double Cheese Burger",
    "menu.burger_mozarella": "Mozzarella Burger",
    "menu.burger_double_beef_mozarella": "Double Beef Mozzarella Burger",
    "menu.burger_double_beef_cheese_mozarella": "Double Beef Cheese Mozzarella Burger",
    "menu.burger_chicago": "Chicago Burger",
    "menu.burger_avocado": "Avocado Burger",
    "menu.burger_pineapple": "Pineapple Burger",
    "menu.burger_chicken": "Chicken Burger",
    "menu.burger_spesial": "Special Burger",
    "menu.burger_paket_lengkap": "Complete Combo Burger",

    // Menu Items - Tortilla
    "menu.beef_tortilla": "Beef Tortilla Wrap",
    "menu.chicken_tortilla": "Chicken Tortilla Wrap",

    // Menu Items - Kentang
    "menu.kentang": "French Fries",
    "menu.kentang_chicken": "Chicken Loaded Fries",
    "menu.kentang_beef": "Beef Loaded Fries",

    // Menu Items - Spaghetti
    "menu.spaghetti_bolognese": "Spaghetti Bolognese",
    "menu.spaghetti_carbonara": "Spaghetti Carbonara",

    // Menu Items - Nasi
    "menu.nasi_oregano": "Oregano Rice Bowl",
    "menu.nasi_komplit": "Complete Rice Bowl",

    // Features
    "features.subtitle": "Why California Burger?",
    "features.title1": "THE CALIFORNIA",
    "features.title2": "DIFFERENCE",
    "features.fresh.title": "Fresh Ingredients",
    "features.fresh.desc": "All ingredients are carefully selected and fresh daily for the best quality.",
    "features.premium.title": "Premium Quality",
    "features.premium.desc": "High-quality meat with secret recipes that create unforgettable taste.",
    "features.fast.title": "Fast Service",
    "features.fast.desc": "Your order is prepared quickly without compromising quality.",
    "features.award.title": "Award Winning",
    "features.award.desc": "Recognized as the best gourmet burger in town since 2020.",

    // Contact
    "contact.subtitle": "Contact Us",
    "contact.title1": "FIND",
    "contact.title2": "US",
    "contact.location": "Location",
    "contact.phone": "Phone",
    "contact.hours": "Opening Hours",
    "contact.hoursValue": "Daily 09:00 AM - 10:00 PM",
    "contact.followUs": "Follow Us",

    // Footer
    "footer.description": "Experience the ultimate West Coast burger taste. Premium ingredients, signature recipes, and unforgettable flavors.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Made with",
    "footer.style": "California Style",

    // Loading
    "loading.text": "Loading...",

    // WhatsApp
    "whatsapp.chat": "Chat with us!",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("id");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    
    setIsTransitioning(true);
    
    // Small delay for fade out animation
    setTimeout(() => {
      setLanguageState(lang);
      // Fade back in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
