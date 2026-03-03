import { CalendarIcon, ArrowRightIcon } from '@/components/icons'

export interface ProcessFlowCardProps {
  label: string
  from: { name: string; date: string; initial: string }
  to: { name: string; date: string; initial: string }
  className?: string
}

export function ProcessFlowCard({ label, from, to, className = '' }: ProcessFlowCardProps) {
  return (
    <section className={`rounded-xl bg-white p-4 shadow-card border border-gray-100 ${className}`}>
      <span className="inline-block rounded-md bg-primary-light px-2.5 py-1 text-sm font-medium text-gray-800">
        {label}
      </span>
      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex flex-col items-center gap-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 text-sm font-medium text-gray-600">
            {from.initial}
          </div>
          <p className="text-sm font-medium text-gray-900">{from.name}</p>
          <p className="flex items-center gap-1 text-xs text-gray-500">
            <CalendarIcon className="h-3 w-3" />
            {from.date}
          </p>
        </div>
        <ArrowRightIcon className="h-6 w-6 shrink-0 text-gray-400" aria-hidden />
        <div className="flex flex-col items-center gap-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-sm font-medium text-primary">
            {to.initial}
          </div>
          <p className="text-sm font-medium text-gray-900">{to.name}</p>
          <p className="flex items-center gap-1 text-xs text-gray-500">
            <CalendarIcon className="h-3 w-3" />
            {to.date}
          </p>
        </div>
      </div>
    </section>
  )
}
