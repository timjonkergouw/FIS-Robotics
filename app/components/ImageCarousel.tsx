/* eslint-disable react/no-array-index-key */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type ImageCarouselProps = {
  images: string[];
  altPrefix?: string;
  // Tap/click area sizing is handled by the parent container.
};

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, altPrefix = "image" }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const touchStartX = useRef<number | null>(null);

  // Autoplay: wissel elke 5 seconden naar de volgende afbeelding.
  useEffect(() => {
    if (images.length <= 1) return;

    const id = window.setInterval(() => {
      setDirection("next");
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(id);
  }, [images.length]);

  const goNext = () => {
    if (!images.length) return;
    setDirection("next");
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    if (!images.length) return;
    setDirection("prev");
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full h-full"
      onTouchStart={(e) => {
        const x = e.touches[0]?.clientX;
        touchStartX.current = typeof x === "number" ? x : null;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current == null) return;
        const endX = e.changedTouches[0]?.clientX;
        if (typeof endX !== "number") return;
        const deltaX = endX - touchStartX.current;
        const threshold = 40;
        if (deltaX > threshold) goPrev();
        else if (deltaX < -threshold) goNext();
        touchStartX.current = null;
      }}
    >
      {images.length > 0 ? (
        <div
          key={`${index}-${direction}`}
          className={`relative w-full h-full bg-black ${direction === "next" ? "animate-slide-next" : "animate-slide-prev"
            }`}
        >
          <Image
            src={images[index]}
            alt={`${altPrefix} ${index + 1}`}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            draggable={false}
          />
        </div>
      ) : null}

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-24 w-16 items-center justify-center text-white hover:text-gray-200 transition-colors"
        aria-label="Vorige"
      >
        <span className="text-7xl leading-none drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]">‹</span>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-24 w-16 items-center justify-center text-white hover:text-gray-200 transition-colors"
        aria-label="Volgende"
      >
        <span className="text-7xl leading-none drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]">›</span>
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDirection(idx > index ? "next" : "prev");
              setIndex(idx);
            }}
            className={`w-2.5 h-2.5 rounded-full border border-white/70 transition-colors ${idx === index ? "bg-white" : "bg-white/20"
              }`}
            aria-label={`Toon afbeelding ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

