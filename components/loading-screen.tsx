"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center"
        >
          {/* Background rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            {[200, 350, 500].map((size, i) => (
              <motion.div
                key={size}
                className="absolute rounded-full border border-[#00FF88]/10"
                style={{ width: size, height: size }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{
                  duration: 8 + i * 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Central icon */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative mb-10"
          >
            <div className="w-20 h-20 rounded-2xl bg-[#00FF88]/10 border border-[#00FF88]/30 flex items-center justify-center glow-green">
              <svg
                viewBox="0 0 24 24"
                className="w-10 h-10 text-[#00FF88]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>
          </motion.div>

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-10"
          >
            <p
              className="text-[#00FF88] text-2xl font-black tracking-[0.3em] mb-1 text-glow"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              RASTREIO
            </p>
            <p className="text-[#EDEDED]/30 text-xs tracking-[0.4em]">
              INICIALIZANDO SISTEMA
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-[#111111] rounded-full overflow-hidden mb-3">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: "linear-gradient(90deg, #00FF88, #00C46A)",
                boxShadow: "0 0 10px rgba(0,255,136,0.6)",
              }}
              transition={{ duration: 0.15 }}
            />
          </div>

          <p
            className="text-[#00FF88]/50 text-xs tracking-widest"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {Math.min(Math.floor(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
