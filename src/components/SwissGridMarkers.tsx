import { CornerDownRight } from 'lucide-react';

export function CrosshairPlus({ className = '' }: { className?: string }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ color: 'var(--crosshair-color)' }}
    >
      <path d="M5 0V10M0 5H10" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function CrosshairRow({ className = '' }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-4 items-center w-full py-3 ${className}`}
      aria-hidden="true"
    >
      <div className="flex justify-start">
        <CrosshairPlus />
      </div>
      <div className="flex justify-start">
        <CrosshairPlus />
      </div>
      <div className="flex justify-start">
        <CrosshairPlus />
      </div>
      <div className="flex justify-start">
        <CrosshairPlus />
      </div>
    </div>
  );
}

export function SectionHeaderBar({
  label,
  edition,
  className = '',
}: {
  label: string;
  edition: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-between pt-4 pb-6 border-t border-[var(--border-hairline)] text-xs font-mono-tabular ${className}`}
    >
      <div className="flex items-center gap-2 text-[var(--text-primary)] font-medium">
        <CrosshairPlus />
        <span>{label}</span>
      </div>
      <span className="text-[var(--text-muted)] tracking-wider uppercase">{edition}</span>
      <CornerDownRight size={14} className="text-[var(--text-muted)]" aria-hidden="true" />
    </div>
  );
}
