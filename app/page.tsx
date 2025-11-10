"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { SiteMenu } from "./components/SiteMenu";
import { Footer } from "./components/Footer";
import { AutoCarousel } from "./components/AutoCarousel";

export default function Home() {
  const items = useMemo(
    () => [
      { label: "Home", link: "/" },
      {
        label: "About us",
        link: "#about",
        submenu: [
          { label: "Zitschalen/Zitortheses", link: "#zitschalen" },
          { label: "Creatieve Industrie", link: "#creatief" },
          { label: "SmartCAM", link: "#smartcam" },
          { label: "Hardware", link: "#hardware" }
        ]
      },
      { label: "Team", link: "#team" },
      { label: "Contact", link: "#contact" },
    ],
    []
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
        title: "Zitschalen / Zitortheses",
        description: "Innovatieve zitoplossingen op maat gemaakt voor optimaal comfort en ondersteuning. Onze zitschalen en zitortheses worden met precisie ontworpen en geproduceerd.",
        image: "/images/zitschalen.jpg",
        link: "/zitschalen"
      },
      {
        id: "creatief",
        title: "Creatieve Industrie",
        description: "We combineren technologie met creativiteit om unieke oplossingen te ontwikkelen voor de creatieve sector. Van kunstinstallaties tot interactieve ervaringen.",
        image: "/images/creatief.jpg",
        link: "/creatief"
      },
      {
        id: "smartcam",
        title: "SmartCAM",
        description: "Geavanceerde CAM-software voor precisiebewerking en geautomatiseerde productieprocessen. Optimaliseer uw productie met intelligente technologie.",
        image: "/images/smartcam.jpg",
        link: "/smartcam"
      },
      {
        id: "hardware",
        title: "Hardware",
        description: "Robuuste en betrouwbare hardwareoplossingen voor diverse toepassingen. Van elektronische componenten tot complete systemen op maat.",
        image: "/images/hardware.jpg",
        link: "/hardware"
      }
    ],
    []
  );

  return (
    <main style={{ minHeight: "100dvh", position: "relative" }}>
      <SiteMenu
        items={items}
        socialItems={socialItems}
      />

      {/* Top Section: Logo rechts, intro tekst links */}
      <section style={{ position: "relative", zIndex: 1, padding: "6rem 2rem 4rem" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Intro tekst links */}
            <div className="flex-1 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Welkom bij FIS Robotics
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                FIS Robotics is een innovatief bedrijf gespecialiseerd in geavanceerde technologieën
                en maatwerkoplossingen. We combineren expertise in robotica, software-ontwikkeling en
                hardware-engineering om oplossingen te creëren die het verschil maken. Van medische
                hulpmiddelen tot creatieve industrieën, wij zetten technologie in voor een betere toekomst.
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
          <p className="text-2xl md:text-3xl font-semibold text-white leading-relaxed">
            &ldquo;Innovatie door technologie, oplossingen op maat&rdquo;
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
          { label: "Zitschalen / Zitortheses", link: "/zitschalen" },
          { label: "Creatieve Industrie", link: "/creatief" },
          { label: "SmartCAM", link: "/smartcam" },
          { label: "Hardware", link: "/hardware" }
        ]}
        socialItems={socialItems}
      />
    </main>
  );
}
