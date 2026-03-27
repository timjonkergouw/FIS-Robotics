"use client";
import { useMemo } from "react";
import Image from "next/image";
import { SiteMenu } from "../components/SiteMenu";
import { Footer } from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

export default function TeamPage() {
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

  const teamMembers = useMemo(
    () => [
      { name: "Kris Schroyen", role: t("team.roles.founderEngineering") },
      { name: "Jan van Esch", role: t("team.roles.founderFinance") },
      { name: "Joren Vandelaer", role: t("team.roles.softwareDev") },
      { name: "Yannick Aerts", role: t("team.roles.printingMaterials") },
      { name: "Bas Jonkergouw", role: t("team.roles.businessIllustrator") },
      { name: "Mario Bas", role: t("team.roles.operator") },
      { name: "Liberty Brummelstroete", role: t("team.roles.administration") },
    ],
    [t]
  );

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

      {/* Team Section */}
      <section style={{ position: "relative", zIndex: 1, padding: "10rem 2rem 6rem" }}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-almost-textual text-white mb-12 text-center">
              {t("team.title")}
            </h1>
            
            {/* First row: 3 team members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 font-normal">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Second row: 3 team members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {teamMembers.slice(3, 6).map((member, index) => (
                <div key={index + 3} className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 font-normal">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Third row: 1 team member centered */}
            <div className="flex justify-center">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {teamMembers[6].name}
                </h3>
                <p className="text-base md:text-lg text-gray-300 font-normal">
                  {teamMembers[6].role}
                </p>
              </div>
            </div>
          </div>
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
}

