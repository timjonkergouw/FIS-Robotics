"use client";
import React, { useMemo } from "react";
import { DetailPage } from "../components/DetailPage";
import { useLanguage } from "../contexts/LanguageContext";

export default function CreatiefPage() {
  const { t } = useLanguage();

  const menuItems = useMemo(
    () => [
      { label: t("menu.home"), link: "/" },
      {
        label: t("menu.about"),
        link: "#about",
        submenu: [
          { label: t("menu.zitschalen"), link: "/zitschalen" },
          { label: t("menu.creatief"), link: "/creatief" },
          { label: t("menu.smartcam"), link: "/smartcam" },
          { label: t("menu.hardware"), link: "/hardware" },
        ],
      },
      { label: t("menu.team"), link: "/team" },
      { label: t("menu.contact"), link: "#contact" },
    ],
    [t]
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

