"use client";

import { useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { mockGallery } from "@/lib/admin/mock-data";
import { ImageUploadField } from "@/components/admin/ui/ImageUploadField";
import { AdminSelect } from "@/components/admin/ui/AdminSelect";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { galleryCategoryOptions } from "@/lib/admin/form-options";
import type { GalleryImage } from "@/lib/admin/types";

export default function AdminGalleryPage() {
  const [images, setImages] = useState(mockGallery);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Ambiance");
  const [pendingPreview, setPendingPreview] = useState<string | null>(null);
  const [uploadKey, setUploadKey] = useState(0);

  const addImage = () => {
    if (!pendingPreview) return;
    const newImage: GalleryImage = {
      id: `g-${Date.now()}`,
      url: pendingPreview,
      title: title || "Untitled",
      category,
    };
    setImages((prev) => [newImage, ...prev]);
    setTitle("");
    setPendingPreview(null);
    setUploadKey((k) => k + 1);
  };

  const remove = (id: string) => {
    setImages((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="space-y-8">
      <section className="glass-luxury rounded-2xl p-6 md:p-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-white">
          Upload to Gallery
        </h2>
        <p className="mt-1 text-sm text-white/40">
          Drag & drop with live preview before adding to the grid
        </p>

        <div className="mt-6 space-y-5">
          <ImageUploadField
            key={uploadKey}
            label="Gallery Image"
            hint="Luxury lounge, food, or event photography"
            aspect="square"
            onPreviewChange={setPendingPreview}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="gal-title">Title</Label>
              <Input
                id="gal-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Image title"
              />
            </div>
            <AdminSelect
              label="Category"
              value={category}
              onChange={setCategory}
              options={galleryCategoryOptions}
            />
          </div>

          <button
            type="button"
            disabled={!pendingPreview}
            onClick={addImage}
            className="rounded-full bg-[#d4af37] px-6 py-2.5 text-sm font-medium text-[#050505] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Add to Gallery (UI only)
          </button>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="group glass-luxury overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-square">
              {img.url.startsWith("blob:") ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={img.url}
                  alt={img.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="300px"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
              <button
                type="button"
                onClick={() => remove(img.id)}
                className="absolute top-3 right-3 rounded-lg border border-white/10 bg-[#050505]/80 p-2 text-white/50 opacity-0 transition-opacity group-hover:opacity-100 hover:text-rose-400"
                aria-label="Delete"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
            <div className="p-4">
              <p className="font-[family-name:var(--font-body)] text-sm text-white">
                {img.title}
              </p>
              <p className="text-xs text-white/40">{img.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
