import { Trophy, Award, Medal, GraduationCap, Star, Users } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    number: "100%",
    label: "Board Exam Pass Rate",
    description: "Consistent excellent results for the past 5 years",
  },
  {
    icon: GraduationCap,
    number: "1,200+",
    label: "Students Enrolled",
    description: "Growing community of passionate learners",
  },
  {
    icon: Award,
    number: "50+",
    label: "National Awards",
    description: "Excellence in academics, sports, and arts",
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Parent Satisfaction",
    description: "Based on annual feedback surveys",
  },
  {
    icon: Users,
    number: "95%",
    label: "University Placement",
    description: "Students placed in top institutions",
  },
  {
    icon: Medal,
    number: "25+",
    label: "Years of Excellence",
    description: "Serving the community since 2005",
  },
];

const accreditations = [
  {
    title: "ISO 9001:2015 Certified",
    description:
      "Quality Management System certification for educational excellence",
  },
  {
    title: "CBSE Affiliated",
    description:
      "Central Board of Secondary Education affiliation (School Code: XXXXX)",
  },
  {
    title: "Green School Certified",
    description: "Recognized for environmental sustainability initiatives",
  },
  {
    title: "National Safety Honor Roll",
    description: "Awarded for maintaining highest safety standards",
  },
];

const recentAwards = [
  {
    year: "2025",
    title: "Best School Award",
    org: "National Education Excellence Awards",
    description: "Recognized as one of the top 10 schools in the region",
  },
  {
    year: "2024",
    title: "Innovation in Education",
    org: "State Education Board",
    description: "For implementing cutting-edge teaching methodologies",
  },
  {
    year: "2024",
    title: "Sports Excellence Award",
    org: "Regional Sports Federation",
    description: "Outstanding achievements in inter-school competitions",
  },
  {
    year: "2023",
    title: "Digital Learning Pioneer",
    org: "EdTech India",
    description: "Leadership in integrating technology in education",
  },
];

export function Achievements() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Achievements & Recognition
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence has been recognized through numerous
            awards and achievements
          </p>
        </div>

        {/* Statistics */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-8 w-8" />
                </div>
              </div>
              <div className="font-heading text-3xl font-bold text-foreground mb-2">
                {item.number}
              </div>
              <h3 className="font-heading text-base font-semibold text-card-foreground mb-2">
                {item.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Accreditations */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Accreditations & Affiliations
            </h3>
            <div className="space-y-4">
              {accreditations.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
                >
                  <h4 className="font-heading text-base font-semibold text-card-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Awards */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              Recent Awards & Honors
            </h3>
            <div className="space-y-4">
              {recentAwards.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">
                      {item.year}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading text-base font-semibold text-card-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-primary mb-2 font-medium">
                        {item.org}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
