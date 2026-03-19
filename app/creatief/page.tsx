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
        image: "/images/creatief.jpg",
        text: t("creatief.section1"),
        imagePosition: "left" as const,
      },
      {
        image: "/images/creatief2.jpg",
        text: t("creatief.section2"),
        imagePosition: "right" as const,
      },
      {
        image: "/images/creatief3.jpg",
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
    />
  );
}

