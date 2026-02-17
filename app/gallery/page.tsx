import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery - Don Bosco school",
  description:
    "Explore stunning student work across Graphic Design, UX/UI, Photography, and more.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-secondary py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="font-heading text-3xl font-extrabold text-secondary-foreground md:text-5xl text-balance">
            Student Gallery
          </h1>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto leading-relaxed">
            A showcase of creativity, talent, and hard work from the Don Bosco
            school community.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
