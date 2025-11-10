"use client";
import React, { useMemo } from "react";
import { SiteMenu } from "../components/SiteMenu";
import { Footer } from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

export default function TeamPage() {
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
    <main style={{ minHeight: "100dvh", position: "relative" }}>
      <SiteMenu items={menuItems} socialItems={socialItems} showLogo={false} />

      {/* Team Section */}
      <section style={{ position: "relative", zIndex: 1, padding: "8rem 2rem 6rem" }}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              {t("team.title")}
            </h1>
            
            {/* First row: 3 team members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Second row: 3 team members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {teamMembers.slice(3, 6).map((member, index) => (
                <div key={index + 3} className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Third row: 1 team member centered */}
            <div className="flex justify-center">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {teamMembers[6].name}
                </h3>
                <p className="text-lg md:text-xl text-gray-300">
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
          { label: t("menu.smartcam"), link: "/smartcam" },
          { label: t("menu.hardware"), link: "/hardware" },
        ]}
        socialItems={socialItems}
      />
    </main>
  );
}

