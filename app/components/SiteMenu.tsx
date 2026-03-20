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
    { label: "Zitschalen/Zitortheses", link: "/zitschalen" },
    { label: "Creatieve Industrie", link: "/creatief" },
    { label: "Team", link: "/team" }
  ],
  socialItems = [
    { label: "Facebook", link: "https://www.facebook.com/FISRobotics?locale=nl_NL" },
    { label: "Instagram", link: "https://www.instagram.com/fisrobotics/" }
  ],
  logoUrl = "/images/fis_robotics_logo.jpg",
  showLogo = true,
  menuButtonColor = "#fff",
  openMenuButtonColor = "#000",
  accentColor = "#0808C8",
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

