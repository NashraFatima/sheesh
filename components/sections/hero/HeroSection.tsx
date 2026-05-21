"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { homeHash } from "@/lib/navigation";
import { MagneticButton } from "@/components/ui/MagneticButton";

const HERO_PLAYLIST = [
  "/videos/hero.mp4",
  "/videos/burger.mp4",
  "/videos/grill.mp4",
  "/videos/pizza.mp4",
] as const;

const HeroBackgroundVideo = memo(function HeroBackgroundVideo() {
  const transitionTimerRef = useRef<number | null>(null);
  const [videoIndex, setVideoIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  const showVideo = useCallback(() => {
    setReady(true);
    setVisible(true);
  }, []);

  const playNextVideo = useCallback(() => {
    setVisible(false);

    if (transitionTimerRef.current) {
      window.clearTimeout(transitionTimerRef.current);
    }

    transitionTimerRef.current = window.setTimeout(() => {
      setReady(false);
      setVideoIndex((current) => (current + 1) % HERO_PLAYLIST.length);
    }, 450);
  }, []);

  return (
    <video
      src={HERO_PLAYLIST[videoIndex]}
      autoPlay
      muted
      loop={false}
      playsInline
      preload="metadata"
      onCanPlay={showVideo}
      onEnded={playNextVideo}
      className={`absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
        ready && visible ? "opacity-60" : "opacity-0"
      }`}
      style={{
        filter: "contrast(1.05) saturate(1.1)",
      }}
    />
  );
});

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* 1. PREMIUM SINGLE VIDEO LAYER */}
      <div className="absolute inset-0 z-0 bg-black">
        <HeroBackgroundVideo />
        
        {/* Clean, lightweight vignette and gradient overlay for text readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/50 via-transparent to-[#050505] pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,5,5,0.7)_100%)] pointer-events-none" />
      </div>

      {/* 2. MAIN CONTENT AREA (Centered, Clean, INSTANT RENDERING) */}
      <div className="relative z-30 flex w-full max-w-[1400px] flex-col items-center px-6 md:px-12 mt-16 lg:mt-24">
        <div className="flex flex-col items-center text-center w-full animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both">
          {/* Film Billing Badge */}
          <p className="font-[family-name:var(--font-accent)] text-xs md:text-sm tracking-[0.6em] text-[#d4af37] uppercase mb-4 md:mb-6">
            A Dallas Dining Masterpiece
          </p>

          {/* Clean, properly scaled display title */}
          <h1 className="font-[family-name:var(--font-display)] text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-light text-white tracking-[0.15em] uppercase leading-none drop-shadow-2xl">
            Sheesh
          </h1>
          
          {/* Subtitle */}
          <p className="font-[family-name:var(--font-accent)] text-sm md:text-xl lg:text-2xl font-light tracking-[0.5em] text-[#f5e6c8]/90 uppercase mt-2 md:mt-4 mb-8 lg:mb-12">
            Eatery & Lounge
          </p>

          {/* Description & Buttons */}
          <div className="max-w-xl mx-auto flex flex-col items-center gap-8 lg:gap-10">
            <p className="font-[family-name:var(--font-body)] text-sm md:text-base lg:text-lg leading-relaxed text-white/90 tracking-wide drop-shadow-md px-4 sm:px-0">
              Dallas&apos;s premier culinary destination. An immersive marriage of gourmet Mediterranean-desi cuisine, signature private shisha blends, and absolute sensory luxury.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 w-full px-8 sm:px-0">
              <MagneticButton href="/menu" variant="gold" className="w-full sm:w-auto min-w-[200px]">
                View Menu
              </MagneticButton>
              <MagneticButton href="/events" variant="outline" className="w-full sm:w-auto min-w-[200px]">
                Upcoming Events
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* 3. LIGHTWEIGHT SCROLL ANCHOR */}
      <div className="absolute bottom-8 lg:bottom-12 left-1/2 z-30 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 ease-out fill-mode-both">
        <Link
          href={homeHash("experience")}
          scroll={false}
          className="flex flex-col items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <span className="font-[family-name:var(--font-accent)] text-[9px] tracking-[0.3em] text-[#d4af37]/70 uppercase">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-[#d4af37]/70 to-transparent" />
        </Link>
      </div>
    </section>
  );
}
