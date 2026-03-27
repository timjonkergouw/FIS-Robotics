"use client";
import { useMemo } from "react";
import { DetailPage } from "../components/DetailPage";
import { useLanguage } from "../contexts/LanguageContext";

export default function ZitschalenPage() {
  const { t } = useLanguage();

  const menuItems = useMemo(
    () => [
      { label: t("menu.home"), link: "/" },
      { label: t("menu.zitschalen"), link: "/zitschalen" },
      { label: t("menu.creatief"), link: "/creatief" },
      { label: t("menu.team"), link: "/team" },
    ],
    [t]
  );

  const socialItems = useMemo(
    () => [
      { label: "Facebook", link: "https://www.facebook.com/FISRobotics?locale=nl_NL" },
      { label: "Instagram", link: "https://www.instagram.com/fisrobotics/" },
    ],
    []
  );

  const sections = useMemo(
    () => [
      {

        images: ["/images/zitsschalen1.jpeg",
          "/images/zitschalen2.png",
          "/images/zitschalen3.png",
          "/images/zitschalen4.png"],
        heading: t("zitschalen.heading1"),
        text: t("zitschalen.section1"),
        imagePosition: "left" as const,
      },
      {
        // Kop 2: process
        images: [
          "/images/process1.jpg",
          "/images/process2.png",
          "/images/process3.png",
          "/images/process4.png",
        ],
        heading: t("zitschalen.heading2"),
        text: t("zitschalen.section2"),
        imagePosition: "right" as const,
      },
      {
        // Kop 3: functie
        images: ["/images/functie1.jpg",
          "/images/functie2.jpg",
          "/images/functie3.jpg",
          "/images/functie4.png"],
        heading: t("zitschalen.heading3"),
        text: t("zitschalen.section3"),
        imagePosition: "left" as const,
      },
    ],
    [t]
  );

  return (
    <DetailPage
      title={t("zitschalen.title")}
      sections={sections}
      menuItems={menuItems}
      socialItems={socialItems}
      hideHero
    />
  );
}

