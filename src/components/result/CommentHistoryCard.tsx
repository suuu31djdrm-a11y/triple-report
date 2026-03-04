import { ChatHistoryIcon } from './ChatHistoryIcon'

export interface CommentHistoryCardProps {
  latestComment: string | null
  onViewHistory?: () => void
  className?: string
}

/** Figma: コメント履歴（アイコン + タイトル + 右矢印、プレースホルダー） */
export function CommentHistoryCard({ latestComment, onViewHistory: _onViewHistory, className = '' }: CommentHistoryCardProps) {
  return (
    <section className={`rounded-xl bg-white p-4 shadow-card border border-gray-100 ${className}`}>
      <div className="flex w-full items-center gap-2 text-left">
        <span className="shrink-0 w-8 h-8 flex items-center justify-center text-primary">
          <ChatHistoryIcon className="w-full h-full" />
        </span>
        <span className="font-bold text-gray-900">コメント履歴</span>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        {latestComment ?? 'ここにコメント履歴が表示される'}
      </p>
    </section>
  )
}
