import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/lib/news-data";

export function LatestNews() {
  // Get the 3 most recent articles
  const latestArticles = newsArticles.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-secondary-foreground md:text-4xl text-balance">
            Latest News
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed">
            Stay updated on campus events, student achievements, and everything
            happening at Don Bosco school.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latestArticles.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <time className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {article.date}
                </time>
                <h3 className="mt-2 font-heading text-base font-semibold leading-snug text-card-foreground line-clamp-2">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
                <Link
                  href={`/news/${article.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
