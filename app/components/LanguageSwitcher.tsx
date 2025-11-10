"use client";
import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const languages = [
    { code: "nl" as const, label: "Nederlands" },
    { code: "en" as const, label: "English" },
  ];

  return (
    <div className="sm-logo relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center text-white font-medium text-sm md:text-base px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Select language"
        aria-expanded={isOpen}
        style={{ minWidth: "80px" }}
      >
        {language === "nl" ? "NL" : "EN"}
        <svg
          className={`ml-2 w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg overflow-hidden z-50 min-w-[120px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm md:text-base text-white hover:bg-white/20 transition-colors ${
                language === lang.code ? "bg-white/15 font-semibold" : ""
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

