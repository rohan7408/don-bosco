"use client";

import Image from "next/image";
import { useState } from "react";
<<<<<<< HEAD
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
=======
import { ChevronLeft, ChevronRight } from "lucide-react";
>>>>>>> 58d541f95962b39a8299eef669185ff5361ef304

const slides = [
  {
    src: "/images/placeholder.webp",
<<<<<<< HEAD
    alt: "Modern school building exterior with lush green campus",
    caption: "Main School Building & Campus",
    description:
      "State-of-the-art infrastructure with spacious, well-ventilated classrooms",
  },
  {
    src: "/images/placeholder.webp",
    alt: "Well-equipped science laboratory",
    caption: "Science Laboratories",
    description:
      "Fully equipped Physics, Chemistry, and Biology labs for practical learning",
  },
  {
    src: "/images/placeholder.webp",
    alt: "Modern computer lab with students",
    caption: "Computer & Innovation Labs",
    description:
      "Advanced computer labs with latest technology and coding facilities",
  },
  {
    src: "/images/placeholder.webp",
    alt: "Spacious school library with book shelves",
    caption: "School Library & Resource Center",
    description:
      "Extensive collection of books and digital resources for student research",
  },
  {
    src: "/images/placeholder.webp",
    alt: "Sports ground and indoor facilities",
    caption: "Sports Complex",
    description:
      "Multi-sport facilities including indoor and outdoor courts and playgrounds",
  },
  {
    src: "/images/placeholder.webp",
    alt: "School auditorium with seating",
    caption: "Auditorium & Performance Hall",
    description:
      "Modern auditorium for assemblies, cultural events, and competitions",
  },
  {
    src: "/images/placeholder.webp",
    alt: "Art and music studio",
    caption: "Art & Music Studios",
    description:
      "Dedicated spaces for creative expression and artistic development",
  },
  {
    src: "/images/placeholder.webp",
    alt: "School cafeteria dining area",
    caption: "Cafeteria & Dining Hall",
    description:
      "Hygienic cafeteria serving nutritious meals in a pleasant environment",
=======
    alt: "Design school computer lab with modern workstations",
    caption: "Digital Design Lab",
  },
  {
    src: "/images/placeholder.webp",
    alt: "Bright, spacious design school library",
    caption: "Campus Library",
  },
  {
    src: "/images/placeholder.webp",
    alt: "Hands-on art studio workshop",
    caption: "Art Studio Workshop",
>>>>>>> 58d541f95962b39a8299eef669185ff5361ef304
  },
];

export function CampusTour() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <section className="py-16 lg:py-24 bg-secondary">
<<<<<<< HEAD
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-3xl font-bold text-secondary-foreground md:text-4xl">
              Virtual Campus Tour
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Explore our world-class facilities designed to provide the best
            learning environment for our students
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <div className="relative h-[350px] md:h-[480px]">
=======
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-secondary-foreground md:text-4xl mb-10">
          Campus Tour
        </h2>

        <div className="relative overflow-hidden rounded-lg">
          <div className="relative h-[300px] md:h-[420px]">
>>>>>>> 58d541f95962b39a8299eef669185ff5361ef304
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-cover transition-opacity duration-500"
            />
<<<<<<< HEAD
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/90 to-transparent px-6 py-6">
              <h3 className="text-lg font-heading font-bold text-background mb-1">
                {slides[current].caption}
              </h3>
              <p className="text-sm text-background/90">
                {slides[current].description}
=======
            <div className="absolute inset-x-0 bottom-0 bg-foreground/50 px-4 py-3">
              <p className="text-center text-sm font-medium text-background">
                {slides[current].caption}
>>>>>>> 58d541f95962b39a8299eef669185ff5361ef304
              </p>
            </div>
          </div>

          <button
            onClick={prev}
            aria-label="Previous slide"
<<<<<<< HEAD
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors z-10"
          >
            <ChevronLeft className="h-6 w-6" />
=======
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
>>>>>>> 58d541f95962b39a8299eef669185ff5361ef304
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
<<<<<<< HEAD
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
=======
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
>>>>>>> 58d541f95962b39a8299eef669185ff5361ef304
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
<<<<<<< HEAD
              className={`h-2.5 transition-all ${
                i === current
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-border hover:bg-border/70"
              } rounded-full`}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Want to visit our campus in person?
          </p>
          <a
            href="/admission"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Schedule a Campus Visit
          </a>
        </div>
=======
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === current ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
>>>>>>> 58d541f95962b39a8299eef669185ff5361ef304
      </div>
    </section>
  );
}
