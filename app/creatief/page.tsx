"use client";
import React, { useMemo } from "react";
import { DetailPage } from "../components/DetailPage";
import { useLanguage } from "../contexts/LanguageContext";

export default function CreatiefPage() {
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
        images: [
          "/images/creatieve industrie kop 1.jpg",
          "/images/creatieve industrie kop 2.jpg",
          "/images/creatieve industrie kop 3.jpg",
          "/images/creatieve industrie kop 4.jpg",
        ],
        heading: t("creatief.headingIntro"),
        text: t("creatief.section1"),
        imagePosition: "left" as const,
      },
      {
        images: [
          "/images/frezen kop 1.jpg",
          "/images/frezen kop 2.jpg",
          "/images/frezen kop 3.jpg",
          "/images/frezen kop 4.jpg",
        ],
        heading: t("creatief.headingFrezen"),
        text: t("creatief.section2"),
        imagePosition: "right" as const,
      },
      {
        images: [
          "/images/3d print kop 1.jpg",
          "/images/3d print  kop 2.jpg",
          "/images/3d print kop 3.jpg",
          "/images/3d print kop 4.jpg",
        ],
        heading: t("creatief.heading3dPrint"),
        text: t("creatief.section3"),
        imagePosition: "left" as const,
      },
    ],
    [t]
  );

  return (
    <DetailPage
      title={t("creatief.title")}
      sections={sections}
      menuItems={menuItems}
      socialItems={socialItems}
      hideHero
    />
  );
}

