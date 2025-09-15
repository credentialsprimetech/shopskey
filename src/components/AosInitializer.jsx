// src/components/AosInitializer.jsx
"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AosInitializer() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return null; // it doesn’t render anything
}
