import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectCaseStudy } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface WorkCardProps {
  project: ProjectCaseStudy;
  index: number;
  tilted?: boolean;
}

export function WorkCard({ project, index, tilted = true }: WorkCardProps) {
  const shortYear = project.year.slice(-2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay: Math.min(index * 0.08, 0.3) }}
      className="w-full"
    >
      <Link
        to={`/work/${project.slug}`}
        className="block group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-blue)] rounded-2xl"
      >
        <motion.article
          whileHover={{
            rotate: 0,
            scale: 1.012,
            transition: { type: 'spring', stiffness: 320, damping: 24 },
          }}
          style={tilted ? { rotate: `${project.rotateDeg}deg` } : undefined}
          className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] rounded-2xl overflow-hidden border border-[var(--border-hairline)] bg-[var(--bg-surface)] shadow-2xl"
        >
          <ResilientImage
            src={project.image}
            alt={`${project.title} — ${project.tagline}`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-black/15"
          />

          <div className="absolute top-6 left-6 right-6 flex items-center justify-between gap-4 z-10 text-xs text-white/80">
            <span className="font-medium tracking-wide">
              {project.category} · {project.stack.slice(0, 2).join(' / ')}
            </span>
            <span className="font-mono-tabular text-white/65">({project.index})</span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6 z-10">
            <div className="min-w-0">
              <div className="flex items-baseline gap-2.5">
                <span className="text-xs font-mono-tabular text-white/65">
                  ©{shortYear}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white group-hover:translate-x-1 transition-transform duration-200">
                  {project.title}
                </h3>
              </div>
              <p className="mt-2 text-sm text-white/75 max-w-xl line-clamp-2">
                {project.tagline}
              </p>
            </div>

            <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-200">
              <ArrowUpRight size={18} aria-hidden="true" />
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
