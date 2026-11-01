"use client";

import { useState } from "react";

export function ShareLinks({ pillClass }: { pillClass: string }) {
  const [copied, setCopied] = useState(false);
  const pill = `box-content inline-flex min-h-10 items-center rounded-full px-3.5 text-sm ${pillClass}`;

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  }

  function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "noopener");
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button type="button" onClick={shareOnFacebook} className={pill}>
        Facebook
      </button>
      <button type="button" onClick={copyLink} className={pill}>
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
