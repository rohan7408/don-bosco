import Link from "next/link";
import Image from "next/image";
import { Palette, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.jpeg"
                alt="Logo"
                width={200}
                height={50}
              />
            </Link>
            <p className="text-sm leading-relaxed text-background/70">
              Shaping the future through design education. Empowering creative
              minds since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/admission", label: "Admission" },
                { href: "/gallery", label: "Gallery" },
                { href: "/news", label: "News Updates" },
                { href: "/downloads", label: "Downloads" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Programs
            </h4>
            <ul className="space-y-2">
              {[
                "Graphic Design",
                "UX/UI Design",
                "Photography",
                "Motion Graphics",
                "Brand Strategy",
              ].map((program) => (
                <li key={program}>
                  <span className="text-sm text-background/70">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                123 Creative Drive, Design District, NY 10001
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +1 (555) 234-5678
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                hello@designverse.edu
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-background/20 pt-6 text-center text-sm text-background/50">
          &copy; {new Date().getFullYear()} Don Bosco school. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
