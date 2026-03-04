import { useEffect, useRef, useState } from 'react'
import { MenuIcon } from '@/components/icons'
import logoSvg from '@/assets/triplereport-logo.svg'
import {
  ReportHeader,
  ScoreDetailCard,
  ApprovalFlowCard,
  BottomActionBar,
} from '@/components/result'

const APPROVAL_STEPS = [
  { name: '木下浩之', date: '3/12', tag: 'QSCチェック完了', initial: '木', status: 'completed' as const },
  { name: '田中良子', date: '3/19', tag: '要結果確認・報告', initial: '田', status: 'current' as const },
  { name: '木下浩之', initial: '木', status: 'pending' as const },
]

const SCROLL_THRESHOLD = 60
const SCROLL_END_DELAY_MS = 300

export default function ResultOverviewPage() {
  const [headerCollapsed, setHeaderCollapsed] = useState(false)
  const [bottomBarVisible, setBottomBarVisible] = useState(true)
  const lastScrollY = useRef(0)
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const scrollingDown = y > lastScrollY.current

      if (y > SCROLL_THRESHOLD && scrollingDown) {
        setHeaderCollapsed(true)
      } else if (y <= SCROLL_THRESHOLD || !scrollingDown) {
        setHeaderCollapsed(false)
      }
      lastScrollY.current = y

      setBottomBarVisible(false)
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current)
      scrollEndTimer.current = setTimeout(() => {
        setBottomBarVisible(true)
        scrollEndTimer.current = null
      }, SCROLL_END_DELAY_MS)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 pb-[calc(5rem+16px)]">
      {/* 下スクロール時: タイトルバーのみ固定表示（トップバー・ゲージは非表示） */}
      {headerCollapsed && (
        <div className="fixed top-0 left-0 right-0 z-20 bg-white">
          <ReportHeader
            storeName="銀座店"
            reportLabel="月次レポート"
            reportAge="1日前"
            assigneeName="田中良子"
            deadline="3/19"
            progressCurrent={8}
            progressTotal={12}
            variant="titleOnly"
          />
        </div>
      )}

      {/* 通常時: トップバー＋タイトルバー＋ゲージ（スクロールで隠れる・stickyにしない） */}
      <div>
        <header className="bg-white px-4 py-2">
          <div className="flex items-center justify-between">
            <img src={logoSvg} alt="TRIPLE REPORT" className="h-5 w-auto" />
            <button type="button" className="p-2 text-gray-900 hover:bg-gray-100 rounded-lg" aria-label="メニュー">
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </header>

        <ReportHeader
          storeName="銀座店"
          reportLabel="月次レポート"
          reportAge="1日前"
          assigneeName="田中良子"
          deadline="3/19"
          progressCurrent={8}
          progressTotal={12}
        />
      </div>

      <main className="mx-auto max-w-lg px-4 py-4 space-y-4">
        {/* 総合スコア: 100/120 (100を赤)、前回、3x2カテゴリ */}
        <ScoreDetailCard
          totalScore={100}
          maxScore={120}
          prevLabel="80/120 (66%)"
        />

        {/* 対応履歴: 縦タイムライン + 総括コメント */}
        <ApprovalFlowCard
          steps={APPROVAL_STEPS}
          summaryComment="サービスやクオリティの項目で改善が必要です。確認お願いします。"
        />
      </main>

      {/* Bottom: 全項目を確認 121件 | 要報告を確認 12件 */}
      <BottomActionBar
        allItemsCount={121}
        reportItemsCount={12}
        visible={bottomBarVisible}
      />
    </div>
  )
}
