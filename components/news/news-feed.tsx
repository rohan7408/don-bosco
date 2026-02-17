import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { newsArticles } from "@/lib/news-data";

export function NewsFeed() {
  return (
    <div className="flex flex-col gap-8">
      {newsArticles.map((article, index) => {
        // Calculate reading time
        const wordCount = article.content.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200);

        return (
          <article
            key={article.slug}
            className="group overflow-hidden rounded-lg border border-border bg-card flex flex-col sm:flex-row hover:shadow-xl transition-all duration-300 hover:border-primary/50"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
            }}
          >
            <Link
              href={`/news/${article.slug}`}
              className="relative h-64 sm:h-auto sm:w-80 shrink-0 overflow-hidden"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg">
                  {article.category}
                </span>
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </Link>
            <div className="flex flex-col justify-between p-6 flex-1">
              <div>
                <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {article.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {readingTime} min read
                  </span>
                  {article.author && (
                    <span className="inline-flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" />
                      {article.author}
                    </span>
                  )}
                </div>
                <Link href={`/news/${article.slug}`}>
                  <h3 className="font-heading text-xl font-bold leading-tight text-card-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Link
                  href={`/news/${article.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300 group/link"
                >
                  Read Full Article
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                {article.author && (
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
