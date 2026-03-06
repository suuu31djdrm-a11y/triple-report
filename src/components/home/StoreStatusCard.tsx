import { Link } from 'react-router-dom'
import { FileIcon } from '@/components/icons'
import { RefreshIcon } from '@/components/icons'
import { FileCheckIcon } from '@/components/icons'
import { CircleAlertIcon } from '@/components/icons'
import { CalendarIcon } from '@/components/icons'
import { CommentIcon } from '@/components/icons'
import { BackIcon } from '@/components/icons'
import type { StatusTagVariant } from './StatusTag'
import { StatusTag, variantProgressColor } from './StatusTag'

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
  const tagSize = isMobile ? 'mobile' : 'default'
  const total = Math.max(1, data.progressTotal)
  const current = Math.min(data.progressCurrent, total)

  return (
    <article className="flex flex-col gap-4 rounded-lg border border-[#ebebed] bg-white p-4">
      {/* 1. 店舗名 + ステータスタグ */}
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg font-bold text-gray-900 truncate">
          {data.storeName}
        </h3>
        <StatusTag variant={data.status} size={tagSize} />
      </div>

      {/* 2. ステップゲージ + 2/4 */}
      <div className="flex items-center gap-2 w-full">
        <div className="flex flex-1 gap-1">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className="h-2 flex-1 min-w-0 rounded-sm"
              style={{
                backgroundColor: i < current ? variantProgressColor[data.status] : '#dcdcde',
              }}
            />
          ))}
        </div>
        <span className="text-sm font-bold text-gray-900 shrink-0 tabular-nums">
          {data.progressCurrent}/{data.progressTotal}
        </span>
      </div>

      {/* 3. 週次レポート・1時間前 */}
      <div className="flex items-center gap-1 text-sm text-[#5c5c5f]">
        <FileIcon className="h-4 w-4 shrink-0" />
        <span>{data.reportType}</span>
        <span>・</span>
        <RefreshIcon className="h-4 w-4 shrink-0" />
        <span>{data.reportAge}</span>
      </div>

      {/* 4. チェック実施 | 報告期限 / 完了 / 改善報告 */}
      <div className="flex flex-wrap items-center gap-2 py-1 text-sm">
        {data.checkDate && (
          <span className="flex items-center gap-1 text-[#5c5c5f]">
            <FileCheckIcon className="h-4 w-4 shrink-0" />
            チェック実施 {data.checkDate}
          </span>
        )}
        {data.deadline && (
          <>
            <span className="text-[#5c5c5f]">|</span>
            <span className="flex items-center gap-1 text-[var(--report-red)]">
              <CircleAlertIcon className="h-4 w-4 shrink-0" />
              報告期限 {data.deadline}
            </span>
          </>
        )}
        {data.completedAt && !data.deadline && (
          <span className="flex items-center gap-1 text-[#5c5c5f]">
            <CalendarIcon className="h-4 w-4 shrink-0" />
            完了 {data.completedAt}
          </span>
        )}
        {data.status === '報告の承認要' && !data.deadline && (
          <span className="flex items-center gap-1 text-[#5c5c5f]">
            <CommentIcon className="h-4 w-4 shrink-0" />
            改善報告
          </span>
        )}
      </div>

      {/* 5. 前回結果 + 次のチェックを開始（1行で折り返さない） */}
      <div className="flex flex-nowrap gap-2 mt-auto min-w-0">
        <Link
          to="/result"
          className="inline-flex flex-1 min-w-0 items-center justify-center gap-1 rounded-full border border-[#dcdcde] bg-white px-2 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50 whitespace-nowrap"
        >
          <BackIcon className="h-4 w-4 shrink-0" />
          <span className="truncate">前回結果{data.prevResultLabel ?? '(2025/11)'}</span>
        </Link>
        <Link
          to="/result"
          className="inline-flex flex-1 min-w-0 items-center justify-center rounded-full border border-primary bg-white px-2 py-2 text-sm font-bold text-primary hover:bg-primary/5 whitespace-nowrap shrink-0"
        >
          次のチェックを開始
        </Link>
      </div>
    </article>
  )
}
