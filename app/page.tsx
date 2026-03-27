"use client";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteMenu } from "./components/SiteMenu";
import { Footer } from "./components/Footer";
import { ImageCarousel } from "./components/ImageCarousel";
import { useLanguage } from "./contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const items = useMemo(
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

  const creativeImages = useMemo(
    () => ["/images/ci1.jpg", "/images/ci2.jpg", "/images/ci3.jpg", "/images/ci4.jpg", "/images/ci5.jpg", "/images/ci6.jpg"],
    []
  );

  const zitschalenImages = useMemo(
    () => ["/images/zitschalen2.png", "/images/zitschalen3.png", "/images/zitschalen4.png"],
    []
  );

  return (
    <main className="relative min-h-[100dvh]">
      <SiteMenu
        items={items}
        socialItems={socialItems}
        showLogo={false}
      />

      {/* Header logo (bovenaan, midden) */}
      <header
        className="absolute left-1/2 top-0 -translate-x-1/2 z-[45] pointer-events-none"
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 10px)" }}
      >
        <div className="relative w-40 h-24 sm:w-52 sm:h-28 md:w-64 md:h-32">
          <div className="absolute inset-0 -z-10 rounded-full bg-white/70 blur-3xl scale-110" />
          <Image
            src="/images/fis-plakaat.png"
            alt="FIS Robotics"
            fill
            className="object-contain drop-shadow-[0_0_90px_rgba(255,255,255,1)]"
            priority
            sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, 256px"
          />
        </div>
      </header>

      {/* Hero section */}
      <section className="pb-10 text-white" style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 120px)" }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4 px-4">
          {/* FIRST IN SERVICE + quote daaronder */}
          <div className="flex flex-col items-center">
            <div className="inline-flex flex-col items-center">
              <h1 className="font-almost-textual text-2xl sm:text-3xl inline-block">
                {(() => {
                  const cleaned = t("home.hero.slogan").replaceAll('"', "").replace(/\.$/, "");
                  const words = cleaned.split(/\s+/).filter(Boolean);
                  return words.map((w, idx) => {
                    const first = w[0] ?? "";
                    const rest = w.slice(1);
                    return (
                      <span key={idx}>
                        <span className="text-[#0808C8]">{first}</span>
                        {rest}
                        {idx < words.length - 1 ? " " : null}
                      </span>
                    );
                  });
                })()}
              </h1>
              {/* Only under the slogan text (not expanded by the quote/subtext width) */}
              <div className="h-2 bg-[#0808C8] rounded-none mt-1 w-full" />
            </div>
            <p className="font-verdana-bold text-[11px] sm:text-xs text-gray-200 leading-relaxed mt-3 max-w-md px-4">
              {t("home.hero.subtext")}
            </p>
          </div>
        </div>

        {/* Video full width (altijd zichtbaar in z'n eigen aspect container) */}
        <div className="w-full max-w-4xl mx-auto mt-6 px-4 md:px-0">
          <div className="w-full aspect-video rounded-3xl border-[6px] border-[#0808C8] bg-black shadow-[0_0_25px_rgba(8,8,200,0.45)] overflow-hidden flex items-center justify-center">
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
            <div className="relative h-52 sm:h-60 bg-black overflow-hidden">
              <ImageCarousel images={zitschalenImages} altPrefix="zitschalen" />
            </div>
            <div className="p-4 sm:p-5 pt-4 pb-0 max-[639px]:pb-4 text-white flex flex-col gap-3">
              <div className="inline-flex flex-col items-start mb-3 w-fit">
                <h3 className="font-almost-textual text-base sm:text-lg">
                  {t("home.cards.zitschalenTitle")}
                </h3>
                <div className="h-2 w-full bg-[#0808C8] rounded-none mt-1" />
              </div>
              <p className="font-verdana-bold text-[11px] sm:text-xs text-gray-200 leading-relaxed">
                {t("home.cards.zitschalenBody")}
              </p>
              <Link
                href="/zitschalen"
                className="mt-3 inline-flex items-center justify-center w-full px-5 py-3 bg-[#0808C8] text-[11px] sm:text-xs font-verdana-bold text-white hover:bg-[#0808C8] transition-colors rounded-md"
              >
                {t("home.cards.moreDetails")}
              </Link>
            </div>
          </div>

          {/* Creative Industry card */}
          <div className="flex-1 bg-[#181818] border border-white/15 rounded-xl overflow-hidden shadow-md">
            <div className="relative h-52 sm:h-60 bg-black overflow-hidden">
              <ImageCarousel images={creativeImages} altPrefix="creative industry" />
            </div>
            <div className="p-4 sm:p-5 pt-4 pb-0 max-[639px]:pb-4 text-white flex flex-col gap-3">
              <div className="inline-flex flex-col items-start mb-3 w-fit">
                <h3 className="font-almost-textual text-base sm:text-lg">
                  {t("home.cards.creatiefTitle")}
                </h3>
                <div className="h-2 w-full bg-[#0808C8] rounded-none mt-1" />
              </div>
              <p className="font-verdana-bold text-[11px] sm:text-xs text-gray-200 leading-relaxed">
                {t("home.cards.creatiefBody")}
              </p>
              <Link
                href="/creatief"
                className="mt-3 inline-flex items-center justify-center w-full px-5 py-3 bg-[#0808C8] text-[11px] sm:text-xs font-verdana-bold text-white hover:bg-[#0808C8] transition-colors rounded-md"
              >
                {t("home.cards.moreDetails")}
              </Link>
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
