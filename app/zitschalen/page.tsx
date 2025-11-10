"use client";
import React, { useMemo } from "react";
import { DetailPage } from "../components/DetailPage";

export default function ZitschalenPage() {
  const menuItems = useMemo(
    () => [
      { label: "Home", link: "/" },
      {
        label: "About us",
        link: "#about",
        submenu: [
          { label: "Zitschalen/Zitortheses", link: "/zitschalen" },
          { label: "Creatieve Industrie", link: "/creatief" },
          { label: "SmartCAM", link: "/smartcam" },
          { label: "Hardware", link: "/hardware" },
        ],
      },
      { label: "Team", link: "#team" },
      { label: "Contact", link: "#contact" },
    ],
    []
  );

  const socialItems = useMemo(
    () => [
      { label: "LinkedIn", link: "https://www.linkedin.com/" },
      { label: "Facebook", link: "https://facebook.com/" },
      { label: "X", link: "https://x.com/" },
      { label: "Instagram", link: "https://instagram.com/" },
    ],
    []
  );

  const sections = useMemo(
    () => [
      {
        image: "/images/zitschalen.jpg",
        text: "Onze zitschalen en zitortheses worden met uiterste precisie ontworpen en geproduceerd. We gebruiken geavanceerde 3D-scanning technologie om een perfecte pasvorm te garanderen voor elke individuele gebruiker. Onze oplossingen bieden optimaal comfort en ondersteuning, waardoor dagelijks gebruik aanzienlijk wordt verbeterd.",
        imagePosition: "left" as const,
      },
      {
        image: "/images/zitschalen2.jpg",
        text: "Met jarenlange ervaring in de medische sector hebben we een diepgaand begrip ontwikkeld van de behoeften van gebruikers. Onze zitschalen worden gemaakt van hoogwaardige materialen die duurzaamheid combineren met comfort. We werken nauw samen met zorgverleners om ervoor te zorgen dat onze producten voldoen aan de hoogste medische standaarden.",
        imagePosition: "right" as const,
      },
      {
        image: "/images/zitschalen3.jpg",
        text: "Innovatie staat centraal in ons ontwikkelingsproces. We blijven nieuwe technologieën en materialen onderzoeken om onze producten continu te verbeteren. Ons team van experts staat klaar om u te helpen bij het vinden van de perfecte zitoplossing die aansluit bij uw specifieke behoeften en levensstijl.",
        imagePosition: "left" as const,
      },
    ],
    []
  );

  return (
    <DetailPage
      title="Zitschalen / Zitortheses"
      sections={sections}
      menuItems={menuItems}
      socialItems={socialItems}
    />
  );
}

