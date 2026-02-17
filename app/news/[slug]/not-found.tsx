import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-2xl px-4 lg:px-8 text-center">
        <h1 className="font-heading text-6xl font-extrabold text-foreground mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          Article Not Found
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Sorry, we couldn't find the news article you're looking for. It may
          have been removed or the link might be incorrect.
        </p>
        <Link
          href="/news"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All News
        </Link>
      </div>
    </section>
  );
}
