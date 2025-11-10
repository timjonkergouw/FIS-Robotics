"use client";
import React, { useMemo } from "react";
import { DetailPage } from "../components/DetailPage";

export default function CreatiefPage() {
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
      { label: "Team", link: "/team" },
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
        image: "/images/creatief.jpg",
        text: "We combineren technologie met creativiteit om unieke oplossingen te ontwikkelen voor de creatieve sector. Van interactieve kunstinstallaties tot innovatieve tentoonstellingsontwerpen, we helpen kunstenaars en creatieven hun visie tot leven te brengen met geavanceerde technologie.",
        imagePosition: "left" as const,
      },
      {
        image: "/images/creatief2.jpg",
        text: "Onze expertise in robotica en software-ontwikkeling stelt ons in staat om complexe creatieve projecten te realiseren. We werken samen met musea, galeries en kunstenaars om interactieve ervaringen te creëren die bezoekers betrekken en inspireren. Onze oplossingen zijn zowel technisch geavanceerd als artistiek verantwoord.",
        imagePosition: "right" as const,
      },
      {
        image: "/images/creatief3.jpg",
        text: "Innovatie en creativiteit gaan hand in hand in onze projecten. We geloven dat technologie een krachtig medium kan zijn voor artistieke expressie. Ons team combineert technische expertise met een diep begrip van de creatieve industrie om oplossingen te ontwikkelen die zowel functioneel als esthetisch zijn.",
        imagePosition: "left" as const,
      },
    ],
    []
  );

  return (
    <DetailPage
      title="Creatieve Industrie"
      sections={sections}
      menuItems={menuItems}
      socialItems={socialItems}
    />
  );
}

