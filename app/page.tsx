"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteMenu } from "./components/SiteMenu";
import { Footer } from "./components/Footer";
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
          { label: t("menu.creatief"), link: "/creatief" }
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

  const creativeImages = useMemo(
    () => ["/images/ci1.jpg", "/images/ci2.jpg", "/images/ci3.jpg", "/images/ci4.jpg", "/images/ci5.jpg", "/images/ci6.jpg"],
    []
  );
  const [creativeIndex, setCreativeIndex] = useState(0);

  const zitschalenImages = useMemo(
    () => ["/images/zito1.jpg", "/images/zito2.jpg", "/images/zito3.jpg", "/images/zito4.jpg"],
    []
  );
  const [zitschalenIndex, setZitschalenIndex] = useState(0);

  useEffect(() => {
    const zitschalenTimer = setInterval(() => {
      setZitschalenIndex((prev) => (prev + 1) % zitschalenImages.length);
    }, 5000);

    const creativeTimer = setInterval(() => {
      setCreativeIndex((prev) => (prev + 1) % creativeImages.length);
    }, 5000);

    return () => {
      clearInterval(zitschalenTimer);
      clearInterval(creativeTimer);
    };
  }, [zitschalenImages.length, creativeImages.length]);

  return (
    <main style={{ minHeight: "100dvh", position: "relative" }}>
      <SiteMenu
        items={items}
        socialItems={socialItems}
        showLogo={false}
      />

      {/* Hero section */}
      <section className="pt-28 pb-10 px-4 text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
          {/* FIS logo */}
          <div className="relative mb-4 group">
            <div className="relative mx-auto w-52 h-32 sm:w-64 sm:h-40 md:w-80 md:h-48 transition-transform duration-300 group-hover:scale-115">
              <Image
                src="/images/fis-icon.png"
                alt="FIS Robotics"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(37,99,255,0.9)] group-hover:drop-shadow-[0_0_55px_rgba(37,99,255,1)]"
                priority
                sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, 320px"
              />
            </div>
          </div>

          {/* Ellipse buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href="/zitschalen"
              className="min-w-[280px] sm:min-w-[320px] h-14 sm:h-16 flex items-center justify-center rounded-[50%] bg-[#3d3d3d] text-xs sm:text-sm text-white border border-black/60 shadow-md hover:bg-[#4a4a4a] hover:scale-105 transition-all duration-200"
            >
              <span className="inline-flex flex-col items-center font-almost-textual">
                <span>{t("home.hero.zitschalenTitle")}</span>
                <span className="mt-0.5 h-1 w-full bg-[#2563ff] rounded-none" />
              </span>
            </Link>
            <Link
              href="/creatief"
              className="min-w-[280px] sm:min-w-[320px] h-14 sm:h-16 flex items-center justify-center rounded-[50%] bg-[#3d3d3d] text-xs sm:text-sm text-white border border-black/60 shadow-md hover:bg-[#4a4a4a] hover:scale-105 transition-all duration-200"
            >
              <span className="inline-flex flex-col items-center font-almost-textual">
                <span>{t("home.hero.creatiefTitle")}</span>
                <span className="mt-0.5 h-1 w-full bg-[#2563ff] rounded-none" />
              </span>
            </Link>
          </div>

          {/* Slogan + underline + subtext */}
          <div className="flex flex-col items-center gap-3">
            <div className="inline-flex flex-col items-center">
              <h1 className="font-almost-textual text-2xl sm:text-3xl">
                {t("home.hero.slogan")}
              </h1>
              <div className="h-2 w-full bg-[#2563ff] rounded-none mt-1" />
            </div>
            <p className="font-verdana-bold text-[11px] sm:text-xs text-gray-200 max-w-md leading-relaxed">
              {t("home.hero.subtext")}
            </p>
          </div>
        </div>
      </section>

      {/* Central highlight box with looping video */}
      <section className="pb-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl border-[6px] border-[#2563ff] bg-[#d9d9d9] h-56 sm:h-64 md:h-72 shadow-[0_0_25px_rgba(37,99,255,0.45)] overflow-hidden flex items-center justify-center">
            <video
              src="/images/fisideo.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </section>

      {/* Bottom cards */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
          {/* Zitschalen card */}
          <div className="flex-1 bg-[#181818] border border-white/15 rounded-xl overflow-hidden shadow-md">
            <div className="relative h-52 sm:h-60 bg-[#d9d9d9] overflow-hidden">
              <div key={zitschalenIndex} className="relative w-full h-full animate-fade-in-up-soft">
                <Image
                  src={zitschalenImages[zitschalenIndex]}
                  alt={`Zitschalen ${zitschalenIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setZitschalenIndex((prev) => (prev - 1 + zitschalenImages.length) % zitschalenImages.length);
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Vorige zitschalen afbeelding"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setZitschalenIndex((prev) => (prev + 1) % zitschalenImages.length);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Volgende zitschalen afbeelding"
              >
                ›
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {zitschalenImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      setZitschalenIndex(idx);
                    }}
                    className={`w-2.5 h-2.5 rounded-full border border-white/70 transition-colors ${idx === zitschalenIndex ? "bg-white" : "bg-white/20"
                      }`}
                    aria-label={`Toon zitschalen afbeelding ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="p-4 sm:p-5 text-white flex flex-col gap-3">
              <div className="inline-flex flex-col items-start mb-3 w-fit">
                <h3 className="font-almost-textual text-base sm:text-lg">
                  {t("home.cards.zitschalenTitle")}
                </h3>
                <div className="h-2 w-full bg-[#2563ff] rounded-none mt-1" />
              </div>
              <p className="font-verdana-bold text-[11px] sm:text-xs text-gray-200 leading-relaxed">
                {t("home.cards.zitschalenBody")}
              </p>
              <div>
                <Link
                  href="/zitschalen"
                  className="inline-flex items-center justify-center px-5 py-2 bg-[#2563ff] text-[11px] sm:text-xs font-verdana-bold text-white hover:bg-[#3b82ff] transition-colors rounded-none"
                >
                  {t("home.cards.moreDetails")}
                </Link>
              </div>
            </div>
          </div>

          {/* Creative Industry card */}
          <div className="flex-1 bg-[#181818] border border-white/15 rounded-xl overflow-hidden shadow-md">
            <div className="relative h-52 sm:h-60 bg-[#d9d9d9] overflow-hidden">
              <div key={creativeIndex} className="relative w-full h-full animate-fade-in-up-soft">
                <Image
                  src={creativeImages[creativeIndex]}
                  alt={`Creative industry ${creativeIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setCreativeIndex((prev) => (prev - 1 + creativeImages.length) % creativeImages.length);
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Vorige creative industry afbeelding"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setCreativeIndex((prev) => (prev + 1) % creativeImages.length);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Volgende creative industry afbeelding"
              >
                ›
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {creativeImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      setCreativeIndex(idx);
                    }}
                    className={`w-2.5 h-2.5 rounded-full border border-white/70 transition-colors ${idx === creativeIndex ? "bg-white" : "bg-white/20"
                      }`}
                    aria-label={`Toon afbeelding ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="p-4 sm:p-5 text-white flex flex-col gap-3">
              <div className="inline-flex flex-col items-start mb-3 w-fit">
                <h3 className="font-almost-textual text-base sm:text-lg">
                  {t("home.cards.creatiefTitle")}
                </h3>
                <div className="h-2 w-full bg-[#2563ff] rounded-none mt-1" />
              </div>
              <p className="font-verdana-bold text-[11px] sm:text-xs text-gray-200 leading-relaxed">
                {t("home.cards.creatiefBody")}
              </p>
              <div>
                <Link
                  href="/creatief"
                  className="inline-flex items-center justify-center px-5 py-2 bg-[#2563ff] text-[11px] sm:text-xs font-verdana-bold text-white hover:bg-[#3b82ff] transition-colors rounded-none"
                >
                  {t("home.cards.moreDetails")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        aboutItems={[
          { label: t("menu.zitschalen"), link: "/zitschalen" },
          { label: t("menu.creatief"), link: "/creatief" }
        ]}
        socialItems={socialItems}
      />
    </main>
  );
}
