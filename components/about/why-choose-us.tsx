import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Heart,
  Globe,
  TrendingUp,
  Shield,
  Lightbulb,
  UsersRound,
  Trophy,
  Laptop,
} from "lucide-react";

const values = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Proven track record of 100% board exam results with highest distinction rates. Our rigorous curriculum ensures strong foundation in all subjects.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Highly qualified and experienced teachers who are passionate about education and dedicated to each student's success.",
  },
  {
    icon: Award,
    title: "Holistic Development",
    description:
      "Focus on overall personality development through academics, sports, arts, cultural activities, and leadership programs.",
  },
  {
    icon: BookOpen,
    title: "Modern Curriculum",
    description:
      "CBSE-aligned curriculum integrated with innovative teaching methods, activity-based learning, and skill development programs.",
  },
  {
    icon: Laptop,
    title: "Technology Integration",
    description:
      "Smart classrooms, digital learning platforms, coding labs, and modern infrastructure for 21st-century education.",
  },
  {
    icon: Heart,
    title: "Values & Ethics",
    description:
      "Strong emphasis on moral values, discipline, integrity, and social responsibility to build character and leadership qualities.",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description:
      "Secure campus with 24/7 surveillance, trained staff, medical facilities, and comprehensive safety protocols for student well-being.",
  },
  {
    icon: Trophy,
    title: "Sports & Activities",
    description:
      "Excellent sports facilities and diverse extracurricular programs to discover and nurture every child's unique talents.",
  },
  {
    icon: UsersRound,
    title: "Individual Attention",
    description:
      "Small class sizes ensuring personalized attention, regular parent-teacher meetings, and customized learning support.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "International exposure through exchange programs, global curriculum perspectives, and multicultural learning experiences.",
  },
  {
    icon: TrendingUp,
    title: "Career Guidance",
    description:
      "Comprehensive counseling for academic choices, career paths, competitive exam preparation, and university admissions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description:
      "Encouraging critical thinking, problem-solving, innovation labs, project-based learning, and creative expression.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-secondary-foreground md:text-4xl">
            Why Choose Don Bosco School?
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Discover what makes us the preferred choice for parents seeking
            quality education and holistic development for their children
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {values.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center rounded-lg bg-card border border-border p-6 hover:shadow-lg hover:border-primary/50 transition-all group"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-base font-semibold text-card-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-card border border-border rounded-lg p-6 max-w-3xl">
            <p className="text-base leading-relaxed text-muted-foreground">
              At Don Bosco School, we don&apos;t just educate students—we
              nurture future leaders, innovators, and responsible citizens. Our
              commitment to excellence, combined with a caring and supportive
              environment, makes us the ideal choice for your child&apos;s
              educational journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
