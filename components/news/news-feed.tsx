import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
=======
>>>>>>> 58d541f95962b39a8299eef669185ff5361ef304
import { newsArticles } from "@/lib/news-data";

export function NewsFeed() {
  return (
    <div className="flex flex-col gap-8">
<<<<<<< HEAD
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
=======
      {newsArticles.map((article) => (
        <article
          key={article.title}
          className="group overflow-hidden rounded-lg border border-border bg-card flex flex-col sm:flex-row"
        >
          <div className="relative h-52 sm:h-auto sm:w-64 shrink-0 overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
          </div>
          <div className="flex flex-col justify-center p-5">
            <div className="flex items-center gap-3 mb-2">
              <time className="text-xs font-semibold uppercase tracking-wider text-primary">
                {article.date}
              </time>
              <span className="text-xs text-muted-foreground">
                {article.category}
              </span>
            </div>
            <h3 className="font-heading text-lg font-semibold leading-snug text-card-foreground">
              {article.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
              {article.excerpt}
            </p>
            <Link
              href={`/news/${article.slug}`}
              className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
            >
              Read More
            </Link>
          </div>
        </article>
      ))}
>>>>>>> 58d541f95962b39a8299eef669185ff5361ef304
    </div>
  );
}
