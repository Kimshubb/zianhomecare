"use client";

import { useMemo, useState } from "react";
import { SiFacebook } from "@icons-pack/react-simple-icons";
import { Link2, MessageCircle, Check } from "lucide-react";

interface ShareButtonsProps {
  title: string;
}

export function ShareButtons({
  title,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const url =
    typeof window !== "undefined"
      ? window.location.href
      : "";

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = useMemo(
    () => ({
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    }),
    [encodedUrl, encodedTitle]
  );

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-secondary-soft"
      >
        <SiFacebook
          className="h-4 w-4"
          color="currentColor"
        />
      </a>

      {/* WhatsApp */}
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-secondary-soft"
      >
        <MessageCircle className="h-4 w-4" />
      </a>

      {/* Copy Link */}
      <button
        type="button"
        onClick={handleCopyLink}
        aria-label="Copy link"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-secondary-soft"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <Link2 className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}