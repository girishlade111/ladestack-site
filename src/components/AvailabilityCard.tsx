import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { IMAGES, PROFILE } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface AvailabilityCardProps {
  subtitle?: string;
  className?: string;
}

export function AvailabilityCard({
  subtitle = PROFILE.availability,
  className = '',
}: AvailabilityCardProps) {
  return (
    <Link
      to="/contact"
      aria-label={`${subtitle} — Contact ${PROFILE.displayName}`}
      className={`inline-block group ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3.5 p-2.5 pr-3 rounded-xl bg-black/55 dark:bg-white/[0.08] backdrop-blur-xl border border-white/15 hover:border-white/30 transition-colors shadow-2xl min-w-[260px]"
      >
        <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/20 shrink-0 bg-neutral-900">
          <ResilientImage
            src={IMAGES.portrait}
            alt={PROFILE.displayName}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col text-left min-w-0 flex-1">
          <span className="text-[11px] font-mono-tabular tracking-wide text-white/65 truncate">
            {subtitle}
          </span>
          <span className="text-sm font-semibold text-white whitespace-nowrap truncate">
            {PROFILE.displayName}
          </span>
          <span className="text-[11px] text-white/55 whitespace-nowrap truncate">
            LadeStack™ Founder
          </span>
        </div>

        <div className="flex flex-col items-end justify-between h-12 shrink-0 ml-2">
          <div className="w-6 h-6 rounded-md bg-white text-black flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
            <ArrowRight size={13} strokeWidth={2.4} aria-hidden="true" />
          </div>

          <div className="flex items-end gap-[3px] h-3" aria-hidden="true">
            {[0.55, 1, 0.45, 0.85, 0.6].map((h, i) => (
              <motion.span
                key={i}
                className="w-[2px] bg-white/65 rounded-full origin-bottom"
                style={{ height: '100%' }}
                animate={{
                  scaleY: [h, 0.25, Math.min(1, h + 0.3), 0.35, h],
                }}
                transition={{
                  duration: 1.15,
                  repeat: Infinity,
                  delay: i * 0.14,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
