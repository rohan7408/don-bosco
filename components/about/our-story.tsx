import { Calendar, Users, Award, TrendingUp } from "lucide-react";

const timeline = [
  {
    year: "2005",
    title: "Foundation & Vision",
    description:
      "Don Bosco School was established with a vision to provide quality education rooted in values. Started with 150 students and 15 dedicated teachers in a modest building.",
    icon: Calendar,
  },
  {
    year: "2008",
    title: "Expansion & Growth",
    description:
      "Expanded to include secondary education. New science labs, library, and sports facilities were added. Student enrollment grew to 400.",
    icon: TrendingUp,
  },
  {
    year: "2012",
    title: "Academic Excellence",
    description:
      "Achieved 100% board exam results for the first time. Introduced smart classrooms and computer labs, embracing technology in education.",
    icon: Award,
  },
  {
    year: "2015",
    title: "Decade of Success",
    description:
      "Celebrated 10 years of excellence. Opened senior secondary section. Received state recognition for innovative teaching methods.",
    icon: Users,
  },
  {
    year: "2018",
    title: "Modern Renaissance",
    description:
      "Major infrastructure upgrade with new academic building, innovation labs, and sports complex. Launched scholarship programs for deserving students.",
    icon: TrendingUp,
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Successfully transitioned to hybrid learning during the pandemic. Implemented comprehensive digital learning platform accessible to all students.",
    icon: Award,
  },
  {
    year: "2023",
    title: "Recognition & Awards",
    description:
      "Recognized as one of the top schools in the region. ISO certification achieved. Student strength crossed 1,000 mark.",
    icon: Award,
  },
  {
    year: "2025",
    title: "Continuing Excellence",
    description:
      "Celebrating over 18 years of nurturing young minds. Now serving 1,200+ students with a team of 80+ experienced educators and state-of-the-art facilities.",
    icon: Users,
  },
];

export function OurStory() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Our Story
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-3xl mx-auto">
            Don Bosco School was founded with a vision to provide holistic
            education that nurtures not just academic excellence but also
            character, creativity, and compassion. What began as a small
            institution has grown into a beacon of educational excellence,
            touching thousands of lives.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:px-8">
                  <div
                    className={`bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${
                      index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                    } lg:w-[calc(100%-2rem)]`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                            {item.year}
                          </span>
                          <h3 className="font-heading text-lg font-semibold text-card-foreground">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Dot - Hidden on mobile */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              </div>
            ))}
          </div>
        </div>

        {/* Journey Continues */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg p-8">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              The Journey Continues
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              From our humble beginnings to becoming a recognized center of
              educational excellence, our journey has been marked by dedication,
              innovation, and an unwavering commitment to our students&apos;
              success. As we move forward, we remain focused on our mission to
              provide transformative education that prepares students for the
              challenges and opportunities of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
