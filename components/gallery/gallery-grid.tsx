"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const filters = ["All", "Sports", "Esports", "Photography", "Events"] as const;

type Category = (typeof filters)[number];

const items: { src: string; title: string; category: Category }[] = [
  {
    src: "/images/placeholder.webp",
    title: "Bold Typography Poster",
    category: "Sports",
  },
  {
    src: "/images/placeholder.webp",
    title: "Mobile App Concept",
    category: "Esports",
  },
  {
    src: "/images/placeholder.webp",
    title: "Urban Shadows",
    category: "Photography",
  },
  {
    src: "/images/placeholder.webp",
    title: "Annual Exhibition 2025",
    category: "Events",
  },
  {
    src: "/images/placeholder.webp",
    title: "Brand Identity System",
    category: "Sports",
  },
  {
    src: "/images/placeholder.webp",
    title: "Portrait Series",
    category: "Photography",
  },
  {
    src: "/images/placeholder.webp",
    title: "Digital Design Lab",
    category: "Events",
  },
  {
    src: "/images/placeholder.webp",
    title: "UX Workshop Highlights",
    category: "Esports",
  },
  {
    src: "/images/placeholder.webp",
    title: "Studio Workshop",
    category: "Events",
  },
];

export function GalleryGrid() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () =>
    setLightbox((c) =>
      c !== null ? (c === 0 ? filtered.length - 1 : c - 1) : null,
    );
  const nextImage = () =>
    setLightbox((c) =>
      c !== null ? (c === filtered.length - 1 ? 0 : c + 1) : null,
    );

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActive(filter);
              setLightbox(null);
            }}
            className={cn(
              "rounded-md px-4 py-2 text-sm font-medium transition-colors",
              active === filter
                ? "bg-primary text-primary-foreground"
                : "border border-primary text-primary hover:bg-primary/10",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {filtered.map((item, i) => (
          <button
            key={`${item.title}-${i}`}
            onClick={() => openLightbox(i)}
            className="group relative block w-full overflow-hidden focus:outline-none mb-4"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={600}
              height={400}
              className="block w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300">
              <span className="text-sm font-semibold text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            className="relative max-h-[80vh] max-w-4xl overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              width={1200}
              height={800}
              className="block max-h-[80vh] w-auto object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-foreground/60 px-4 py-3 text-center">
              <p className="text-sm font-medium text-background">
                {filtered[lightbox].title}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
