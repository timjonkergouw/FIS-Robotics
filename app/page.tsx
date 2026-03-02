"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
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

      {/* Top Section: Cirkel met logo en vier pagina-cirkels */}
      <section style={{ position: "relative", zIndex: 1, padding: "6rem 2rem 4rem" }}>
        <div className="max-w-5xl mx-auto flex flex-col items-center text-white gap-10">
          {/* Centrale cirkel met logo en omringende navigatiecirkels */}
          <div className="relative w-80 h-80 md:w-[26rem] md:h-[26rem] lg:w-[30rem] lg:h-[30rem]">
            {/* Centrale cirkel met logo */}
            <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-44 md:h-44 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.4)]">
              <div className="relative w-28 h-28 md:w-32 md:h-32">
                <Image
                  src="/images/fis-icon.png"
                  alt="FIS Robotics Logo"
                  fill
                  className="object-contain"
                  priority
                  style={{ filter: "drop-shadow(0 2px 8px rgba(255,255,255,0.9)) drop-shadow(0 0 18px rgba(255,255,255,0.6))" }}
                />
              </div>
            </div>

            {/* Linksboven: Zitschalen / Zitortheses */}
            <Link
              href="/zitschalen"
              className="group absolute left-[8%] top-[8%] w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center text-center text-xs md:text-sm font-semibold hover:bg-white/25 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-transform transition-colors duration-200 cursor-pointer"
            >
              <span className="px-3 leading-snug">
                {t("menu.zitschalen")}
              </span>
            </Link>

            {/* Rechtsboven: Creatieve Industrie */}
            <Link
              href="/creatief"
              className="group absolute right-[8%] top-[8%] w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center text-center text-xs md:text-sm font-semibold hover:bg-white/25 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-transform transition-colors duration-200 cursor-pointer"
            >
              <span className="px-3 leading-snug">
                {t("menu.creatief")}
              </span>
            </Link>

            {/* Linksonder: SmartCAM */}
            <Link
              href="/smartcam"
              className="group absolute left-[8%] bottom-[8%] w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center text-center text-xs md:text-sm font-semibold hover:bg-white/25 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-transform transition-colors duration-200 cursor-pointer"
            >
              <span className="px-3 leading-snug">
                {t("menu.smartcam")}
              </span>
            </Link>

            {/* Rechtsonder: Hardware */}
            <Link
              href="/hardware"
              className="group absolute right-[8%] bottom-[8%] w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center text-center text-xs md:text-sm font-semibold hover:bg-white/25 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-transform transition-colors duration-200 cursor-pointer"
            >
              <span className="px-3 leading-snug">
                {t("menu.hardware")}
              </span>
            </Link>
          </div>

          {/* Titel en beschrijving onder de cirkels */}
          <div className="max-w-2xl text-center">
            <h1
              key={`title-${language}`}
              className="text-3xl md:text-4xl font-bold mb-4 uppercase"
            >
              <div>{t("home.title.line1")}</div>
              <div>{t("home.title.line2")}</div>
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              {t("home.description")}
            </p>
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
