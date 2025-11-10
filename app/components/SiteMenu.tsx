"use client";
import React, { useEffect, useRef } from "react";
import { StaggeredMenu, StaggeredMenuItem, StaggeredSocialItem } from "./StaggeredMenu";
import DarkVeil from "./DarkVeil";

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
  position = "right",
  showDarkVeil = true
}) => {
  const veilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showDarkVeil || !veilRef.current) return;

    const updateHeight = () => {
      const main = veilRef.current?.closest('main');
      if (main && veilRef.current) {
        const mainHeight = main.scrollHeight;
        veilRef.current.style.height = `${mainHeight}px`;
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    // Use MutationObserver to watch for content changes
    const observer = new MutationObserver(updateHeight);
    const main = veilRef.current?.closest('main');
    if (main) {
      observer.observe(main, { childList: true, subtree: true, attributes: true });
    }

    return () => {
      window.removeEventListener('resize', updateHeight);
      observer.disconnect();
    };
  }, [showDarkVeil]);

  return (
    <>
      {showDarkVeil && (
        <div ref={veilRef} style={{ position: "absolute", inset: 0, zIndex: 0, minHeight: "100vh" }}>
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
        showLogo={showLogo}
        displayItemNumbering={false}
      />
    </>
  );
};

