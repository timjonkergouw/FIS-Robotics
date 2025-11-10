"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { SiteMenu } from "./components/SiteMenu";
import { Footer } from "./components/Footer";
import { AutoCarousel } from "./components/AutoCarousel";
import { useLanguage } from "./contexts/LanguageContext";

export default function Home() {
  const { t, language } = useLanguage();

  const items = useMemo(
    () => [
      { label: t("menu.home"), link: "/" },
      {
        label: t("menu.about"),
        link: "#about",
        submenu: [
          { label: t("menu.zitschalen"), link: "/zitschalen" },
          { label: t("menu.creatief"), link: "/creatief" },
          { label: t("menu.smartcam"), link: "/smartcam" },
          { label: t("menu.hardware"), link: "/hardware" }
        ]
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

  const carouselItems = useMemo(
    () => [
      {
        id: "zitschalen",
        title: t("carousel.zitschalen.title"),
        description: t("carousel.zitschalen.description"),
        image: "/images/zitschalen.jpg",
        link: "/zitschalen"
      },
      {
        id: "creatief",
        title: t("carousel.creatief.title"),
        description: t("carousel.creatief.description"),
        image: "/images/creatief.jpg",
        link: "/creatief"
      },
      {
        id: "smartcam",
        title: t("carousel.smartcam.title"),
        description: t("carousel.smartcam.description"),
        image: "/images/smartcam.jpg",
        link: "/smartcam"
      },
      {
        id: "hardware",
        title: t("carousel.hardware.title"),
        description: t("carousel.hardware.description"),
        image: "/images/hardware.jpg",
        link: "/hardware"
      }
    ],
    [t]
  );

  return (
    <main style={{ minHeight: "100dvh", position: "relative" }}>
      <SiteMenu
        items={items}
        socialItems={socialItems}
        showLogo={false}
      />

      {/* Top Section: Logo rechts, intro tekst links */}
      <section style={{ position: "relative", zIndex: 1, padding: "6rem 2rem 4rem" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Intro tekst links */}
            <div className="flex-1 text-white">
              <h1 key={`title-${language}`} className="text-4xl md:text-5xl font-bold mb-6 uppercase">
                <div>{t("home.title.line1")}</div>
                <div>{t("home.title.line2")}</div>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                {t("home.description")}
              </p>
            </div>

            {/* Logo rechts */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-32 md:w-80 md:h-40">
                <Image
                  src="/images/fis_robotics_logo.jpg"
                  alt="FIS Robotics Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Section: Gecentreerde tekst */}
      <section style={{ position: "relative", zIndex: 1, padding: "4rem 2rem" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p
            key={`quote-${language}`}
            className="text-2xl md:text-3xl font-semibold text-white leading-relaxed"
            style={{ transition: "opacity 0.2s ease-in-out" }}
          >
            &ldquo;{t("home.quote")}&rdquo;
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section style={{ position: "relative", zIndex: 1, padding: "2rem 0 6rem" }}>
        <div className="max-w-7xl mx-auto px-4">
          <AutoCarousel
            items={carouselItems}
            itemsToShow={3}
            autoScrollSpeed={4000}
          />
        </div>
      </section>

      <Footer
        aboutItems={[
          { label: t("menu.zitschalen"), link: "/zitschalen" },
          { label: t("menu.creatief"), link: "/creatief" },
          { label: t("menu.smartcam"), link: "/smartcam" },
          { label: t("menu.hardware"), link: "/hardware" }
        ]}
        socialItems={socialItems}
      />
    </main>
  );
}
