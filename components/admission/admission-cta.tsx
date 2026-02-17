import Link from "next/link"

export function AdmissionCta() {
  return (
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-secondary-foreground md:text-3xl text-balance">
          Ready to Begin?
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Take the first step toward a career in design. Start your application
          or download the form to apply offline.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/90 transition-colors"
          >
            Start Your Application
          </Link>
          <Link
            href="/downloads"
            className="inline-flex items-center justify-center rounded-md border-2 border-primary px-7 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Download Application Form
          </Link>
        </div>
      </div>
    </section>
  )
}
