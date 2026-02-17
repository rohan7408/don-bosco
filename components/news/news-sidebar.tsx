"use client";

import { useState } from "react";
import { Search, Calendar, TrendingUp, Tag, Mail, Bell } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { newsArticles } from "@/lib/news-data";

const categories = ["All", "Events", "Announcements", "Student Spotlights"];

const popularTags = [
  "Design Awards",
  "Workshop",
  "Campus Life",
  "Student Work",
  "Faculty",
  "Innovation",
  "Community",
  "Portfolio",
];

export function NewsSidebar() {
  const [active, setActive] = useState("All");
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");

  // Get recent articles (top 3)
  const recentArticles = newsArticles.slice(0, 3);

  return (
    <div className="flex flex-col gap-6 sticky top-8">
      {/* Search */}
      <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
        <h3 className="font-heading text-base font-semibold text-card-foreground mb-4 flex items-center gap-2">
          <Search className="h-4 w-4 text-primary" />
          Search News
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Handle search
          }}
          className="relative"
        >
          <input
            type="search"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-md border border-input bg-background pl-3 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-primary/10 rounded-md transition-colors"
            aria-label="Search"
          >
            <Search className="h-4 w-4 text-muted-foreground" />
          </button>
        </form>
      </div>

      {/* Categories */}
      <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
        <h3 className="font-heading text-base font-semibold text-card-foreground mb-4 flex items-center gap-2">
          <Tag className="h-4 w-4 text-primary" />
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200",
                active === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border text-card-foreground hover:bg-primary/10 hover:border-primary/50",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
        <h3 className="font-heading text-base font-semibold text-card-foreground mb-4 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          Recent Posts
        </h3>
        <div className="flex flex-col gap-4">
          {recentArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group flex flex-col gap-2 pb-4 border-b border-border last:border-0 last:pb-0 hover:translate-x-1 transition-transform duration-200"
            >
              <h4 className="text-sm font-semibold leading-tight text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <time>{article.date}</time>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
        <h3 className="font-heading text-base font-semibold text-card-foreground mb-4 flex items-center gap-2">
          <Tag className="h-4 w-4 text-primary" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag}
              className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-5 shadow-sm">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Bell className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-heading text-base font-semibold text-card-foreground mb-1">
              Stay Updated
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Get the latest news delivered straight to your inbox.
            </p>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
          }}
          className="flex flex-col gap-3"
        >
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border border-input bg-background pl-10 pr-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
}
