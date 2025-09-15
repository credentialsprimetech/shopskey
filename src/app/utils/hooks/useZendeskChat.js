// ✅ hooks/useZendeskChat.js
"use client";

import { useCallback } from "react";

export function useZendeskChat() {
  const openChat = useCallback((onCtaClick) => {
    if (onCtaClick) {
      onCtaClick();
      return;
    }

    if (typeof window !== "undefined") {
      if (typeof window.openZendeskChat === "function") {
        try {
          window.openZendeskChat();
          return;
        } catch {}
      }
      if (typeof window.zE === "function") {
        try {
          window.zE("webWidget", "open");
          return;
        } catch {}
      }
      console.warn(
        "CTA clicked. Provide onCtaClick, ctaHref, or define window.openZendeskChat()."
      );
    }
  }, []);

  return { openChat };
}
