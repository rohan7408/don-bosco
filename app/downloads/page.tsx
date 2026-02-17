import type { Metadata } from "next";
import { DownloadSection } from "@/components/downloads/download-section";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Downloads - Don Bosco school",
  description:
    "Access admission forms, academic resources, policies, and branding assets from Don Bosco school.",
};

const sections = [
  {
    title: "Admission Forms",
    files: [
      { name: "Undergraduate Application Form", type: "PDF", size: "1.2 MB" },
      { name: "Graduate Application Form", type: "PDF", size: "1.4 MB" },
      { name: "Scholarship Application Form", type: "PDF", size: "820 KB" },
      { name: "Portfolio Submission Guidelines", type: "PDF", size: "540 KB" },
    ],
  },
  {
    title: "Academic Resources",
    files: [
      { name: "2026 Course Catalog", type: "PDF", size: "3.8 MB" },
      { name: "Academic Calendar 2026-2027", type: "PDF", size: "420 KB" },
      { name: "Student Handbook", type: "PDF", size: "2.1 MB" },
      { name: "Program Brochure", type: "PDF", size: "5.2 MB" },
    ],
  },
  {
    title: "Policies",
    files: [
      { name: "Code of Conduct", type: "PDF", size: "310 KB" },
      { name: "Privacy Policy", type: "PDF", size: "280 KB" },
      { name: "Academic Integrity Policy", type: "PDF", size: "190 KB" },
    ],
  },
  {
    title: "Branding Assets",
    files: [
      { name: "Don Bosco school Logo Pack", type: "ZIP", size: "8.6 MB" },
      { name: "Brand Guidelines", type: "PDF", size: "4.1 MB" },
      { name: "Presentation Template", type: "PPTX", size: "6.3 MB" },
    ],
  },
];

export default function DownloadsPage() {
  return (
    <>
      <section className="bg-secondary py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="font-heading text-3xl font-extrabold text-secondary-foreground md:text-5xl text-balance">
            Downloads
          </h1>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Find all the forms, resources, and documents you need in one place.
          </p>

          {/* Search bar */}
          <div className="mt-8 mx-auto max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full rounded-md border border-input bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 flex flex-col gap-12">
          {sections.map((section) => (
            <DownloadSection key={section.title} {...section} />
          ))}
        </div>
      </section>
    </>
  );
}
