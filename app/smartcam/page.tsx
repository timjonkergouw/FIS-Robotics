"use client";
import React, { useMemo } from "react";
import { DetailPage } from "../components/DetailPage";
import { useLanguage } from "../contexts/LanguageContext";

export default function SmartCAMPage() {
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
        image: "/images/smartcam.jpg",
        text: t("smartcam.section1"),
        imagePosition: "left" as const,
      },
      {
        image: "/images/smartcam2.jpg",
        text: t("smartcam.section2"),
        imagePosition: "right" as const,
      },
      {
        image: "/images/smartcam3.jpg",
        text: t("smartcam.section3"),
        imagePosition: "left" as const,
      },
    ],
    [t]
  );

  return (
    <DetailPage
      title={t("smartcam.title")}
      sections={sections}
      menuItems={menuItems}
      socialItems={socialItems}
    />
  );
}

