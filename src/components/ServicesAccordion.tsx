import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

export function ServicesAccordion() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>('');
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const springConfig = { damping: 26, stiffness: 320 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX + 24);
    mouseY.set(e.clientY - 100);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActiveImage(null)}
      className="relative py-20 md:py-28 border-t border-[var(--border-hairline)]"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-baseline justify-between mb-14 gap-4">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--text-primary)]">
            ©Services
          </h2>
          <span className="text-sm font-mono-tabular text-[var(--text-muted)]">(06)</span>
        </div>

        <div className="divide-y divide-[var(--border-hairline)] border-y border-[var(--border-hairline)]">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              onMouseEnter={() => {
                setActiveImage(service.image);
                setActiveTitle(service.title);
              }}
              onMouseLeave={() => setActiveImage(null)}
              className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-baseline group hover:bg-[var(--bg-glass)] transition-colors px-3 -mx-3 rounded-lg"
            >
              <div className="md:col-span-1 text-xs font-mono-tabular text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                ({service.id})
              </div>
              <div className="md:col-span-5 font-display text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[var(--text-primary)] group-hover:translate-x-2 transition-transform duration-200">
                {service.title}
              </div>
              <div className="md:col-span-5 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                {service.description}
              </div>
              <div className="md:col-span-1 flex justify-end">
                <ArrowUpRight
                  size={18}
                  className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {activeImage && (
        <motion.div
          aria-hidden="true"
          style={{ x: cursorX, y: cursorY }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          className="fixed top-0 left-0 pointer-events-none z-40 w-72 h-44 rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl hidden lg:block"
        >
          <ResilientImage
            src={activeImage}
            alt={activeTitle}
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
    </section>
  );
}
