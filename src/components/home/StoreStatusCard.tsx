import { Link } from 'react-router-dom'
import { FileIcon } from '@/components/icons'
import { RefreshIcon } from '@/components/icons'
import { FileCheckIcon } from '@/components/icons'
import { CircleAlertIcon } from '@/components/icons'
import { CalendarIcon } from '@/components/icons'
import { CommentIcon } from '@/components/icons'
import { BackIcon } from '@/components/icons'
import type { StatusTagVariant } from './StatusTag'
import { StatusTag } from './StatusTag'

export interface StoreStatusCardData {
  storeId: string
  storeName: string
  status: StatusTagVariant
  reportType: string
  reportAge: string
  checkDate?: string
  deadline?: string
  completedAt?: string
  progressCurrent: number
  progressTotal: number
  prevResultLabel?: string
}

export function StoreStatusCard({
  data,
  isMobile = false,
}: {
  data: StoreStatusCardData
  isMobile?: boolean
}) {
  const filled = data.progressTotal > 0 ? (data.progressCurrent / data.progressTotal) * 100 : 0
  const tagSize = isMobile ? 'mobile' : 'default'

  return (
    <article className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-bold text-gray-900 truncate text-base md:text-lg">
            {data.storeName}
          </h3>
          <StatusTag variant={data.status} size={tagSize} />
        </div>
        <div className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
          <FileIcon className="h-4 w-4 shrink-0" />
          <span>{data.reportType}</span>
          <span>・</span>
          <RefreshIcon className="h-4 w-4 shrink-0" />
          <span>{data.reportAge}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 py-1 text-sm">
          {data.checkDate && (
            <span className="flex items-center gap-1 text-gray-600">
              <FileCheckIcon className="h-4 w-4 shrink-0" />
              チェック実施 {data.checkDate}
            </span>
          )}
          {data.deadline && (
            <span className="flex items-center gap-1 text-[var(--report-red)]">
              <CircleAlertIcon className="h-4 w-4 shrink-0" />
              報告期限 {data.deadline}
            </span>
          )}
          {data.completedAt && !data.deadline && (
            <span className="flex items-center gap-1 text-gray-600">
              <CalendarIcon className="h-4 w-4 shrink-0" />
              完了 {data.completedAt}
            </span>
          )}
          {data.status === '報告の承認要' && !data.deadline && (
            <span className="flex items-center gap-1 text-gray-600">
              <CommentIcon className="h-4 w-4 shrink-0" />
              改善報告
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-[var(--report-green)] transition-all"
              style={{ width: `${filled}%` }}
            />
          </div>
          <span className="text-sm font-bold text-gray-900 shrink-0">
            {data.progressCurrent}/{data.progressTotal}
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <Link
          to="/result"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50"
        >
          <BackIcon className="h-4 w-4 shrink-0 md:h-5 md:w-5" />
          <span>前回結果</span>
          <span className="font-normal">{data.prevResultLabel ?? '(2025/11)'}</span>
        </Link>
        <Link
          to="/result"
          className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-primary bg-white px-3 py-2 text-sm font-bold text-primary hover:bg-primary/5"
        >
          次のチェックを開始
        </Link>
      </div>
    </article>
  )
}
