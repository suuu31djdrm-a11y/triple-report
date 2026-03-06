import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HomeSidebar, MobileTopBar, HomeBottomNav } from '@/components/home'
import { MOCK_STORES_TABLE, type StoreTableRow, type StoreStatus } from '@/data/contractedStores'

export type { StoreTableRow, StoreStatus } from '@/data/contractedStores'

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
    </svg>
  )
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  )
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

const statusLabel: Record<StoreStatus, string> = {
  '契約中': '契約中',
  '解約予定': '解約予定',
  '解約済': '解約済',
}

const PAGE_SIZE_OPTIONS = [10, 20, 50]
const DEFAULT_PAGE_SIZE = 10

export default function StoresPage() {
  const [stores] = useState<StoreTableRow[]>(MOCK_STORES_TABLE)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)

  const totalAmount = stores.reduce((sum, s) => sum + s.monthlyAmount, 0)
  const totalPages = Math.max(1, Math.ceil(stores.length / pageSize))
  const start = (page - 1) * pageSize
  const pageStores = stores.slice(start, start + pageSize)
  const canPrev = page > 1
  const canNext = page < totalPages

  return (
    <div className="min-h-screen bg-[#f9f9fc]">
      <div className="hidden md:block">
        <HomeSidebar />
      </div>

      <div className="md:ml-64 min-h-screen flex flex-col pb-20 md:pb-0">
        {/* モバイル: ロゴ + 店舗ボタン + ハンバーガー */}
        <header className="sticky top-0 z-10 border-b border-[#dcdcde] bg-white md:hidden">
          <MobileTopBar storeCount={stores.length} />
        </header>
        <main className="flex-1 px-4 py-4 md:py-6 md:px-[120px]">
          <div className="mx-auto max-w-5xl">
            {/* タイトル・説明 */}
            <div className="mb-6 flex flex-col gap-2">
              <h1 className="text-2xl font-bold text-gray-900">契約店舗</h1>
              <p className="text-sm text-[#5c5c5f]">
                契約店舗の確認や、新店舗を追加することができます。契約店舗数に関するお問い合わせは、弊社のカスタマーサービスまでお問い合わせください。
              </p>
            </div>

            {/* 契約店舗数カード: 背景 #E8EAF8、アイコン丸はモバイル32px・デスクトップ64px（#3C51C1） */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-stretch">
              <div className="flex flex-1 items-center gap-4 md:gap-6 rounded-lg bg-[#E8EAF8] p-4 md:p-6 shadow-[4px_2px_8px_0px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="h-8 w-8 md:h-16 md:w-16 shrink-0 rounded-full bg-[#3C51C1]" aria-hidden />
                  <div>
                    <p className="text-sm text-gray-900">契約店舗数</p>
                    <p className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-bold tabular-nums text-gray-900">{stores.length}</span>
                      <span className="text-base text-gray-900">店舗</span>
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-end">
                  <Link
                    to="/stores/add"
                    className="inline-flex min-w-[64px] items-center justify-center gap-1 rounded-full bg-primary px-8 py-3 text-sm font-bold text-white shadow-sm hover:bg-primary/90"
                  >
                    <PlusIcon className="h-5 w-5" />
                    新しい店舗を登録
                  </Link>
                </div>
              </div>
            </div>

            {/* テーブル: 店舗名・登録日・状態・月額 */}
            <section className="overflow-hidden rounded-lg border border-[#ebebed] bg-white">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[280px] md:min-w-[400px]">
                  <thead>
                    <tr className="border-b border-[#ebebed]">
                      <th className="h-12 px-4 text-left text-sm font-medium text-[#5c5c5f]">店舗名</th>
                      <th className="h-12 px-4 text-left text-sm font-medium text-[#5c5c5f]">登録日</th>
                      <th className="h-12 px-4 text-left text-sm font-medium text-[#5c5c5f] hidden md:table-cell">状態</th>
                      <th className="h-12 px-4 text-right text-sm font-medium text-[#5c5c5f]">月額</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pageStores.map((store) => (
                      <tr key={store.id} className="border-b border-[#ebebed] last:border-0">
                        <td className="h-[52px] px-4 text-sm font-medium text-gray-900">{store.name}</td>
                        <td className="h-[52px] px-4 text-sm font-medium text-gray-900 tabular-nums">{store.registrationDate}</td>
                        <td className="h-[52px] px-4 hidden md:table-cell">
                          <span className="inline-flex items-center rounded border border-gray-200 bg-white px-3 py-1 text-xs font-bold text-gray-900">
                            {statusLabel[store.status]}
                          </span>
                        </td>
                        <td className="h-[52px] px-4 text-right text-sm font-medium tabular-nums text-gray-900">
                          {store.monthlyAmount.toLocaleString()}円
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 月額合計（税込） */}
              <div className="flex items-center border-t border-[#ebebed] bg-white">
                <div className="h-[52px] flex-1 px-4 flex items-center">
                  <span className="text-base font-bold text-gray-900">月額合計（税込）</span>
                </div>
                <div className="h-[52px] flex-1 px-4 flex items-center justify-end">
                  <span className="text-base font-bold tabular-nums text-gray-900">
                    {totalAmount.toLocaleString()}円/月
                  </span>
                </div>
              </div>

              {/* ページネーション */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#ebebed] bg-white px-4 py-3">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={!canPrev}
                    className="inline-flex h-10 items-center gap-1 rounded-full px-4 py-2 text-sm font-bold text-gray-900 disabled:opacity-50"
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                    前へ
                  </button>
                  <button
                    type="button"
                    onClick={() => setPage(1)}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium ${
                      page === 1 ? 'border-[#e9e9e9] bg-white text-gray-900' : 'border-transparent'
                    }`}
                  >
                    1
                  </button>
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={!canNext}
                    className="inline-flex h-10 items-center gap-1 rounded-full px-4 py-2 text-sm font-bold text-gray-900 disabled:opacity-50"
                  >
                    次へ
                    <ChevronRightIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">{page}/{totalPages}ページ</span>
                  <select
                    value={pageSize}
                    onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1) }}
                    className="h-10 w-[200px] rounded-md border border-gray-300 bg-white pl-3 pr-8 py-2 text-sm text-gray-900"
                  >
                    {PAGE_SIZE_OPTIONS.map((n) => (
                      <option key={n} value={n}>{n}件の表示</option>
                    ))}
                  </select>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      <HomeBottomNav />
    </div>
  )
}
