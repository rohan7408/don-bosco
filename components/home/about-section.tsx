import Image from "next/image";
import { Users, Award, BookOpen, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2,400+",
    label: "Students Enrolled",
  },
  {
    icon: Award,
    value: "150+",
    label: "Awards Won",
  },
  {
    icon: BookOpen,
    value: "28",
    label: "Programs Offered",
  },
  {
    icon: Globe,
    value: "45",
    label: "Countries Represented",
  },
];

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/placeholder.webp"
                alt="Don Bosco School Campus"
                fill
                className="object-cover"
              />
              {/* Est Badge */}
              <div className="absolute bottom-6 right-6 bg-primary rounded-lg px-6 py-4 shadow-xl">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-foreground">
                    Est. 1987
                  </p>
                  <p className="text-xs text-primary-foreground/90 mt-1">
                    Legacy of Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              About Us
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl mb-4 text-balance">
              Shaping the Future of Design
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              For over three decades, DesignSchool has been at the forefront of
              creative education. Our mission is to cultivate bold thinkers and
              skilled practitioners who push the boundaries of art, technology,
              and culture.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Accredited by the National Association of Schools of Art and
              Design, we offer undergraduate and graduate programs across visual
              communication, industrial design, architecture, and digital media.
              Our faculty includes practicing professionals, published
              researchers, and award-winning artists.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary shrink-0">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
