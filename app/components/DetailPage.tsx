"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { SiteMenu } from "./SiteMenu";
import { Footer } from "./Footer";

interface ContentSection {
  image: string;
  text: string;
  imagePosition: "left" | "right";
}

interface DetailPageProps {
  title: string;
  sections: ContentSection[];
  menuItems?: any[];
  socialItems?: any[];
}

export const DetailPage: React.FC<DetailPageProps> = ({
  title,
  sections,
  menuItems,
  socialItems,
}) => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const refs = sectionRefs.current;
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [sections.length]);

  return (
    <main style={{ minHeight: "100dvh", position: "relative" }}>
      <SiteMenu items={menuItems} socialItems={socialItems} showLogo={false} />

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "8rem 2rem 4rem",
          textAlign: "center",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            {title}
          </h1>
        </div>
      </section>

      {/* Content Sections */}
      <section
        style={{ position: "relative", zIndex: 1, padding: "2rem 0 6rem" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className={`detail-section ${
                section.imagePosition === "right" ? "detail-section-reverse" : ""
              }`}
              style={{
                marginBottom: "4rem",
              }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Image */}
                <div
                  className={`w-full md:w-1/2 ${
                    section.imagePosition === "right" ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
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
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`w-full md:w-1/2 ${
                    section.imagePosition === "right" ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/20">
                    <p className="text-white text-lg leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer
        aboutItems={[
          { label: "Zitschalen / Zitortheses", link: "/zitschalen" },
          { label: "Creatieve Industrie", link: "/creatief" },
          { label: "SmartCAM", link: "/smartcam" },
          { label: "Hardware", link: "/hardware" },
        ]}
        socialItems={socialItems}
      />
    </main>
  );
};

