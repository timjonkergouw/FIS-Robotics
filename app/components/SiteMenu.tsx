"use client";
import React from "react";
import { StaggeredMenu, StaggeredMenuItem, StaggeredSocialItem } from "./StaggeredMenu";
import DarkVeil from "./DarkVeil";

interface SiteMenuProps {
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredSocialItem[];
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  isFixed?: boolean;
  position?: "left" | "right";
  showDarkVeil?: boolean;
}

export const SiteMenu: React.FC<SiteMenuProps> = ({
  items = [
    { label: "Home", link: "/" },
    {
      label: "About us",
      link: "#about",
      submenu: [
        { label: "Zitschalen/Zitortheses", link: "/zitschalen" },
        { label: "Creatieve Industrie", link: "/creatief" },
        { label: "SmartCAM", link: "/smartcam" },
        { label: "Hardware", link: "/hardware" }
      ]
    },
    { label: "Team", link: "#team" },
    { label: "Contact", link: "#contact" }
  ],
  socialItems = [
    { label: "LinkedIn", link: "https://www.linkedin.com/" },
    { label: "Facebook", link: "https://facebook.com/" },
    { label: "X", link: "https://x.com/" },
    { label: "Instagram", link: "https://instagram.com/" }
  ],
  logoUrl = "/images/fis_robotics_logo.jpg",
  menuButtonColor = "#fff",
  openMenuButtonColor = "#000",
  accentColor = "#5227FF",
  isFixed = true,
  position = "right",
  showDarkVeil = true
}) => {
  return (
    <>
      {showDarkVeil && (
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <DarkVeil />
        </div>
      )}
      <StaggeredMenu
        isFixed={isFixed}
        position={position}
        items={items}
        socialItems={socialItems}
        menuButtonColor={menuButtonColor}
        openMenuButtonColor={openMenuButtonColor}
        accentColor={accentColor}
        logoUrl={logoUrl}
        displayItemNumbering={false}
      />
    </>
  );
};

