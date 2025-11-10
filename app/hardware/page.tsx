"use client";
import React, { useMemo } from "react";
import { DetailPage } from "../components/DetailPage";

export default function HardwarePage() {
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
        image: "/images/hardware.jpg",
        text: "Onze hardwareoplossingen zijn robuust, betrouwbaar en ontworpen voor diverse toepassingen. Van elektronische componenten tot complete systemen op maat, we leveren hardware die voldoet aan de hoogste kwaliteitsstandaarden. Onze producten worden getest onder extreme omstandigheden om duurzaamheid te garanderen.",
        imagePosition: "left" as const,
      },
      {
        image: "/images/hardware2.jpg",
        text: "We werken met toonaangevende fabrikanten en gebruiken alleen de beste componenten. Onze hardware wordt ontworpen met oog voor detail en aandacht voor de specifieke behoeften van onze klanten. Of het nu gaat om prototyping of massaproductie, we hebben de expertise om uw project tot een succes te maken.",
        imagePosition: "right" as const,
      },
      {
        image: "/images/hardware3.jpg",
        text: "Ons team van hardware engineers staat klaar om u te adviseren over de beste oplossing voor uw specifieke toepassing. We bieden ondersteuning van concept tot productie en zorgen ervoor dat elke component perfect aansluit bij uw behoeften. Kwaliteit en betrouwbaarheid staan bij ons voorop.",
        imagePosition: "left" as const,
      },
    ],
    []
  );

  return (
    <DetailPage
      title="Hardware"
      sections={sections}
      menuItems={menuItems}
      socialItems={socialItems}
    />
  );
}

