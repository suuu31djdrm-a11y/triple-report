import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HomeSidebar } from '@/components/home/HomeSidebar'
import { SimplePageHeader } from '@/components/home/SimplePageHeader'
import { HomeBottomNav } from '@/components/home/HomeBottomNav'
import { MOCK_CONTRACTED_STORES, getExistingMonthlyTotal } from '@/data/contractedStores'

const MONTHLY_PER_STORE = 30000
const MIN_STORES = 1
const MAX_STORES = 20

function BackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  )
}

export default function AddStoresPaymentPage() {
  const navigate = useNavigate()
  const [storeCount, setStoreCount] = useState(1)
  const [storeNames, setStoreNames] = useState<string[]>([''])

  const count = Math.max(MIN_STORES, Math.min(MAX_STORES, storeCount))
  const names = storeNames.length >= count ? storeNames.slice(0, count) : [...storeNames, ...Array(count - storeNames.length).fill('')]

  const updateCount = (n: number) => {
    const next = Math.max(MIN_STORES, Math.min(MAX_STORES, n))
    setStoreCount(next)
    setStoreNames((prev) => {
      if (next > prev.length) return [...prev, ...Array(next - prev.length).fill('')]
      return prev.slice(0, next)
    })
  }

  const setStoreName = (index: number, value: string) => {
    setStoreNames((prev) => {
      const next = [...prev]
      next[index] = value
      return next
    })
  }

  const monthlyTotal = MONTHLY_PER_STORE * count
  const existingMonthlyTotal = getExistingMonthlyTotal(MOCK_CONTRACTED_STORES)
  const combinedMonthlyTotal = existingMonthlyTotal + monthlyTotal
  const allNamesFilled = names.every((n) => n.trim().length > 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!allNamesFilled) return
    // TODO: 決済API連携
    navigate('/stores')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="hidden md:block">
        <HomeSidebar />
      </div>

      <div className="md:ml-56 min-h-screen flex flex-col pb-20 md:pb-0">
        <SimplePageHeader />

        <main className="flex-1 p-4 md:p-6">
          <div className="mx-auto max-w-6xl">
            <Link
              to="/stores"
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              <BackIcon className="h-4 w-4" />
              契約店舗へ戻る
            </Link>

            <h1 className="mb-6 text-xl font-bold text-gray-900 md:text-2xl">店舗追加</h1>

            <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[1fr,380px]">
              {/* 左: 店舗数選択 + 店舗カード一覧 */}
              <div className="space-y-4">
                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <label className="block text-sm font-bold text-gray-700">追加する店舗数</label>
                  <div className="mt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateCount(count - 1)}
                      disabled={count <= MIN_STORES}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white"
                    >
                      −
                    </button>
                    <span className="min-w-[3rem] text-center text-lg font-bold tabular-nums text-gray-900">
                      {count}
                    </span>
                    <span className="text-sm text-gray-500">店舗</span>
                    <button
                      type="button"
                      onClick={() => updateCount(count + 1)}
                      disabled={count >= MAX_STORES}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white"
                    >
                      ＋
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  {names.map((name, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                    >
                      <label className="block text-xs font-medium text-gray-500">
                        店舗名 {index + 1}（必須）
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setStoreName(index, e.target.value)}
                        placeholder="例: 銀座店"
                        className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                      <p className="mt-2 text-right text-sm font-medium tabular-nums text-gray-600">
                        ¥{MONTHLY_PER_STORE.toLocaleString()}/月
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 右: 決済サマリー（契約内容・月額×店舗数・合計） */}
              <div className="lg:sticky lg:top-24">
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                    契約内容
                  </h2>
                  <div className="mt-4 space-y-3 border-t border-gray-100 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">月額 ¥{MONTHLY_PER_STORE.toLocaleString()} × {count}店舗</span>
                      <span className="font-medium tabular-nums text-gray-900">
                        ¥{monthlyTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 border-t-2 border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <span className="text-sm font-bold text-gray-700">合計（今回追加分・月額・税抜）</span>
                      <span className="text-xl font-bold tabular-nums text-gray-900">
                        ¥{monthlyTotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="mt-3 rounded-lg bg-primary-light/30 px-3 py-2.5">
                      <p className="text-sm font-medium text-gray-800">
                        既存の店舗と合わせると月額契約は{' '}
                        <span className="font-bold tabular-nums text-primary">
                          ¥{combinedMonthlyTotal.toLocaleString()}
                        </span>
                        になります
                      </p>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                      適用される税金が別途加算されます
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={!allNamesFilled}
                    className="mt-6 w-full rounded-xl bg-gray-900 py-3.5 text-sm font-bold text-white hover:bg-gray-800 disabled:opacity-50 disabled:hover:bg-gray-900"
                  >
                    登録する
                  </button>
                  <p className="mt-3 text-center text-xs text-gray-500">
                    プランはいつでも変更またはキャンセルできます
                  </p>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>

      <HomeBottomNav />
    </div>
  )
}
