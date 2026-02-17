import type { Metadata } from "next";
<<<<<<< HEAD
import { Newspaper, Filter } from "lucide-react";
=======
>>>>>>> 58d541f95962b39a8299eef669185ff5361ef304
import { NewsFeed } from "@/components/news/news-feed";
import { NewsSidebar } from "@/components/news/news-sidebar";

export const metadata: Metadata = {
  title: "News Updates - Don Bosco school",
  description:
    "Stay updated with the latest events, announcements, and student spotlights at Don Bosco school.",
};

export default function NewsPage() {
  return (
    <>
<<<<<<< HEAD
      <section className="relative bg-gradient-to-br from-secondary via-secondary to-primary/10 py-16 lg:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
              <Newspaper className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Latest Updates
              </span>
            </div>

            <h1 className="font-heading text-4xl font-extrabold text-secondary-foreground md:text-6xl text-balance max-w-3xl mb-4">
              News &amp; Updates
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              The latest happenings from campus, student achievements, and
              upcoming events. Stay connected with our vibrant community.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 md:gap-12">
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  50+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Articles
                </div>
              </div>
              <div className="flex flex-col items-center border-x border-border px-4">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  12
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Categories
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  Weekly
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Updates
                </div>
              </div>
            </div>
          </div>
=======
      <section className="bg-secondary py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="font-heading text-3xl font-extrabold text-secondary-foreground md:text-5xl text-balance text-center">
            News &amp; Updates
          </h1>
          <p className="mt-3 text-center text-muted-foreground max-w-lg mx-auto leading-relaxed">
            The latest happenings from campus, student achievements, and
            upcoming events.
          </p>
>>>>>>> 58d541f95962b39a8299eef669185ff5361ef304
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
<<<<<<< HEAD
          {/* Filters Bar */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
            <p className="text-sm text-muted-foreground">
              Showing all news articles
            </p>
            <button className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground hover:bg-accent transition-colors">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="flex-1 lg:basis-[68%]">
              <NewsFeed />
            </div>
            <aside className="lg:basis-[32%]">
=======
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="flex-1 lg:basis-[70%]">
              <NewsFeed />
            </div>
            <aside className="lg:basis-[30%]">
>>>>>>> 58d541f95962b39a8299eef669185ff5361ef304
              <NewsSidebar />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
