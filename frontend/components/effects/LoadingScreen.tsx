"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADER_SEEN_KEY = "sheesh-loader-seen";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.sessionStorage.getItem(LOADER_SEEN_KEY) === "true") {
      setLoading(false);
      return;
    }
    window.sessionStorage.setItem(LOADER_SEEN_KEY, "true");
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050505]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_60%)]" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center"
          >
            <p className="font-[family-name:var(--font-accent)] text-xs tracking-[0.5em] text-[#d4af37]/70 uppercase">
              Sheesh
            </p>
            <h1 className="font-[family-name:var(--font-display)] mt-4 text-4xl tracking-[0.15em] text-white uppercase md:text-6xl">
              Eatery & Lounge
            </h1>
          </motion.div>
          <div className="absolute bottom-16 left-1/2 w-48 -translate-x-1/2">
            <div className="h-px w-full overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <p className="mt-3 text-center font-[family-name:var(--font-body)] text-[10px] tracking-[0.3em] text-white/40 uppercase">
              Loading
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
