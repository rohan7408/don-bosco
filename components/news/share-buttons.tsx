"use client";

import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const shareUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      "_blank",
      "width=600,height=400",
    );
  };

  const handleTwitterShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      "_blank",
      "width=600,height=400",
    );
  };

  const handleLinkedInShare = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      "_blank",
      "width=600,height=400",
    );
  };

  const handleEmailShare = () => {
    window.location.href = `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;
  };

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start order-2 lg:order-1">
      <div className="flex lg:flex-col gap-3">
        <p className="text-sm font-semibold text-muted-foreground mb-2 hidden lg:block">
          Share
        </p>
        <button
          onClick={handleFacebookShare}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877f2] hover:bg-[#1877f2]/90 text-white transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4" />
        </button>
        <button
          onClick={handleTwitterShare}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </button>
        <button
          onClick={handleLinkedInShare}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0a66c2] hover:bg-[#0a66c2]/90 text-white transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </button>
        <button
          onClick={handleEmailShare}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground transition-colors"
          aria-label="Share via Email"
        >
          <Mail className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
}
