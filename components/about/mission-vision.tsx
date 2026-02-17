import { Target, Eye, Heart, Star } from "lucide-react";

export function MissionVision() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Our Mission, Vision & Core Values
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Guiding principles that shape our educational philosophy and
            commitment to excellence
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {/* Mission */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-card-foreground">
                Our Mission
              </h3>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              To provide a holistic education that nurtures creativity, critical
              thinking, and character development in every student. We strive to
              create an inclusive learning environment where students are
              empowered to discover their unique talents, pursue academic
              excellence, and become responsible global citizens who contribute
              positively to society.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-card-foreground">
                Our Vision
              </h3>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              To be a leading institution recognized for academic excellence,
              innovative teaching methodologies, and producing well-rounded
              individuals who excel in their chosen fields. We envision a future
              where our students become leaders, innovators, and compassionate
              members of society, equipped with the skills and values to thrive
              in an ever-changing world.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-card-foreground">
              Core Values
            </h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Excellence",
                description:
                  "Pursuing the highest standards in academics, arts, sports, and character development.",
              },
              {
                title: "Integrity",
                description:
                  "Fostering honesty, transparency, and ethical behavior in all aspects of school life.",
              },
              {
                title: "Innovation",
                description:
                  "Encouraging creative thinking, problem-solving, and embracing new technologies and methods.",
              },
              {
                title: "Compassion",
                description:
                  "Cultivating empathy, respect, and care for others within our diverse community.",
              },
              {
                title: "Collaboration",
                description:
                  "Promoting teamwork, communication, and partnerships among students, staff, and families.",
              },
              {
                title: "Growth",
                description:
                  "Supporting continuous learning, personal development, and resilience in facing .",
              },
              {
                title: "Inclusivity",
                description:
                  "Celebrating diversity and ensuring every student feels valued, respected, and supported.",
              },
              {
                title: "Responsibility",
                description:
                  "Developing environmental awareness and social responsibility in our students.",
              },
            ].map((value, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <h4 className="font-heading text-base font-semibold text-card-foreground">
                    {value.title}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground pl-7">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
