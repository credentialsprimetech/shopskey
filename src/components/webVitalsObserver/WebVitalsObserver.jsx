"use client";

import { useEffect } from "react";

export default function WebVitalsObserver() {
  useEffect(() => {
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("LCP:", entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: ["largest-contentful-paint"] });
    }
  }, []);

  return null;
}
