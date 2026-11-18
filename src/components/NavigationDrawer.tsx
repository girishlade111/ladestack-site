import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Moon, Sun, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { useAppContext } from '../context/ThemeContext';

const DRAWER_ROUTES = [
  { to: '/', label: 'Home', index: '01' },
  { to: '/about', label: 'About', index: '02' },
  { to: '/work', label: 'Work', index: '03' },
  { to: '/services', label: 'Services', index: '04' },
  { to: '/blog', label: 'Journal', index: '05' },
  { to: '/contact', label: 'Contact', index: '06' },
];

export function NavigationDrawer() {
  const { drawerOpen, setDrawerOpen, theme, toggleTheme } = useAppContext();
  const { pathname } = useLocation();

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname, setDrawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [drawerOpen, setDrawerOpen]);

  return (
    <AnimatePresence>
      {drawerOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[80] bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-y-auto"
        >
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-4 min-h-screen flex flex-col justify-between">
            {/* Drawer Header */}
            <div className="h-14 flex items-center justify-between border-b border-[var(--border-hairline)]">
              <span className="font-display text-lg font-bold tracking-tight">
                {PROFILE.brand}
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                  className="min-h-[40px] px-4 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-medium flex items-center gap-2 hover:bg-[var(--bg-surface-elevated)] transition-colors cursor-pointer whitespace-nowrap"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun size={14} aria-hidden="true" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon size={14} aria-hidden="true" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close drawer"
                  className="min-w-[44px] min-h-[44px] rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-center hover:bg-[var(--bg-surface-elevated)] transition-colors cursor-pointer"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Primary Navigation Links */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 items-end">
              <nav aria-label="Full-screen menu" className="lg:col-span-7 divide-y divide-[var(--border-hairline)]">
                {DRAWER_ROUTES.map((route, i) => {
                  const active = pathname === route.to;
                  return (
                    <motion.div
                      key={route.to}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.04 }}
                    >
                      <Link
                        to={route.to}
                        className="py-5 flex items-baseline justify-between group transition-colors"
                      >
                        <span
                          className={`font-display text-3xl sm:text-5xl font-semibold tracking-tight transition-transform duration-200 group-hover:translate-x-3 ${
                            active ? 'text-[var(--accent-blue)]' : 'text-[var(--text-primary)]'
                          }`}
                        >
                          {route.label}
                        </span>
                        <span className="font-mono-tabular text-xs text-[var(--text-muted)]">
                          {route.index}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="lg:col-span-5 space-y-8 border-t lg:border-t-0 lg:border-l border-[var(--border-hairline)] pt-8 lg:pt-0 lg:pl-12">
                <div>
                  <p className="text-xs font-mono-tabular uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    Identity & Base
                  </p>
                  <p className="text-lg font-semibold text-[var(--text-primary)]">{PROFILE.name}</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">{PROFILE.role}</p>
                  <p className="text-sm text-[var(--text-muted)] mt-1">{PROFILE.location}</p>
                </div>

                <div>
                  <p className="text-xs font-mono-tabular uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    Direct Contact
                  </p>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-base font-medium text-[var(--text-primary)] hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>{PROFILE.email}</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>

                <div>
                  <p className="text-xs font-mono-tabular uppercase tracking-wider text-[var(--text-muted)] mb-3">
                    Ecosystem & Profiles
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {PROFILE.socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1"
                      >
                        <span>{s.label}</span>
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border-hairline)] flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
              <span>© 2026 {PROFILE.brand} — {PROFILE.displayName}</span>
              <span>{PROFILE.availability}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
