import type { Metadata } from "next";
import { AdmissionTimeline } from "@/components/admission/admission-timeline";
import { ImportantDates } from "@/components/admission/important-dates";
import { AdmissionFaq } from "@/components/admission/admission-faq";
import { AdmissionCta } from "@/components/admission/admission-cta";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admission - Don Bosco school",
  description:
    "Your step-by-step guide to joining Don Bosco school. Explore deadlines, FAQs, and start your application today.",
};

export default function AdmissionPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h1 className="font-heading text-3xl font-extrabold text-secondary-foreground md:text-5xl text-balance">
            Your Creative Journey Starts Here
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Our admission process is designed to be clear and supportive. Follow
            the steps below to begin your application.
          </p>
        </div>
      </section>

      <AdmissionTimeline />
      <ImportantDates />
      <AdmissionFaq />
      <AdmissionCta />
    </>
  );
}
