import { ChevronRightIcon } from '@/components/icons'
import { DocumentCheckIcon } from './DocumentCheckIcon'

/** 業務の100点は赤、満点(100%)は青、それ以外は赤 */
const CATEGORIES = [
  { name: '業務', current: 100, max: 120, pct: 83, prev: '100/120, (83%)', highlight: 'low' as const },
  { name: 'クレンリネス', current: 80, max: 120, pct: 83, prev: '100/120, (83%)', highlight: 'low' as const },
  { name: 'クオリティ', current: 60, max: 120, pct: 50, prev: '100/120, (83%)', highlight: 'low' as const },
  { name: 'サービス', current: 60, max: 120, pct: 50, prev: '100/120, (83%)', highlight: 'low' as const },
  { name: 'ブランド', current: 120, max: 120, pct: 100, prev: '100/120, (83%)', highlight: 'high' as const },
  { name: 'チームワーク', current: 120, max: 120, pct: 100, prev: '100/120, (83%)', highlight: 'high' as const },
] as const

export interface ScoreDetailCardProps {
  totalScore: number
  maxScore: number
  prevLabel: string
  onViewScore?: () => void
  className?: string
}

/** Figma: 総合スコア（書類+チェックアイコン、100を赤で強調、前回、3x2カテゴリグリッド） */
export function ScoreDetailCard({
  totalScore,
  maxScore,
  prevLabel,
  onViewScore,
  className = '',
}: ScoreDetailCardProps) {
  const pct = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0

  return (
    <section className={`rounded-xl bg-white p-4 shadow-card ${className}`}>
      <button
        type="button"
        onClick={onViewScore}
        className="flex w-full items-center justify-between gap-2 text-left mb-3"
      >
        <span className="flex items-center gap-2">
          <div className="shrink-0 w-8 h-8 flex items-center justify-center text-primary">
            <DocumentCheckIcon className="w-full h-full" />
          </div>
          <h2 className="font-medium text-gray-900">総合スコア</h2>
        </span>
        <ChevronRightIcon className="h-5 w-5 text-gray-400 shrink-0" />
      </button>
      <p className="text-2xl font-bold">
        <span className="text-score-low">{totalScore}</span>
        <span className="text-gray-900">/{maxScore}</span>
        <span className="text-gray-900"> ({pct}%)</span>
      </p>
      <p className="text-sm text-gray-500 mt-1">前回:{prevLabel}</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {CATEGORIES.map((cat) => (
          <div key={cat.name} className="rounded-lg p-3" style={{ background: 'var(--black-50, #F9F9FC)' }}>
            <p className="text-sm font-medium text-gray-900">{cat.name}</p>
            <p className="mt-1">
              <span
                className={
                  cat.highlight === 'high' ? 'text-score-high font-semibold' : 'text-score-low font-semibold'
                }
              >
                {cat.current}
              </span>
              /120 ({cat.pct}%)
            </p>
            <p className="text-xs text-gray-500 mt-0.5">前回: {cat.prev}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
