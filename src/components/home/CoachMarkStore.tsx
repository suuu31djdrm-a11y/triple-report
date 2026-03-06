import { useEffect, useState } from 'react'

const STORAGE_KEY = 'coachMarkStoreSeen'
const DELAY_MS = 600
const MODAL_WIDTH_MAX = 400
const GAP_BELOW_TARGET = 12

/** ホーム画面表示後、delay で吹き出しを表示。デスクトップは「新しい店舗を登録」、モバイルは「5店舗」ボタンをハイライトするよう位置合わせ。 */
export function CoachMarkStore() {
  const [showBubble, setShowBubble] = useState(false)
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null)

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY)
    if (seen) return
    const timer = window.setTimeout(() => setShowBubble(true), DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!showBubble) return
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768
    const el = document.querySelector(isDesktop ? '.coach-mark-register-target' : '.coach-mark-store-target')
    if (el) {
      const rect = el.getBoundingClientRect()
      setTargetRect(rect)
    } else {
      setTargetRect(null)
    }
  }, [showBubble])

  const handleClose = () => {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setShowBubble(false)
  }

  if (!showBubble) return null

  const w = typeof window !== 'undefined' ? window.innerWidth : MODAL_WIDTH_MAX
  const half = MODAL_WIDTH_MAX / 2
  const leftRaw = targetRect ? targetRect.left + targetRect.width / 2 : w / 2
  const leftClamped = targetRect
    ? Math.max(half, Math.min(w - half, leftRaw))
    : w / 2
  const topValue = targetRect ? targetRect.bottom + GAP_BELOW_TARGET : undefined
  const transform = targetRect ? 'translate(-50%, 0)' : 'translate(-50%, -50%)'

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-black/50"
        aria-hidden
        onClick={handleClose}
      />
      <div
        className="fixed z-[101] w-[calc(100%-32px)] max-w-[400px] rounded-2xl bg-white p-6 shadow-2xl ring-2 ring-white/20"
        style={{
          ...(topValue !== undefined ? { top: topValue } : { top: '50%' }),
          left: leftClamped,
          transform,
        }}
        role="dialog"
        aria-labelledby="coach-mark-title"
        aria-modal="true"
      >
        <div
          className="absolute left-1/2 -top-3 h-0 w-0 -translate-x-1/2 border-l-[14px] border-r-[14px] border-b-[14px] border-l-transparent border-r-transparent border-b-white"
          aria-hidden
        />
        <h2 id="coach-mark-title" className="text-lg font-bold text-gray-900 mb-2">
          店舗契約のページが追加されました！
        </h2>
        <p className="text-sm text-[#5c5c5f] leading-relaxed mb-6">
          TRIPLE REPORTへ登録中の店舗の確認や、新しい店舗の登録を行うことができます。
        </p>
        <button
          type="button"
          onClick={handleClose}
          className="w-full rounded-full bg-primary py-3 text-sm font-bold text-white hover:bg-primary/90 shadow-md"
        >
          閉じる
        </button>
      </div>
    </>
  )
}
