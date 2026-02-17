import {
  Building2,
  BookOpen,
  FlaskConical,
  Laptop,
  Music,
  Dumbbell,
  Bus,
  Utensils,
  HeartPulse,
  Library,
  Theater,
  Microscope,
  Monitor,
  Drama,
  Palette,
  Trees,
} from "lucide-react";

const facilities = [
  {
    icon: Building2,
    title: "Smart Classrooms",
    description:
      "Air-conditioned, spacious classrooms equipped with smart boards, digital projectors, and interactive learning tools for enhanced education.",
  },
  {
    icon: Library,
    title: "Modern Library",
    description:
      "Extensive collection of 15,000+ books, digital resources, e-libraries, and comfortable reading spaces for students.",
  },
  {
    icon: FlaskConical,
    title: "Science Laboratories",
    description:
      "State-of-the-art Physics, Chemistry, and Biology labs with modern equipment for hands-on experiments and research.",
  },
  {
    icon: Laptop,
    title: "Computer Labs",
    description:
      "Advanced computer labs with latest hardware and software, high-speed internet, and coding platforms for technology education.",
  },
  {
    icon: Microscope,
    title: "Innovation Lab",
    description:
      "Dedicated makerspace for robotics, AI, 3D printing, and STEM projects to nurture innovation and creativity.",
  },
  {
    icon: Music,
    title: "Music & Dance Studio",
    description:
      "Professional studios with instruments, recording equipment, and practice spaces for various performing arts.",
  },
  {
    icon: Palette,
    title: "Art Studio",
    description:
      "Well-equipped art rooms with supplies for painting, sculpture, crafts, and various artistic expressions.",
  },
  {
    icon: Theater,
    title: "Auditorium",
    description:
      "Modern 500-seat auditorium with professional lighting, sound systems, and staging for events and performances.",
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    description:
      "Multi-purpose indoor and outdoor sports facilities including basketball, volleyball, badminton courts, and cricket grounds.",
  },
  {
    icon: Drama,
    title: "Activity Rooms",
    description:
      "Dedicated spaces for drama, debate, quiz clubs, and extracurricular activities promoting overall development.",
  },
  {
    icon: HeartPulse,
    title: "Medical Room",
    description:
      "Fully equipped infirmary with trained nursing staff available throughout school hours for health emergencies.",
  },
  {
    icon: Utensils,
    title: "Cafeteria",
    description:
      "Hygienic cafeteria serving nutritious meals and snacks with varied menu options in a spacious dining area.",
  },
  {
    icon: Bus,
    title: "Transport Facility",
    description:
      "Safe and reliable GPS-enabled bus service covering all major routes with trained drivers and attendants.",
  },
  {
    icon: Monitor,
    title: "Security Systems",
    description:
      "24/7 CCTV surveillance, trained security personnel, and controlled access ensuring student safety.",
  },
  {
    icon: Trees,
    title: "Green Campus",
    description:
      "Eco-friendly campus with gardens, play areas, and open spaces promoting environmental awareness.",
  },
  {
    icon: BookOpen,
    title: "Resource Center",
    description:
      "Career counseling, educational resources, and academic support services for student guidance.",
  },
];

export function Facilities() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            World-Class Infrastructure & Facilities
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-3xl mx-auto">
            We provide exceptional learning environments and state-of-the-art
            facilities that support academic excellence and holistic development
            of every student
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                <facility.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-base font-semibold text-card-foreground mb-2">
                {facility.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-card border border-border rounded-lg p-8">
          <h3 className="font-heading text-xl font-bold text-card-foreground mb-4 text-center">
            More Than Just Infrastructure
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground text-center max-w-4xl mx-auto">
            Our facilities are designed to create an optimal learning
            environment that encourages exploration, creativity, and academic
            achievement. We continuously invest in upgrading our infrastructure
            to incorporate the latest educational technologies and best
            practices, ensuring our students have access to resources that
            prepare them for future success.
          </p>
        </div>
      </div>
    </section>
  );
}
