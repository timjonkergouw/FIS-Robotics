"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface AutoCarouselProps {
  items: CarouselItem[];
  itemsToShow?: number;
  autoScrollSpeed?: number;
}

export const AutoCarousel: React.FC<AutoCarouselProps> = ({
  items,
  itemsToShow = 3,
  autoScrollSpeed = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Duplicate items for seamless infinite scroll
  // We duplicate enough to allow smooth looping
  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    // Small delay to ensure initial render
    const initTimeout = setTimeout(() => {
      setIsTransitioning(true);
    }, 100);

    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          // When we reach the end, reset to 0 without animation
          if (nextIndex > items.length) {
            // Reset immediately without transition
            setTimeout(() => {
              setIsTransitioning(false);
              setCurrentIndex(0);
              // Re-enable transition after reset
              setTimeout(() => {
                setIsTransitioning(true);
              }, 50);
            }, 700); // Wait for transition to complete
            return items.length; // This will show the duplicate set
          }
          return nextIndex;
        });
      }, autoScrollSpeed);
    };

    startAutoScroll();

    return () => {
      clearTimeout(initTimeout);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [items.length, autoScrollSpeed]);

  // Calculate translateX based on current index
  const translateX = -(currentIndex * (100 / itemsToShow));

  return (
    <div className="w-full overflow-hidden py-8 relative">
      <div
        ref={carouselRef}
        className="flex"
        style={{
          transform: `translateX(${translateX}%)`,
          transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 px-4"
            style={{ width: `${100 / itemsToShow}%` }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col shadow-lg border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
              
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-800">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow text-sm leading-relaxed">
                {item.description}
              </p>
              
              <Link
                href={item.link}
                className="inline-block bg-[#5227FF] hover:bg-[#3d1fcc] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-center"
              >
                Meer informatie
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

