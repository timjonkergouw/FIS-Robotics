"use client";
import React, { useMemo } from "react";
import { StaggeredMenu } from "../components/StaggeredMenu";
import DarkVeil from "../components/DarkVeil";

export default function Page() {
    const items = useMemo(
        () => [
            { label: "Home", link: "/" },
            { label: "Projects", link: "#projects" },
            { label: "Team", link: "#team" },
            { label: "Contact", link: "#contact" },
        ],
        []
    );

    const socialItems = useMemo(
        () => [
            { label: "GitHub", link: "https://github.com/" },
            { label: "LinkedIn", link: "https://www.linkedin.com/" },
            { label: "X", link: "https://x.com/" },
        ],
        []
    );

    return (
        <main style={{ minHeight: "100dvh", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <DarkVeil />
            </div>
            <StaggeredMenu
                isFixed
                position="right"
                items={items}
                socialItems={socialItems}
                menuButtonColor="#fff"
                openMenuButtonColor="#000"
                accentColor="#5227FF"
            />
            <section style={{ position: "relative", zIndex: 1, padding: "8rem 2rem" }}>
                <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 16 }}>FIS Robotics</h1>
                <p>Welkom op de FIS Robotics pagina.</p>
            </section>
        </main>
    );
}


