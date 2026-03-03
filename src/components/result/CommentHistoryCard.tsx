import { ChevronRightIcon } from '@/components/icons'
import { ChatHistoryIcon } from './ChatHistoryIcon'

export interface CommentHistoryCardProps {
  latestComment: string | null
  onViewHistory?: () => void
  className?: string
}

/** Figma: コメント履歴（アイコン + タイトル + 右矢印、プレースホルダー） */
export function CommentHistoryCard({ latestComment, onViewHistory, className = '' }: CommentHistoryCardProps) {
  return (
    <section className={`rounded-xl bg-white p-4 shadow-card border border-gray-100 ${className}`}>
      <button
        type="button"
        onClick={onViewHistory}
        className="flex w-full items-center justify-between gap-2 text-left"
      >
        <span className="flex items-center gap-2">
          <span className="shrink-0 w-8 h-8 flex items-center justify-center text-primary">
            <ChatHistoryIcon className="w-full h-full" />
          </span>
          <span className="font-medium text-gray-900">コメント履歴</span>
        </span>
        <ChevronRightIcon className="h-5 w-5 text-gray-400 shrink-0" />
      </button>
      <p className="mt-3 text-sm text-gray-500">
        {latestComment ?? 'ここにコメント履歴が表示される'}
      </p>
    </section>
  )
}
