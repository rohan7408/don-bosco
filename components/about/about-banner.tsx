import Image from "next/image";
import { Sparkles } from "lucide-react";

export function AboutBanner() {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      <Image
        src="/images/campus-banner.jpg"
        alt="Don Bosco School campus"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/70" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-8 w-8 text-primary" />
          <span className="text-primary font-semibold text-lg">
            Excellence Since 2005
          </span>
        </div>
        <h1 className="font-heading text-4xl font-extrabold text-background md:text-6xl text-balance max-w-4xl leading-tight">
          Nurturing Young Minds, Building Future Leaders
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/90 md:text-xl">
          Welcome to Don Bosco School, where academic excellence meets holistic
          education. We are committed to shaping confident, compassionate, and
          capable individuals ready to make a difference in the world.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-background/90">
          <div className="text-center">
            <div className="font-heading text-2xl font-bold text-background">
              1,200+
            </div>
            <div className="text-sm">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-2xl font-bold text-background">
              80+
            </div>
            <div className="text-sm">Expert Faculty</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-2xl font-bold text-background">
              100%
            </div>
            <div className="text-sm">Board Pass Rate</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-2xl font-bold text-background">
              18+
            </div>
            <div className="text-sm">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
