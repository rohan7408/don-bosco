"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const heroImages = [
  {
    src: "/images/1.png",
    alt: "Students working creatively in a bright design studio",
  },
  {
    src: "/images/images.png",
    alt: "Design school campus and facilities",
  },
  {
    src: "/images/placeholder.webp",
    alt: "Creative design workspace",
  },
];

export function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-play functionality
    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="relative h-[540px] md:h-[620px] lg:h-[680px] overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-[540px] md:h-[620px] lg:h-[680px] ml-0">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative h-[540px] md:h-[620px] lg:h-[680px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 bg-foreground/60" />

      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              current === index
                ? "w-8 bg-background"
                : "w-2 bg-background/50 hover:bg-background/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="font-heading text-4xl font-extrabold leading-tight text-background md:text-5xl lg:text-6xl text-balance max-w-3xl">
          Shape the Future Through Design
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-background/80 md:text-xl">
          Unlock your creative potential at Don Bosco school — where bold ideas
          meet real-world impact.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/admission"
            className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
          >
            Apply Now
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center rounded-md border-2 border-primary bg-transparent px-7 py-3 text-sm font-semibold text-background hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
