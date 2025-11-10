"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "nl" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  nl: {
    // Menu
    "menu.home": "Home",
    "menu.about": "About us",
    "menu.team": "Team",
    "menu.contact": "Contact",
    "menu.zitschalen": "Zitschalen/Zitortheses",
    "menu.creatief": "Creatieve Industrie",
    "menu.smartcam": "SmartCAM",
    "menu.hardware": "Hardware",
    
    // Homepage
    "home.title": "Welkom bij FIS Robotics",
    "home.description": "FIS Robotics is een innovatief bedrijf gespecialiseerd in geavanceerde technologieën en maatwerkoplossingen. We combineren expertise in robotica, software-ontwikkeling en hardware-engineering om oplossingen te creëren die het verschil maken. Van medische hulpmiddelen tot creatieve industrieën, wij zetten technologie in voor een betere toekomst.",
    "home.quote": "Innovatie door technologie, oplossingen op maat",
    "home.moreInfo": "Meer informatie",
    
    // Carousel items
    "carousel.zitschalen.title": "Zitschalen / Zitortheses",
    "carousel.zitschalen.description": "Innovatieve zitoplossingen op maat gemaakt voor optimaal comfort en ondersteuning. Onze zitschalen en zitortheses worden met precisie ontworpen en geproduceerd.",
    "carousel.creatief.title": "Creatieve Industrie",
    "carousel.creatief.description": "We combineren technologie met creativiteit om unieke oplossingen te ontwikkelen voor de creatieve sector. Van kunstinstallaties tot interactieve ervaringen.",
    "carousel.smartcam.title": "SmartCAM",
    "carousel.smartcam.description": "Geavanceerde CAM-software voor precisiebewerking en geautomatiseerde productieprocessen. Optimaliseer uw productie met intelligente technologie.",
    "carousel.hardware.title": "Hardware",
    "carousel.hardware.description": "Robuuste en betrouwbare hardwareoplossingen voor diverse toepassingen. Van elektronische componenten tot complete systemen op maat.",
    
    // Footer
    "footer.contact": "Contact",
    "footer.about": "About",
    "footer.socials": "Socials",
    
    // Team page
    "team.title": "Ons Team",
    "team.roles.founderEngineering": "Founder, Engineering, Manager",
    "team.roles.founderFinance": "Founder, Finance, Manager",
    "team.roles.softwareDev": "Software Development",
    "team.roles.printingMaterials": "3D Printing and Materials",
    "team.roles.businessIllustrator": "Business Development, Illustrator",
    "team.roles.operator": "Operator",
    "team.roles.administration": "Administration",
  },
  en: {
    // Menu
    "menu.home": "Home",
    "menu.about": "About us",
    "menu.team": "Team",
    "menu.contact": "Contact",
    "menu.zitschalen": "Seating Shells/Orthoses",
    "menu.creatief": "Creative Industry",
    "menu.smartcam": "SmartCAM",
    "menu.hardware": "Hardware",
    
    // Homepage
    "home.title": "Welcome to FIS Robotics",
    "home.description": "FIS Robotics is an innovative company specialized in advanced technologies and custom solutions. We combine expertise in robotics, software development and hardware engineering to create solutions that make a difference. From medical aids to creative industries, we use technology for a better future.",
    "home.quote": "Innovation through technology, custom solutions",
    "home.moreInfo": "More information",
    
    // Carousel items
    "carousel.zitschalen.title": "Seating Shells / Orthoses",
    "carousel.zitschalen.description": "Innovative custom-made seating solutions for optimal comfort and support. Our seating shells and orthoses are designed and produced with precision.",
    "carousel.creatief.title": "Creative Industry",
    "carousel.creatief.description": "We combine technology with creativity to develop unique solutions for the creative sector. From art installations to interactive experiences.",
    "carousel.smartcam.title": "SmartCAM",
    "carousel.smartcam.description": "Advanced CAM software for precision machining and automated production processes. Optimize your production with intelligent technology.",
    "carousel.hardware.title": "Hardware",
    "carousel.hardware.description": "Robust and reliable hardware solutions for various applications. From electronic components to complete custom systems.",
    
    // Footer
    "footer.contact": "Contact",
    "footer.about": "About",
    "footer.socials": "Socials",
    
    // Team page
    "team.title": "Our Team",
    "team.roles.founderEngineering": "Founder, Engineering, Manager",
    "team.roles.founderFinance": "Founder, Finance, Manager",
    "team.roles.softwareDev": "Software Development",
    "team.roles.printingMaterials": "3D Printing and Materials",
    "team.roles.businessIllustrator": "Business Development, Illustrator",
    "team.roles.operator": "Operator",
    "team.roles.administration": "Administration",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("nl");

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "nl" || savedLanguage === "en")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.nl] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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

