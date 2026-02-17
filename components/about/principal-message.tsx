import Image from "next/image";
import { Quote } from "lucide-react";

export function PrincipalMessage() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Principal&apos;s Message
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Principal Image */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/latest.webp"
                alt="Principal Sr. Mary Thomas"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="font-heading text-xl font-bold text-foreground">
                Sr. Mary Thomas
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Principal, Don Bosco School
              </p>
              <p className="text-sm text-muted-foreground">
                M.Ed., B.Ed., M.A. (Education Leadership)
              </p>
            </div>
          </div>

          {/* Message Content */}
          <div className="order-1 md:order-2">
            <div className="relative">
              <Quote className="absolute -top-4 -left-2 h-12 w-12 text-primary/20" />
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p className="relative z-10">
                  Dear Parents, Students, and Well-wishers,
                </p>
                <p>
                  It is with immense pride and joy that I welcome you to Don
                  Bosco School, an institution committed to nurturing young
                  minds and shaping future leaders. For over 18 years, we have
                  upheld our commitment to providing quality education that goes
                  beyond textbooks and examinations.
                </p>
                <p>
                  At Don Bosco, we believe that education is not just about
                  academic achievement; it&apos;s about character building,
                  developing critical thinking skills, and fostering creativity.
                  Our dedicated team of educators works tirelessly to create a
                  learning environment where every child feels valued, inspired,
                  and empowered to reach their full potential.
                </p>
                <p>
                  We embrace a holistic approach to education, integrating
                  modern teaching methodologies with traditional values. Our
                  curriculum is designed to challenge students intellectually
                  while encouraging them to explore their passions through
                  sports, arts, cultural activities, and community service.
                </p>
                <p>
                  In today&apos;s rapidly evolving world, we prepare our
                  students not just for examinations but for life itself. We
                  instill in them the values of integrity, compassion,
                  resilience, and social responsibility—qualities that will
                  serve them well throughout their lives.
                </p>
                <p>
                  I invite you to join us on this remarkable journey of learning
                  and growth. Together, we can create a brighter future for our
                  children and our community.
                </p>
                <p className="font-semibold text-foreground pt-4">
                  Warm regards,
                  <br />
                  Sr. Mary Thomas
                  <br />
                  Principal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
