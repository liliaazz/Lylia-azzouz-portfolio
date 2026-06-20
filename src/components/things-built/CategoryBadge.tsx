import clsx from 'clsx'
import type { CardAccent } from '@/types/things-built.types'

interface CategoryBadgeProps {
  label:  string
  accent: CardAccent
}

const accentStyles: Record<CardAccent, string> = {
  yellow: 'bg-brand-yellow/20 text-[#7A5F00] border-brand-yellow/30',
  blue:   'bg-brand-blue/10  text-blue-700   border-brand-blue/20',
  green:  'bg-green-50        text-green-700  border-green-200',
  purple: 'bg-purple-50       text-purple-700 border-purple-200',
}

export function CategoryBadge({ label, accent }: CategoryBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full',
        'text-[10px] font-bold tracking-[0.08em] uppercase border',
        accentStyles[accent],
      )}
    >
      {label}
    </span>
  )
}
