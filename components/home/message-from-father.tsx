import Image from "next/image";

export function MessageFromFather() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-secondary-foreground md:text-4xl text-balance">
            Message from the Father
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Father's Image */}
          <div className="w-full lg:w-1/3">
            <div className="relative aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/placeholder.webp"
                alt="Father Principal"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Message Content */}
          <div className="w-full lg:w-2/3">
            <div className="bg-card rounded-lg border border-border p-6 lg:p-8 shadow-sm">
              <blockquote className="text-muted-foreground">
                <p className="text-base lg:text-lg leading-relaxed mb-4">
                  "Dear Students and Parents,
                </p>
                <p className="text-base lg:text-lg leading-relaxed mb-4">
                  It brings me immense joy to welcome you to Don Bosco school,
                  where we nurture not just creative excellence but also the
                  holistic development of every student. Following the spirit of
                  St. John Bosco, our founder, we believe in education that
                  touches the heart, enlightens the mind, and strengthens the
                  character.
                </p>
                <p className="text-base lg:text-lg leading-relaxed mb-4">
                  In today's rapidly evolving world, we strive to empower our
                  students with the skills, values, and vision needed to make a
                  meaningful difference in society. Our dedicated faculty and
                  staff work tirelessly to create an environment where every
                  individual can discover their potential and pursue their
                  passion with confidence and integrity.
                </p>
                <p className="text-base lg:text-lg leading-relaxed mb-6">
                  May God bless your journey with us, and may you always walk in
                  the light of knowledge and wisdom.
                </p>
                <footer className="flex flex-col gap-1">
                  <cite className="not-italic font-semibold text-foreground">
                    Rev. Fr. Principal
                  </cite>
                  <span className="text-sm text-muted-foreground">
                    Principal, Don Bosco School
                  </span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
