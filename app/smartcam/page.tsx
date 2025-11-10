"use client";
import React, { useMemo } from "react";
import { DetailPage } from "../components/DetailPage";

export default function SmartCAMPage() {
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
        image: "/images/smartcam.jpg",
        text: "SmartCAM is onze geavanceerde CAM-software voor precisiebewerking en geautomatiseerde productieprocessen. Met intelligente algoritmes optimaliseert onze software productieprocessen, reduceert verspilling en verhoogt de efficiëntie. Onze oplossing is geschikt voor zowel kleine werkplaatsen als grote productiefaciliteiten.",
        imagePosition: "left" as const,
      },
      {
        image: "/images/smartcam2.jpg",
        text: "De software maakt gebruik van machine learning om productiepatronen te analyseren en te optimaliseren. Real-time monitoring en aanpassingen zorgen ervoor dat elke bewerking wordt uitgevoerd met maximale precisie. Onze gebruikers rapporteren significante verbeteringen in productietijd en materiaalgebruik.",
        imagePosition: "right" as const,
      },
      {
        image: "/images/smartcam3.jpg",
        text: "We bieden uitgebreide ondersteuning en training om ervoor te zorgen dat u het maximale uit SmartCAM haalt. Ons team staat klaar om u te helpen bij de implementatie en optimalisatie van uw productieprocessen. Met regelmatige updates blijven we voorop lopen in technologische ontwikkelingen.",
        imagePosition: "left" as const,
      },
    ],
    []
  );

  return (
    <DetailPage
      title="SmartCAM"
      sections={sections}
      menuItems={menuItems}
      socialItems={socialItems}
    />
  );
}

