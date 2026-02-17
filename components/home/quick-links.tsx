import Link from "next/link";
import { BookOpen, ClipboardList, Brush } from "lucide-react";

const links = [
  {
    icon: BookOpen,
    title: "Our Programs",
    description:
      "Explore our industry-leading programs in Graphic Design, UX/UI, Photography, and more.",
    href: "/about",
  },
  {
    icon: ClipboardList,
    title: "Admission Process",
    description:
      "A simple four-step journey from application to enrollment — we guide you every step.",
    href: "/admission",
  },
  {
    icon: Brush,
    title: "Student Work",
    description:
      "Browse stunning portfolios and projects from our talented design community.",
    href: "/gallery",
  },
];

export function QuickLinks() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Discover Don Bosco school
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Everything you need to start your creative journey, all in one
            place.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {links.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col items-start rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
