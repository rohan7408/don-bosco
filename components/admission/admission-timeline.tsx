const steps = [
  {
    number: "1",
    title: "Explore Programs",
    description:
      "Browse our range of design programs to find the one that matches your creative goals and career aspirations.",
  },
  {
    number: "2",
    title: "Submit Application",
    description:
      "Complete the online application form with your personal details, academic history, and a statement of purpose.",
  },
  {
    number: "3",
    title: "Portfolio Review",
    description:
      "Submit a portfolio of 10-15 pieces showcasing your creative skills. Our faculty reviews each submission personally.",
  },
  {
    number: "4",
    title: "Enroll",
    description:
      "Receive your acceptance letter, confirm your spot, and get ready to start your journey at Don Bosco school.",
  },
];

export function AdmissionTimeline() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl mb-12">
          Admission Process
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:left-8" />

          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative flex gap-5 md:gap-6">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading text-lg font-bold shadow-md md:h-16 md:w-16 md:text-xl">
                  {step.number}
                </div>
                <div className="pt-1 md:pt-3">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
