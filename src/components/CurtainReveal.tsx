import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE } from '../data/portfolioData';

export function CurtainReveal() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1') return false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return true;
  });

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => setVisible(false), 1100);
    return () => window.clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
          style={{ originY: 0 }}
          aria-hidden="true"
          className="fixed inset-0 z-[100] bg-[#070707] flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="text-center px-6"
          >
            <span className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white block">
              {PROFILE.brand}
            </span>
            <span className="block text-xs font-mono-tabular text-white/45 tracking-widest uppercase mt-2">
              Engineering & Design
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
