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
        image: "",
        text: "Bij FIS Robotics ontwikkelen we op maat gemaakte zitschalen en zitortheses die perfect aansluiten op de unieke lichaamsvorm van elke gebruiker. Door gebruik te maken van geavanceerde 3D-scantechnologie kunnen we tot op de millimeter nauwkeurig werken, wat resulteert in optimaal comfort en ondersteuning voor dagelijks gebruik.",
        imagePosition: "right" as const,
      },
      {
        image: "",
        text: "Onze zitoplossingen worden vervaardigd uit hoogwaardige, medisch gecertificeerde materialen die zowel lichtgewicht als extreem duurzaam zijn. We werken nauw samen met ergotherapeuten, fysiotherapeuten en revalidatieartsen om ervoor te zorgen dat elk product voldoet aan de hoogste medische standaarden en de levenskwaliteit van gebruikers significant verbetert.",
        imagePosition: "left" as const,
      },
      {
        image: "",
        text: "Innovatie staat centraal in alles wat we doen. Van het eerste consult tot de uiteindelijke levering begeleiden we u door het hele proces. Ons team van specialisten staat klaar om samen met u de perfecte zitoplossing te vinden die aansluit bij uw specifieke behoeften, mobiliteit en levensstijl.",
        imagePosition: "right" as const,
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

