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
    "home.title.line1": "WELKOM BIJ",
    "home.title.line2": "FIS ROBOTICS",
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

    // Zitschalen detail page
    "zitschalen.title": "Zitschalen / Zitortheses",
    "zitschalen.section1":
      "Bij FIS Robotics ontwikkelen we op maat gemaakte zitschalen en zitortheses die perfect aansluiten op de unieke lichaamsvorm van elke gebruiker. Door gebruik te maken van geavanceerde 3D-scantechnologie kunnen we tot op de millimeter nauwkeurig werken, wat resulteert in optimaal comfort en ondersteuning voor dagelijks gebruik.",
    "zitschalen.section2":
      "Onze zitoplossingen worden vervaardigd uit hoogwaardige, medisch gecertificeerde materialen die zowel lichtgewicht als extreem duurzaam zijn. We werken nauw samen met ergotherapeuten, fysiotherapeuten en revalidatieartsen om ervoor te zorgen dat elk product voldoet aan de hoogste medische standaarden en de levenskwaliteit van gebruikers significant verbetert.",
    "zitschalen.section3":
      "Innovatie staat centraal in alles wat we doen. Van het eerste consult tot de uiteindelijke levering begeleiden we u door het hele proces. Ons team van specialisten staat klaar om samen met u de perfecte zitoplossing te vinden die aansluit bij uw specifieke behoeften, mobiliteit en levensstijl.",

    // Creatief detail page
    "creatief.title": "Creatieve Industrie",
    "creatief.section1":
      "We combineren technologie met creativiteit om unieke oplossingen te ontwikkelen voor de creatieve sector. Van interactieve kunstinstallaties tot innovatieve tentoonstellingsontwerpen, we helpen kunstenaars en creatieven hun visie tot leven te brengen met geavanceerde technologie.",
    "creatief.section2":
      "Onze expertise in robotica en software-ontwikkeling stelt ons in staat om complexe creatieve projecten te realiseren. We werken samen met musea, galeries en kunstenaars om interactieve ervaringen te creëren die bezoekers betrekken en inspireren. Onze oplossingen zijn zowel technisch geavanceerd als artistiek verantwoord.",
    "creatief.section3":
      "Innovatie en creativiteit gaan hand in hand in onze projecten. We geloven dat technologie een krachtig medium kan zijn voor artistieke expressie. Ons team combineert technische expertise met een diep begrip van de creatieve industrie om oplossingen te ontwikkelen die zowel functioneel als esthetisch zijn.",

    // SmartCAM detail page
    "smartcam.title": "SmartCAM",
    "smartcam.section1":
      "SmartCAM is onze geavanceerde CAM-software voor precisiebewerking en geautomatiseerde productieprocessen. Met intelligente algoritmes optimaliseert onze software productieprocessen, reduceert verspilling en verhoogt de efficiëntie. Onze oplossing is geschikt voor zowel kleine werkplaatsen als grote productiefaciliteiten.",
    "smartcam.section2":
      "De software maakt gebruik van machine learning om productiepatronen te analyseren en te optimaliseren. Real-time monitoring en aanpassingen zorgen ervoor dat elke bewerking wordt uitgevoerd met maximale precisie. Onze gebruikers rapporteren significante verbeteringen in productietijd en materiaalgebruik.",
    "smartcam.section3":
      "We bieden uitgebreide ondersteuning en training om ervoor te zorgen dat u het maximale uit SmartCAM haalt. Ons team staat klaar om u te helpen bij de implementatie en optimalisatie van uw productieprocessen. Met regelmatige updates blijven we voorop lopen in technologische ontwikkelingen.",

    // Hardware detail page
    "hardware.title": "Hardware",
    "hardware.section1":
      "Onze hardwareoplossingen zijn robuust, betrouwbaar en ontworpen voor diverse toepassingen. Van elektronische componenten tot complete systemen op maat, we leveren hardware die voldoet aan de hoogste kwaliteitsstandaarden. Onze producten worden getest onder extreme omstandigheden om duurzaamheid te garanderen.",
    "hardware.section2":
      "We werken met toonaangevende fabrikanten en gebruiken alleen de beste componenten. Onze hardware wordt ontworpen met oog voor detail en aandacht voor de specifieke behoeften van onze klanten. Of het nu gaat om prototyping of massaproductie, we hebben de expertise om uw project tot een succes te maken.",
    "hardware.section3":
      "Ons team van hardware engineers staat klaar om u te adviseren over de beste oplossing voor uw specifieke toepassing. We bieden ondersteuning van concept tot productie en zorgen ervoor dat elke component perfect aansluit bij uw behoeften. Kwaliteit en betrouwbaarheid staan bij ons voorop.",
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
    "home.title.line1": "WELCOME TO",
    "home.title.line2": "FIS ROBOTICS",
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

    // Zitschalen detail page
    "zitschalen.title": "Seating Shells / Orthoses",
    "zitschalen.section1":
      "At FIS Robotics, we develop custom-made seating shells and orthoses that perfectly match each user's unique body shape. Using advanced 3D scanning technology, we work with millimetre precision, resulting in optimal comfort and support for daily use.",
    "zitschalen.section2":
      "Our seating solutions are made from high-quality, medically certified materials that are both lightweight and extremely durable. We work closely with occupational therapists, physiotherapists and rehabilitation physicians to ensure that each product meets the highest medical standards and significantly improves users' quality of life.",
    "zitschalen.section3":
      "Innovation is at the heart of everything we do. From the first consultation to final delivery, we guide you through the entire process. Our team of specialists is ready to help you find the perfect seating solution that fits your specific needs, mobility and lifestyle.",

    // Creatief detail page
    "creatief.title": "Creative Industry",
    "creatief.section1":
      "We combine technology with creativity to develop unique solutions for the creative sector. From interactive art installations to innovative exhibition designs, we help artists and creatives bring their vision to life using advanced technology.",
    "creatief.section2":
      "Our expertise in robotics and software development enables us to realise complex creative projects. We collaborate with museums, galleries and artists to create interactive experiences that engage and inspire visitors. Our solutions are both technically advanced and artistically responsible.",
    "creatief.section3":
      "Innovation and creativity go hand in hand in our projects. We believe that technology can be a powerful medium for artistic expression. Our team combines technical expertise with a deep understanding of the creative industry to develop solutions that are both functional and aesthetically pleasing.",

    // SmartCAM detail page
    "smartcam.title": "SmartCAM",
    "smartcam.section1":
      "SmartCAM is our advanced CAM software for precision machining and automated production processes. With intelligent algorithms, our software optimises production, reduces waste and increases efficiency. Our solution is suitable for both small workshops and large production facilities.",
    "smartcam.section2":
      "The software uses machine learning to analyse and optimise production patterns. Real-time monitoring and adjustments ensure that every operation is carried out with maximum precision. Our users report significant improvements in production time and material usage.",
    "smartcam.section3":
      "We offer extensive support and training to ensure that you get the most out of SmartCAM. Our team is ready to help you implement and optimise your production processes. With regular updates, we stay ahead in technological developments.",

    // Hardware detail page
    "hardware.title": "Hardware",
    "hardware.section1":
      "Our hardware solutions are robust, reliable and designed for a wide range of applications. From electronic components to complete custom systems, we deliver hardware that meets the highest quality standards. Our products are tested under extreme conditions to guarantee durability.",
    "hardware.section2":
      "We work with leading manufacturers and use only the best components. Our hardware is designed with attention to detail and a strong focus on our customers' specific needs. Whether it's prototyping or mass production, we have the expertise to make your project a success.",
    "hardware.section3":
      "Our team of hardware engineers is ready to advise you on the best solution for your specific application. We provide support from concept to production and ensure that every component fits your requirements perfectly. Quality and reliability are our top priorities.",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

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

