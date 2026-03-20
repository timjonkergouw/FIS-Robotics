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
        image: "",
        text: t("zitschalen.section1"),
        imagePosition: "right" as const,
      },
      {
        image: "",
        text: t("zitschalen.section2"),
        imagePosition: "left" as const,
      },
      {
        image: "",
        text: t("zitschalen.section3"),
        imagePosition: "right" as const,
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
    />
  );
}

