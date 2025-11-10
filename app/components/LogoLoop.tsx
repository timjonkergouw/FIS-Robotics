"use client";
import React, { useEffect, useRef, useState, useMemo } from 'react';

type LogoItem = {
    node: React.ReactNode;
    title: string;
    href: string;
};

type LogoLoopProps = {
    logos: LogoItem[];
    speed?: number;
    direction?: 'left' | 'right';
    logoHeight?: number;
    gap?: number;
    pauseOnHover?: boolean;
    scaleOnHover?: boolean;
    fadeOut?: boolean;
    fadeOutColor?: string;
    ariaLabel?: string;
};

const LogoLoop: React.FC<LogoLoopProps> = ({
    logos,
    speed = 100,
    direction = 'left',
    logoHeight = 28,
    gap = 32,
    pauseOnHover = false,
    scaleOnHover = false,
    fadeOut = false,
    fadeOutColor = '#ffffff',
    ariaLabel = 'Logo carousel'
}) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const animationRef = useRef<number>();
    const currentXRef = useRef(0);
    const targetSpeedRef = useRef(speed);
    const currentSpeedRef = useRef(speed);

    // Memoize logos length to keep dependency array consistent
    const logosLength = useMemo(() => logos?.length || 0, [logos]);

    // Update target speed when hover state or speed prop changes
    useEffect(() => {
        targetSpeedRef.current = isHovered ? speed * 0.5 : speed;
    }, [isHovered, speed]);

    useEffect(() => {
        if (!trackRef.current || !logos || logosLength === 0) return;

        const track = trackRef.current;

        // Initialize speed refs to normal speed
        currentSpeedRef.current = speed;
        targetSpeedRef.current = speed;

        // Wait for layout to complete, then get the actual width
        const updateAnimation = () => {
            const trackWidth = track.scrollWidth / 3; // Third width since we have 3 sets of logos

            const animate = () => {
                // Gradually interpolate current speed towards target speed
                const speedDiff = targetSpeedRef.current - currentSpeedRef.current;
                currentSpeedRef.current += speedDiff * 0.1; // Smooth interpolation factor (0.1 = 10% per frame)
                
                // Stop interpolation when very close to target
                if (Math.abs(speedDiff) < 0.1) {
                    currentSpeedRef.current = targetSpeedRef.current;
                }
                
                const increment = direction === 'left' ? -currentSpeedRef.current / 60 : currentSpeedRef.current / 60; // 60fps

                currentXRef.current += increment;

                // Reset position when we've moved one full cycle
                if (Math.abs(currentXRef.current) >= trackWidth) {
                    currentXRef.current = 0;
                }

                track.style.transform = `translateX(${currentXRef.current}px)`;
                animationRef.current = requestAnimationFrame(animate);
            };

            // Cancel any existing animation
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        // Start animation after a short delay to ensure layout is complete
        const timeoutId = setTimeout(updateAnimation, 100);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            clearTimeout(timeoutId);
        };
    }, [speed, direction, logosLength]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const classes = [
        'logoloop',
        scaleOnHover ? 'logoloop--scale-hover' : '',
        fadeOut ? 'logoloop--fade' : ''
    ].filter(Boolean).join(' ');

    const style = {
        '--logoloop-gap': `${gap}px`,
        '--logoloop-logoHeight': `${logoHeight}px`,
        '--logoloop-fadeColor': fadeOutColor
    } as React.CSSProperties;

    return (
        <div
            className={classes}
            style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label={ariaLabel}
        >
            <div ref={trackRef} className="logoloop__track">
                <div className="logoloop__list">
                    {logos.map((logo, index) => (
                        <div key={`first-${index}`} className="logoloop__item">
                            <a
                                href={logo.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="logoloop__link"
                                aria-label={logo.title}
                            >
                                <div className="logoloop__node">
                                    {logo.node}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="logoloop__list">
                    {logos.map((logo, index) => (
                        <div key={`second-${index}`} className="logoloop__item">
                            <a
                                href={logo.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="logoloop__link"
                                aria-label={logo.title}
                            >
                                <div className="logoloop__node">
                                    {logo.node}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="logoloop__list">
                    {logos.map((logo, index) => (
                        <div key={`third-${index}`} className="logoloop__item">
                            <a
                                href={logo.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="logoloop__link"
                                aria-label={logo.title}
                            >
                                <div className="logoloop__node">
                                    {logo.node}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoLoop;
