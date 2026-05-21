"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { homeHash } from "@/lib/navigation";
import { gsap } from "gsap";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FloatingParticles } from "@/components/effects/FloatingParticles";
import { SmokeOverlay } from "@/components/effects/SmokeOverlay";
import { registerScrollTrigger } from "@/animations/scroll";
import { menuImages } from "@/lib/menu-images";

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/7660170/7660170-uhd_2732_1440_25fps.mp4";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerScrollTrigger();
    const ctx = gsap.context(() => {
      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          { scale: 1.12 },
          {
            scale: 1,
            duration: 2.8,
            ease: "power2.out",
            delay: 2.2,
          }
        );
        gsap.to(videoRef.current, {
          scale: 1.06,
          duration: 18,
          ease: "none",
          repeat: -1,
          yoyo: true,
          delay: 5,
        });
      }
      if (contentRef.current) {
        const lines = contentRef.current.querySelectorAll("[data-hero-line]");
        gsap.from(lines, {
          y: 100,
          opacity: 0,
          duration: 1.5,
          stagger: 0.18,
          delay: 2.4,
          ease: "power3.out",
        });
      }
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          opacity: 0.7,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={menuImages.hero}
          className="h-full w-full scale-110 object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#050505]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_78%)]" />
        <div
          ref={glowRef}
          className="absolute top-1/3 left-1/2 h-[50vh] w-[70vw] -translate-x-1/2 rounded-full bg-[#d4af37]/[0.07] blur-[100px] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
        <div className="absolute inset-0 film-grain" />
      </div>

      <FloatingParticles count={60} />
      <SmokeOverlay />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-20 text-center md:px-12 md:pt-36"
      >
        <p
          data-hero-line
          className="font-[family-name:var(--font-accent)] mb-6 text-xs tracking-[0.5em] text-[#d4af37] uppercase"
        >
          Dallas&apos;s Premier Lounge
        </p>

        <h1
          data-hero-line
          className="font-[family-name:var(--font-display)] text-5xl leading-[1.02] tracking-[0.06em] text-white uppercase md:text-7xl lg:text-[5.5rem]"
        >
          <span className="block text-gold-gradient">Sheesh</span>
          <span className="mt-2 block text-3xl tracking-[0.18em] text-white/95 md:text-5xl">
            Eatery & Lounge
          </span>
        </h1>

        <p
          data-hero-line
          className="mx-auto mt-5 font-[family-name:var(--font-display)] text-base tracking-[0.28em] text-[#f5e6c8]/85 uppercase md:text-xl"
        >
          Where Luxury Meets Flavor
        </p>

        <p
          data-hero-line
          className="mx-auto mt-8 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-white/60 md:text-lg"
        >
          Dallas&apos;s premier hookah lounge & dining destination. Premium
          cuisine, signature hookah blends, and unforgettable nights.
        </p>

        <div
          data-hero-line
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton href="/menu" variant="gold">
            View Menu
          </MagneticButton>
          <MagneticButton href="/events" variant="outline">
            Upcoming Events
          </MagneticButton>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 md:bottom-12"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link
          href={homeHash("experience")}
          scroll={false}
          className="flex flex-col items-center gap-2 transition-opacity hover:opacity-80"
          aria-label="Scroll to experience section"
        >
          <span className="font-[family-name:var(--font-accent)] text-[9px] tracking-[0.35em] text-white/35 uppercase">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-[#d4af37]/80 to-transparent" />
        </Link>
      </motion.div>
    </section>
  );
}
