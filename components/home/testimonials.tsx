"use client";

import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "Graphic Design Graduate, 2024",
    image: "/images/placeholder.webp",
    content:
      "DesignSchool transformed my creative vision into a professional career. The hands-on projects and industry connections were invaluable. I landed my dream job at a top agency before graduation.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Industrial Design Student",
    image: "/images/placeholder.webp",
    content:
      "The collaborative environment and access to cutting-edge technology pushed me to explore ideas I never thought possible. The faculty truly care about each student's success.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "UX Design Graduate, 2023",
    image: "/images/placeholder.webp",
    content:
      "What sets DesignSchool apart is the perfect balance between creative freedom and structured learning. The real-world projects prepared me for the challenges of the industry.",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Digital Media Graduate, 2024",
    image: "/images/placeholder.webp",
    content:
      "The network I built at DesignSchool has been instrumental to my career. The alumni community is incredibly supportive and the mentorship opportunities are unmatched.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "Architecture Student",
    image: "/images/placeholder.webp",
    content:
      "From day one, I felt challenged and supported. The curriculum is rigorous but rewarding, and the resources available to students are world-class.",
    rating: 5,
  },
];

export function Testimonials() {
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
  }, [api]);

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl mb-4">
            What Our Students Say
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Hear from our students and alumni about their transformative
            experiences at DesignSchool.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-primary/20 mb-4" />
                      <p className="text-muted-foreground leading-relaxed mb-6 min-h-[120px]">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
            <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
          </Carousel>

          {/* Mobile Indicators */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  current === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
