"use client";
import React from "react";
import { StaggeredMenu, StaggeredMenuItem, StaggeredSocialItem } from "./StaggeredMenu";

interface SiteMenuProps {
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredSocialItem[];
  logoUrl?: string;
  showLogo?: boolean;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  isFixed?: boolean;
  position?: "left" | "right";
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
    { label: "Team", link: "/team" },
    { label: "Contact", link: "#contact" }
  ],
  socialItems = [
    { label: "LinkedIn", link: "https://www.linkedin.com/" },
    { label: "Facebook", link: "https://facebook.com/" },
    { label: "X", link: "https://x.com/" },
    { label: "Instagram", link: "https://instagram.com/" }
  ],
  logoUrl = "/images/fis_robotics_logo.jpg",
  showLogo = true,
  menuButtonColor = "#fff",
  openMenuButtonColor = "#000",
  accentColor = "#5227FF",
  isFixed = true,
  position = "right"
}) => {
  return (
    <StaggeredMenu
      isFixed={isFixed}
      position={position}
      items={items}
      socialItems={socialItems}
      menuButtonColor={menuButtonColor}
      openMenuButtonColor={openMenuButtonColor}
      accentColor={accentColor}
      logoUrl={logoUrl}
      showLogo={showLogo}
      displayItemNumbering={false}
    />
  );
};

