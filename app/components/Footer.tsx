"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

interface FooterProps {
  logoUrl?: string;
  email?: string;
  phone?: string;
  address?: string;
  aboutItems?: Array<{ label: string; link: string }>;
  socialItems?: Array<{ label: string; link: string }>;
}

export const Footer: React.FC<FooterProps> = ({
  logoUrl = "/images/fis_robotics_logo.jpg",
  email = "info@fisrobotics.be",
  phone = "+31 6 123456789",
  address = "Goudstraat 13, Genk 1234AB",
  aboutItems = [
    { label: "Zitschalen / Zitortheses", link: "/zitschalen" },
    { label: "Creatieve Industrie", link: "/creatief" },
    { label: "SmartCAM", link: "/smartcam" },
    { label: "Hardware", link: "/hardware" }
  ],
  socialItems = [
    { label: "LinkedIn", link: "https://www.linkedin.com/" },
    { label: "Facebook", link: "https://facebook.com/" },
    { label: "X", link: "https://x.com/" },
    { label: "Instagram", link: "https://instagram.com/" }
  ]
}) => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-black text-white" style={{ position: "relative", zIndex: 1 }}>
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
              />
            </div>
          </div>

          {/* Mobile: 3 columns side by side */}
          <div className="w-full md:hidden grid grid-cols-3 gap-4">
            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-3">{t("footer.contact")}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={`mailto:${email}`} className="hover:text-gray-300 transition-colors">
                    {email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-gray-300 transition-colors">
                    {phone}
                  </a>
                </li>
                <li className="hover:text-gray-300 transition-colors">
                  {address}
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-lg font-bold mb-3">{t("footer.about")}</h3>
              <ul className="space-y-2 text-sm">
                {aboutItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} className="hover:text-gray-300 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-lg font-bold mb-3">{t("footer.socials")}</h3>
              <ul className="space-y-2 text-sm">
                {socialItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop: Original layout */}
          <div className="hidden md:flex flex-1 gap-8 md:gap-12">
            {/* Contact - Midden links */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-4">{t("footer.contact")}</h3>
              <ul className="space-y-2">
                <li>
                  <a href={`mailto:${email}`} className="hover:text-gray-300 transition-colors">
                    {email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-gray-300 transition-colors">
                    {phone}
                  </a>
                </li>
                <li className="hover:text-gray-300 transition-colors">
                  {address}
                </li>
              </ul>
            </div>

            {/* About - Midden rechts */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-4">{t("footer.about")}</h3>
              <ul className="space-y-2">
                {aboutItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} className="hover:text-gray-300 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials - Rechts */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-4">{t("footer.socials")}</h3>
              <ul className="space-y-2">
                {socialItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

