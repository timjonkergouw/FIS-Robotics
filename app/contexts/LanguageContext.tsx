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
    "menu.zitschalen": "Zitschalen\nZitortheses",
    "menu.creatief": "Creatieve Industrie",

    // Homepage
    "home.title": "Welkom bij FIS Robotics",
    "home.title.line1": "WELKOM BIJ",
    "home.title.line2": "FIS ROBOTICS",
    "home.description": "FIS Robotics is een innovatief bedrijf gespecialiseerd in geavanceerde technologieën en maatwerkoplossingen. We combineren expertise in robotica, software-ontwikkeling en hardware-engineering om oplossingen te creëren die het verschil maken. Van medische hulpmiddelen tot creatieve industrieën, wij zetten technologie in voor een betere toekomst.",
    "home.quote": "Innovatie door technologie, oplossingen op maat",
    "home.moreInfo": "Meer informatie",
    "home.hero.zitschalenTitle": "ZITSCHALEN / ZITORTHESIS",
    "home.hero.creatiefTitle": "CREATIVE INDUSTRY",
    "home.hero.slogan": "\"FIRST IN SERVICE.\"",
    "home.hero.subtext": "Uw innovatiespecialist voor geavanceerde technologie en maatwerkoplossingen. Wij combineren expertise in robotica.",

    // Carousel items
    "carousel.zitschalen.title": "Zitschalen / Zitortheses",
    "carousel.zitschalen.description": "Innovatieve zitoplossingen op maat gemaakt voor optimaal comfort en ondersteuning. Onze zitschalen en zitortheses worden met precisie ontworpen en geproduceerd.",
    "carousel.creatief.title": "Creatieve Industrie",
    "carousel.creatief.description": "We combineren technologie met creativiteit om unieke oplossingen te ontwikkelen voor de creatieve sector. Van kunstinstallaties tot interactieve ervaringen.",

    // Homepage cards
    "home.cards.zitschalenTitle": "ZITSCHALEN / ZITORTHESIS",
    "home.cards.zitschalenBody": "We gebruiken geavanceerde 3D-printtechnologie om zitoplossingen op maat te creëren die comfort, ondersteuning en levenskwaliteit verbeteren.",
    "home.cards.creatiefTitle": "CREATIVE INDUSTRY",
    "home.cards.creatiefBody": "We ontwerpen en 3D-printen unieke objecten en decoratieve stukken die ideeën tot leven brengen met een sterk visueel effect.",
    "home.cards.moreDetails": "Meer details",

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
    "zitschalen.heading1": "Zitschalen en zitortheses",
    "zitschalen.heading2": "Het process",
    "zitschalen.heading3": "De functie",
    "zitschalen.section1":
      "Zitschalen, ook wel zitortheses genoemd, zijn orthopedische hulpmiddelen die ontworpen zijn om een correcte en stabiele zithouding te ondersteunen. Ze worden volledig op maat gemaakt, omdat iedere patiënt een unieke lichaamsvorm en specifieke ondersteuningsbehoefte heeft.\n\nHet doel van een zitschaal is om het lichaam optimaal te positioneren, zodat de gebruiker comfortabel kan zitten en lichamelijke klachten worden verminderd of voorkomen. Door gebruik te maken van moderne technieken zoals 3D-scans en digitale modellen kan een zitschaal zeer nauwkeurig worden afgestemd op de persoon.",
    "zitschalen.section2":
      "Het maken van een zitschaal begint met het aanmeten van de patiënt. Hierbij wordt een afdruk gemaakt van de zithouding. Deze afdruk wordt vervolgens digitaal ingescand met een 3D-scanner, zodat er een nauwkeurig digitaal model ontstaat.\n\nVanuit deze scan wordt een 3D-model gemaakt waarin de nodige orthopedische aanpassingen worden verwerkt. In het traditionele proces werd daarna een mal gefreesd en een kunststof plaat gevormd, die later nog moest worden bijgewerkt en gemonteerd.\n\nIn het nieuwe proces wordt het digitale model rechtstreeks gebruikt om de zitschaal met een 3D-printer te produceren. Hierdoor zijn minder bewerkingen nodig en ontstaat er minder afval. Na het printen wordt de zitschaal gemonteerd met bijvoorbeeld polstering en een onderstel.",
    "zitschalen.section3":
      "De belangrijkste functie van een zitschaal is het ondersteunen van een goede zithouding en het verbeteren van het comfort van de gebruiker. Door de persoonlijke pasvorm wordt het lichaam goed ondersteund, wat helpt om drukpunten te verminderen en een betere lichaamshouding te behouden.\n\nDaarnaast zorgen moderne productiemethoden, zoals 3D-printen, ervoor dat zitschalen duurzamer geproduceerd kunnen worden. Het materiaal kan vaak gerecycled worden en er is minder afval tijdens de productie. Ook kan het productieproces efficiënter en sneller verlopen.",

    // Creatief detail page
    "creatief.title": "Creatieve Industrie",
    "creatief.headingIntro": "Creatieve industrie",
    "creatief.headingFrezen": "Frezen",
    "creatief.heading3dPrint": "3D-printen",
    "creatief.section1":
      "Bij FIS Robotics combineren we techniek met design om ideeën om te zetten in fysieke objecten.\n\nWe werken voor kunstenaars, designers, evenementen en decorbouw.\nVan concept tot maatwerk—gemaakt precies zoals jij het nodig hebt.",
    "creatief.section2":
      "Frezen in EPS en hout\n\nToepassingen: decor, prototypes, kunstobjecten.\nVan 3D-model naar eindproduct: we vertalen jouw ontwerp naar een nauwkeurig freestraject en werken af tot het klaar is voor gebruik.",
    "creatief.section3":
      "3D-printen in PET en PP\n\nMaterialen: PET en PP zijn licht, sterk en vormvast.\nWaarvoor: prototypes, onderdelen voor installaties en functionele kunstobjecten.\nKorte uitleg proces: we modelleren het ontwerp, printen in lagen en verfijnen waar nodig voor een perfecte pasvorm.",

    // (SmartCAM en Hardware teksten verwijderd; deze secties staan niet meer op de site)
  },
  en: {
    // Menu
    "menu.home": "Home",
    "menu.about": "About us",
    "menu.team": "Team",
    "menu.contact": "Contact",
    "menu.zitschalen": "Seating Shells\nOrthoses",
    "menu.creatief": "Creative Industry",

    // Homepage
    "home.title": "Welcome to FIS Robotics",
    "home.title.line1": "WELCOME TO",
    "home.title.line2": "FIS ROBOTICS",
    "home.description": "FIS Robotics is an innovative company specialized in advanced technologies and custom solutions. We combine expertise in robotics, software development and hardware engineering to create solutions that make a difference. From medical aids to creative industries, we use technology for a better future.",
    "home.quote": "Innovation through technology, custom solutions",
    "home.moreInfo": "More information",
    "home.hero.zitschalenTitle": "SEATING SHELLS / ORTHOSES",
    "home.hero.creatiefTitle": "CREATIVE INDUSTRY",
    "home.hero.slogan": "\"FIRST IN SERVICE.\"",
    "home.hero.subtext": "Your innovation specialist for advanced technologies and customized solutions. We combine expertise in robotics.",

    // Carousel items
    "carousel.zitschalen.title": "Seating Shells / Orthoses",
    "carousel.zitschalen.description": "Innovative custom-made seating solutions for optimal comfort and support. Our seating shells and orthoses are designed and produced with precision.",
    "carousel.creatief.title": "Creative Industry",
    "carousel.creatief.description": "We combine technology with creativity to develop unique solutions for the creative sector. From art installations to interactive experiences.",

    // Homepage cards
    "home.cards.zitschalenTitle": "SEATING SHELLS / ORTHOSES",
    "home.cards.zitschalenBody": "We use advanced 3D printing technology to create seating solutions that improve comfort, support and quality of life.",
    "home.cards.creatiefTitle": "CREATIVE INDUSTRY",
    "home.cards.creatiefBody": "We design and 3D print custom figures and decorative pieces that bring events and special concepts to life with strong visual impact.",
    "home.cards.moreDetails": "More details",

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
    "zitschalen.heading1": "Seating shells and orthoses",
    "zitschalen.heading2": "The process",
    "zitschalen.heading3": "The function",
    "zitschalen.section1":
      "Seating shells, also known as seating orthoses, are orthopedic assistive devices designed to support a correct and stable seated posture. They are made completely to measure, because every patient has a unique body shape and specific support needs.\n\nThe goal of a seating shell is to position the body optimally, so the user can sit comfortably and physical complaints can be reduced or prevented. By using modern techniques such as 3D scans and digital models, a seating shell can be matched very precisely to the individual.",
    "zitschalen.section2":
      "Making a seating shell starts with fitting the patient. First, an impression is taken of the seated posture. This impression is then digitally scanned with a 3D scanner to create an accurate digital model.\n\nFrom this scan, a 3D model is created in which the required orthopedic adjustments are incorporated. In the traditional process, a mould was then milled and a plastic sheet formed, which later still needed to be refined and mounted.\n\nIn the new process, the digital model is used directly to produce the seating shell with a 3D printer. This means fewer processing steps are needed and less waste is created. After printing, the seating shell is assembled with, for example, padding and a base frame.",
    "zitschalen.section3":
      "The main function of a seating shell is to support a good seated posture and improve the user's comfort. With the personalized fit, the body is supported properly, helping to reduce pressure points and maintain a better body posture.\n\nIn addition, modern production methods such as 3D printing make seating shells more sustainably produced. The material can often be recycled and there is less waste during production. The production process can also be more efficient and faster.",

    // Creatief detail page
    "creatief.title": "Creative Industry",
    "creatief.headingIntro": "Creative industry",
    "creatief.headingFrezen": "Milling",
    "creatief.heading3dPrint": "3D printing",
    "creatief.section1":
      "At FIS Robotics, we combine technology with design to turn ideas into physical objects.\n\nWe work with artists, designers, events and set builders.\nFrom concept to tailor-made results—built exactly to your needs.",
    "creatief.section2":
      "Milling in EPS and wood\n\nApplications: sets, prototypes, art objects.\nFrom 3D model to finished product: we translate your design into a precise milling path and finish it until it’s ready to use.",
    "creatief.section3":
      "3D printing in PET and PP\n\nMaterials: PET and PP are lightweight, strong and dimensionally stable.\nWhere it's used: prototypes, parts for installations, and functional art objects.\nShort process (explained): we model the design, print layer by layer, and refine when needed for a perfect fit.",

    // (SmartCAM and Hardware texts removed; these sections no longer exist on the site)
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

