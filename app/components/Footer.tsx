"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { FaFacebook, FaInstagram } from "react-icons/fa";

interface FooterProps {
  logoUrl?: string;
  email?: string;
  phone?: string;
  address?: string;
  aboutItems?: Array<{ label: string; link: string }>;
  socialItems?: Array<{ label: string; link: string }>;
}

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: <FaFacebook size={24} />,
  Instagram: <FaInstagram size={24} />,
};

export const Footer: React.FC<FooterProps> = ({
  logoUrl = "/images/fis-plakaat.png",
  email = "info@fisrobotics.be",
  address = "Bosdel 54, 3600 Genk, België",
  aboutItems = [
    { label: "Zitschalen / Zitortheses", link: "/zitschalen" },
    { label: "Creatieve Industrie", link: "/creatief" }
  ],
  socialItems = [
    { label: "Facebook", link: "https://www.facebook.com/FISRobotics?locale=nl_NL" },
    { label: "Instagram", link: "https://www.instagram.com/fisrobotics/" }
  ]
}) => {
  const { t } = useLanguage();

  return (
    <footer
      className="text-white"
      style={{
        position: "relative",
        zIndex: 1,
        background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          {/* Logo - Links (hidden on mobile) */}
          <div className="hidden md:block flex-shrink-0">
            <div className="relative w-48 h-24 md:w-56 md:h-28">
              <Image
                src={logoUrl}
                alt="FIS Robotics Logo"
                fill
                className="object-contain"
                style={{ filter: "drop-shadow(0 2px 8px rgba(255,255,255,0.9)) drop-shadow(0 0 18px rgba(255,255,255,0.6))" }}
              />
            </div>
          </div>

          {/* Mobile: Stacked vertically */}
          <div className="w-full md:hidden flex flex-col gap-6">
            {/* Contact */}
            <div>
              <h3 className="text-base mb-2 font-almost-textual">{t("footer.contact")}</h3>
              <ul className="space-y-1.5 text-xs font-verdana-bold">
                <li>
                  <a href={`mailto:${email}`} className="hover:text-gray-300 transition-colors">
                    {email}
                  </a>
                </li>
                <li className="hover:text-gray-300 transition-colors">
                  {address}
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-base mb-2 font-almost-textual">{t("footer.about")}</h3>
              <ul className="space-y-1.5 text-xs font-verdana-bold">
                {aboutItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} className="hover:text-gray-300 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Desktop: Original layout */}
          <div className="hidden md:flex flex-1 gap-8 md:gap-12">
            {/* Contact - Midden links */}
            <div className="flex-1">
              <h3 className="text-xl mb-4 font-almost-textual">{t("footer.contact")}</h3>
              <ul className="space-y-2 font-verdana-bold text-sm">
                <li>
                  <a href={`mailto:${email}`} className="hover:text-gray-300 transition-colors">
                    {email}
                  </a>
                </li>
                <li className="hover:text-gray-300 transition-colors">
                  {address}
                </li>
              </ul>
            </div>

            {/* About - Midden rechts */}
            <div className="flex-1">
              <h3 className="text-xl mb-4 font-almost-textual">{t("footer.about")}</h3>
              <ul className="space-y-2 font-verdana-bold text-sm">
                {aboutItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} className="hover:text-gray-300 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Social icons rechtsonder */}
        <div className="flex justify-end mt-8">
          <div className="flex gap-4">
            {socialItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label={item.label}
              >
                {socialIcons[item.label] || item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

