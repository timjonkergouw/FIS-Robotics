"use client";
import React from "react";
import Image from "next/image";
import { SiteMenu } from "./SiteMenu";
import { Footer } from "./Footer";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageCarousel } from "./ImageCarousel";

interface ContentSection {
  image?: string;
  images?: string[];
  heading?: string;
  text: string;
  imagePosition: "left" | "right";
}

interface DetailPageProps {
  title: string;
  sections: ContentSection[];
  menuItems?: any[];
  socialItems?: any[];
  hideHero?: boolean;
}

export const DetailPage: React.FC<DetailPageProps> = ({
  title,
  sections,
  menuItems,
  socialItems,
  hideHero = false,
}) => {
  const { t } = useLanguage();

  return (
    <main
      style={{
        minHeight: "100dvh",
        position: "relative",
        backgroundColor: "#1A1A1A",
        backgroundImage: 'url("/images/achtergrond fis.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <SiteMenu items={menuItems} socialItems={socialItems} showLogo={false} />

      {!hideHero ? (
        /* Hero Section */
        <section
          style={{
            position: "relative",
            zIndex: 1,
            padding: "8rem 2rem 4rem",
            textAlign: "center",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-almost-textual text-white mb-8">
              {title}
            </h1>
          </div>
        </section>
      ) : null}

      {/* Content Sections */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: hideHero ? "6rem 0 6rem" : "2rem 0 6rem",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`detail-section ${
                section.imagePosition === "right" ? "detail-section-reverse" : ""
              } animate-fade-in-up-soft`}
              style={{ marginBottom: "4rem" }}
            >
              <div className="relative bg-black/40 rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Image */}
                  <div
                    className={`w-full md:w-1/2 ${
                      section.imagePosition === "right" ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div
                      className={`relative w-full h-64 md:h-96 rounded-lg overflow-hidden flex items-center justify-center ${
                        section.images && section.images.length > 0
                          ? "border-0"
                          : "border-2 border-dashed border-white/30"
                      }`}
                      style={{ backgroundColor: "transparent" }}
                    >
                      {section.images && section.images.length > 0 ? (
                        <ImageCarousel
                          images={section.images}
                          altPrefix={section.heading ?? "image"}
                        />
                      ) : section.image && section.image.length > 0 ? (
                        <Image
                          src={section.image}
                          alt={section.text.substring(0, 50)}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      ) : (
                        <span className="text-white/50 text-lg">
                          Afbeelding placeholder
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className={`w-full md:w-1/2 ${
                      section.imagePosition === "right" ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/20">
                      {section.heading ? (
                        <h2 className="text-[#414CA5] text-2xl md:text-3xl font-almost-textual mb-4">
                          {section.heading}
                        </h2>
                      ) : null}
                      <p className="text-white text-lg leading-relaxed font-verdana-bold whitespace-pre-line">
                        {section.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer
        aboutItems={[
          { label: t("menu.zitschalen"), link: "/zitschalen" },
          { label: t("menu.creatief"), link: "/creatief" },
        ]}
        socialItems={socialItems}
      />
    </main>
  );
};
