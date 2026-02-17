"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/admission", label: "Admission" },
  { href: "/news", label: "News" },
  { href: "/downloads", label: "Downloads" },
  { href: "/gallery", label: "Gallery" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-removebg-preview.png"
            alt="Logo"
            width={200}
            height={50}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admission"
            className="ml-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground transition-transform duration-200 hover:scale-110"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
          ) : (
            <Menu className="h-6 w-6 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        className={cn(
          "md:hidden border-t border-border bg-background overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen
            ? "max-h-96 opacity-100 px-4 pb-4"
            : "max-h-0 opacity-0 px-4 pb-0",
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "block px-3 py-3 text-sm font-medium rounded-md transition-colors",
              pathname === link.href
                ? "text-primary bg-primary/10"
                : "text-foreground hover:text-primary",
            )}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/admission"
          onClick={() => setMobileOpen(false)}
          className="mt-2 block w-full text-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          Apply Now
        </Link>
      </nav>
    </header>
  );
}
