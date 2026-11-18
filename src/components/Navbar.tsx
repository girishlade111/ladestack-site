import { Link, useLocation } from 'react-router-dom';
import { PROFILE } from '../data/portfolioData';
import { useAppContext } from '../context/ThemeContext';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work', count: '(08)' },
  { to: '/services', label: 'Services', count: '(06)' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const { pathname } = useLocation();
  const { drawerOpen, toggleDrawer } = useAppContext();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[var(--bg-primary)]/85 border-b border-[var(--border-hairline)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <Link
          to="/"
          className="font-display text-base md:text-lg font-bold tracking-tight text-[var(--text-primary)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-blue)]"
        >
          {PROFILE.brand}
        </Link>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8 text-xs font-medium text-[var(--text-secondary)]"
        >
          {NAV_LINKS.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-blue)] ${
                  active ? 'text-[var(--text-primary)]' : ''
                }`}
              >
                <span>{item.label}</span>
                {item.count && (
                  <span className="ml-1 text-[10px] font-mono-tabular text-[var(--text-muted)]">
                    {item.count}
                  </span>
                )}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 bottom-0 h-[1.5px] bg-[var(--text-primary)] transition-transform duration-200 origin-left ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Drawer Action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={toggleDrawer}
            aria-label={drawerOpen ? 'Toggle navigation menu' : 'Open navigation menu'}
            aria-expanded={drawerOpen}
            className="min-w-[44px] min-h-[44px] flex flex-col items-end justify-center gap-[5px] px-2 rounded-lg text-[var(--text-primary)] hover:bg-[var(--bg-glass)] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-blue)]"
          >
            <span className="w-7 h-[1.5px] bg-current block" />
            <span className="w-5 h-[1.5px] bg-current block" />
          </button>
        </div>
      </div>
    </header>
  );
}
