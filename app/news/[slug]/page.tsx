import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Tag,
  User,
  Clock,
  ChevronRight,
} from "lucide-react";
import {
  getArticleBySlug,
  getAllArticleSlugs,
  newsArticles,
} from "@/lib/news-data";
import { ReadingProgress } from "@/components/news/reading-progress";
import { ShareButtons } from "@/components/news/share-buttons";
import { BackToTop } from "@/components/news/back-to-top";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} - Don Bosco School News`,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Calculate reading time (avg 200 words per minute)
  const wordCount = article.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  // Get related articles (same category, exclude current)
  const relatedArticles = newsArticles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      {/* Reading Progress Indicator */}
      <ReadingProgress />

      {/* Article Header */}
      <section className="bg-secondary py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/news" className="hover:text-primary transition-colors">
              News
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium line-clamp-1">
              {article.title}
            </span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Tag className="h-3 w-3" />
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {article.date}
            </span>
            {article.author && (
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                {article.author}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {readingTime} min read
            </span>
          </div>

          <h1 className="font-heading text-3xl font-extrabold text-secondary-foreground md:text-4xl lg:text-5xl text-balance">
            {article.title}
          </h1>

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 lg:py-12 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg group">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 lg:pb-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Social Share Sidebar */}
            <ShareButtons title={article.title} />

            {/* Main Content */}
            <div className="flex-1 order-1 lg:order-2">
              <article
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4 prose-ul:text-muted-foreground prose-li:mb-2 prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-muted-foreground">
                    Tags:
                  </span>
                  <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-pointer">
                    {article.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-pointer">
                    Design School
                  </span>
                  <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-pointer">
                    Don Bosco
                  </span>
                </div>
              </div>

              {/* Author Bio */}
              {article.author && (
                <div className="mt-8 p-6 rounded-lg bg-secondary/50 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-foreground mb-1">
                        {article.author}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Contributing author at Don Bosco School, sharing the
                        latest updates and stories from our vibrant campus
                        community.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Related Articles
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/news/${related.slug}`}
                    className="group rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        {related.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-heading font-semibold text-base leading-snug text-card-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {related.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {related.excerpt}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <time>{related.date}</time>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to All News
              </Link>
              <BackToTop />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
