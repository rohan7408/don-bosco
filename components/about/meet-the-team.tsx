import Image from "next/image";

const leadership = [
  {
    name: "Sr. Mary Thomas",
    role: "Principal",
    image: "/images/latest.webp",
    bio: "M.Ed., B.Ed. - 20+ years in education leadership. Passionate about holistic student development and innovative teaching methods.",
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Vice Principal (Academics)",
    image: "/images/faculty-2.jpg",
    bio: "M.Sc., B.Ed. - Expert in curriculum development with 15 years of academic administration experience.",
  },
  {
    name: "Mrs. Priya Sharma",
    role: "Academic Coordinator",
    image: "/images/faculty-3.jpg",
    bio: "M.A., B.Ed. - Specializes in innovative pedagogy and student assessment methods for enhanced learning outcomes.",
  },
  {
    name: "Mr. David Johnson",
    role: "Dean of Students",
    image: "/images/faculty-4.jpg",
    bio: "M.A. (Psychology) - Dedicated to student welfare, counseling, and creating a supportive school environment.",
  },
];

const facultyHighlights = [
  {
    name: "Dr. Anjali Patel",
    role: "Mathematics Department Head",
    image: "/images/latest.webp",
    bio: "Ph.D. in Mathematics - Published researcher making complex concepts accessible to students.",
  },
  {
    name: "Mr. Thomas Wilson",
    role: "Science Department Head",
    image: "/images/faculty-2.jpg",
    bio: "M.Sc. Physics - Engaging educator with passion for experimental learning and STEM education.",
  },
  {
    name: "Mrs. Lakshmi Reddy",
    role: "English Department Head",
    image: "/images/faculty-3.jpg",
    bio: "M.A. English Literature - Award-winning teacher fostering love for language and creative writing.",
  },
  {
    name: "Mr. Ahmed Khan",
    role: "Sports Coordinator",
    image: "/images/faculty-4.jpg",
    bio: "B.P.Ed, M.P.Ed - Former state-level athlete promoting fitness and sportsmanship.",
  },
];

export function MeetTheTeam() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of experienced educators and administrators
            committed to nurturing every student&apos;s potential
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-center font-heading text-2xl font-bold text-foreground mb-8">
            Leadership Team
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="flex flex-col items-center text-center rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-32 w-32 overflow-hidden rounded-full mb-4 border-4 border-primary/20">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  {person.name}
                </h3>
                <span className="text-sm font-medium text-primary mt-1 mb-3">
                  {person.role}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Highlights */}
        <div>
          <h3 className="text-center font-heading text-2xl font-bold text-foreground mb-8">
            Faculty Highlights
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facultyHighlights.map((person) => (
              <div
                key={person.name}
                className="flex flex-col items-center text-center rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-28 w-28 overflow-hidden rounded-full mb-4">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading text-base font-semibold text-card-foreground">
                  {person.name}
                </h3>
                <span className="text-sm font-medium text-primary mt-1 mb-2">
                  {person.role}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Info */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-secondary/30 border border-border rounded-lg p-6 max-w-3xl">
            <h4 className="font-heading text-lg font-bold text-foreground mb-3">
              Our Complete Faculty Team
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Beyond our leadership and highlighted faculty, Don Bosco School is
              proud to have a team of 80+ qualified and passionate educators
              across all departments. Each teacher brings unique expertise,
              dedication, and a commitment to student success. Our faculty
              regularly participates in professional development programs to
              stay current with the latest educational methodologies and best
              practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
