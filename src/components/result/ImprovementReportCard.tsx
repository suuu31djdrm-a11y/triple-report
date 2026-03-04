import { CalendarIcon } from '@/components/icons'

export interface ImprovementReportCardProps {
  count: number
  deadline: string
  onConfirm?: () => void
  className?: string
}

export function ImprovementReportCard({ count, deadline, onConfirm, className = '' }: ImprovementReportCardProps) {
  return (
    <section className={`rounded-xl bg-white shadow-card border border-gray-100 overflow-hidden ${className}`}>
      <div className="flex items-start gap-3 p-4">
        <div className="h-10 w-10 shrink-0 rounded-full bg-gray-200" aria-hidden />
        <div className="min-w-0 flex-1">
          <h2 className="font-medium text-gray-900">要改善報告</h2>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
            <CalendarIcon className="h-4 w-4 shrink-0" />
            提出期限 {deadline}
          </p>
        </div>
        <span className="text-xl font-bold text-gray-900 shrink-0">{count}件</span>
      </div>
      <div className="px-4 pb-4">
        <button
          type="button"
          onClick={onConfirm}
          className="flex w-full items-center justify-center rounded-lg bg-primary py-3 text-white font-medium"
        >
          確認
        </button>
      </div>
    </section>
  )
}
