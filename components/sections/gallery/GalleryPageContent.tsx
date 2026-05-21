"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryApi } from "@/lib/admin/data-api";
import type { GalleryImage } from "@/lib/admin/types";
import { cn } from "@/lib/utils";
import { resolveImageUrl } from "@/lib/image-url";

const categories = ["All", "Food", "Drinks", "Hookah", "Ambiance", "Events", "Desserts"];

export function GalleryPageContent() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    galleryApi
      .list("?isPublished=true&limit=100")
      .then((items) => {
        if (mounted) setImages(items);
      })
      .catch(() => {
        if (mounted) setImages([]);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return images;
    return images.filter((image) => image.category === activeCategory);
  }, [activeCategory, images]);

  return (
    <div className="relative min-h-screen pt-28 pb-24">
      <section className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside Sheesh"
          subtitle="A living archive of the room, the plates, the smoke, and the nights that make the lounge glow."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 font-[family-name:var(--font-accent)] text-[10px] tracking-[0.18em] uppercase transition-colors",
                activeCategory === category
                  ? "border-[#d4af37] bg-[#d4af37]/15 text-[#d4af37]"
                  : "border-white/10 text-white/45 hover:border-[#d4af37]/40 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-white/35">
          {loading ? "Loading gallery..." : `${filtered.length} ${filtered.length === 1 ? "image" : "images"}`}
        </p>

        <motion.div layout className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((image, index) => (
            <motion.figure
              key={image.id}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.035 }}
              className="group mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-[#d4af37]/10 bg-white/[0.02]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={resolveImageUrl(image.url)}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-75" />
                <figcaption className="absolute right-4 bottom-4 left-4">
                  <p className="font-[family-name:var(--font-display)] text-xl text-white">
                    {image.title}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-accent)] text-[9px] tracking-[0.18em] text-[#d4af37]/70 uppercase">
                    {image.category}
                  </p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </motion.div>

        {!loading && filtered.length === 0 && (
          <p className="mt-16 text-center text-white/40">
            No gallery images are published yet.
          </p>
        )}
      </section>
    </div>
  );
}
