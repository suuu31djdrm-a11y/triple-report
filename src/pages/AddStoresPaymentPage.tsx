import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HomeSidebar } from '@/components/home/HomeSidebar'
import { HomeBottomNav } from '@/components/home/HomeBottomNav'
import {
  EXISTING_MONTHLY_FOR_ADD_PAGE,
  MONTHLY_PER_STORE_TAX_IN,
  MOCK_STORES_TABLE,
} from '@/data/contractedStores'

const MIN_STORES = 1
const MAX_STORES = 20
const REGISTRATION_DATE = '2026/3/4'
const NEXT_PAYMENT_DATE = '2026/4/1'

const EXISTING_STORE_NAMES = MOCK_STORES_TABLE.map((s) => s.name)

/** 既存店舗名と重複するか（鎌倉 vs 鎌倉店 なども同一とみなす） */
function isDuplicateStoreName(input: string): boolean {
  const t = input.trim()
  if (!t) return false
  return EXISTING_STORE_NAMES.some(
    (name) =>
      name === t ||
      name === t + '店' ||
      name.replace(/店$/, '') === t
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
  )
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function AddStoresPaymentPage() {
  const navigate = useNavigate()
  const [storeCount, setStoreCount] = useState(1)
  const [storeNames, setStoreNames] = useState<string[]>([''])
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const count = Math.max(MIN_STORES, Math.min(MAX_STORES, storeCount))
  const names =
    storeNames.length >= count
      ? storeNames.slice(0, count)
      : [...storeNames, ...Array(count - storeNames.length).fill('')]

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

  const monthlyTotal = MONTHLY_PER_STORE_TAX_IN * count
  const combinedMonthlyTotal = EXISTING_MONTHLY_FOR_ADD_PAGE + monthlyTotal
  const allNamesFilled = names.every((n) => n.trim().length > 0)
  const duplicateErrors = names.map((n) => (n.trim() ? isDuplicateStoreName(n) : false))
  const hasDuplicateError = duplicateErrors.some(Boolean)
  const canSubmit = allNamesFilled && !hasDuplicateError

  const handleOpenConfirm = (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setShowConfirmModal(true)
  }

  const handleConfirmSubmit = () => {
    setShowConfirmModal(false)
    navigate('/stores')
  }

  return (
    <div className="min-h-screen bg-[#f9f9fc]">
      <div className="hidden md:block">
        <HomeSidebar />
      </div>

      <div className="md:ml-64 min-h-screen flex flex-col pb-20 md:pb-0">
        {/* トップバー: 新しい店舗を登録 + 閉じる（ロゴなし） */}
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 md:px-6">
          <h1 className="text-xl font-bold text-gray-900 md:text-2xl">新しい店舗を登録</h1>
          <Link
            to="/stores"
            className="inline-flex items-center gap-1 rounded-full p-2 md:px-4 md:py-2 text-sm font-bold text-gray-900 hover:bg-gray-100"
            aria-label="閉じる"
          >
            <CloseIcon className="h-5 w-5" />
            <span className="hidden md:inline">閉じる</span>
          </Link>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <div className="mx-auto max-w-6xl">
            <form onSubmit={handleOpenConfirm} className="grid gap-6 lg:grid-cols-[540px_1fr]">
              {/* 左: 店舗数カード（Figma: accordion + input blocks） */}
              <div className="flex flex-col gap-6">
                <div className="rounded-lg border border-[#dcdcde] bg-white p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold leading-6 text-gray-900">店舗数</p>
                    <div className="flex h-10 items-center gap-6">
                      <button
                        type="button"
                        onClick={() => updateCount(count - 1)}
                        disabled={count <= MIN_STORES}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#dcdcde] bg-white disabled:opacity-50"
                      >
                        <MinusIcon className="h-6 w-6 text-gray-700" />
                      </button>
                      <div className="flex items-end gap-0.5">
                        <span className="text-2xl font-bold leading-8 tabular-nums text-gray-900">
                          {count}
                        </span>
                        <span className="text-base leading-6 text-gray-900">店舗</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => updateCount(count + 1)}
                        disabled={count >= MAX_STORES}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#dcdcde] bg-white disabled:opacity-50"
                      >
                        <PlusIcon className="h-6 w-6 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* 店舗名入力（Figma: Input/Basic を並べた状態） */}
                  <div className="mt-6 flex flex-col gap-4">
                    {names.map((name, index) => {
                      const error = duplicateErrors[index]
                      return (
                        <div
                          key={index}
                          className="flex flex-col gap-2 rounded-lg bg-[#f9f9fc] p-4"
                        >
                          <label
                            htmlFor={`store-name-${index}`}
                            className="text-sm font-medium text-gray-900"
                          >
                            店舗名（<span className="text-red-600">必須</span>）
                          </label>
                          <input
                            id={`store-name-${index}`}
                            type="text"
                            value={name}
                            onChange={(e) => setStoreName(index, e.target.value)}
                            placeholder="店舗名を入力"
                            className={`h-10 w-full rounded-md border px-3 py-2 text-sm leading-5 text-gray-900 placeholder:text-[#99999b] focus:outline-none focus:ring-1 ${
                              error
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                : 'border-[#dcdcde] focus:border-primary focus:ring-primary'
                            }`}
                            required
                          />
                          {error && (
                            <p className="text-sm text-red-600">
                              同じ店舗が既に存在します。
                            </p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* 右: 契約内容・合計・次回お支払い・登録する */}
              <div className="lg:sticky lg:top-24">
                <div className="rounded-lg border border-[#dcdcde] bg-white p-6">
                  <div className="flex items-center justify-between border-b border-[#ebebed] pb-4">
                    <h2 className="text-lg font-bold text-gray-900">追加契約内容</h2>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                      <span>登録日</span>
                      <span>{REGISTRATION_DATE}</span>
                    </div>
                  </div>

                  <div className="space-y-3 border-b border-[#ebebed] py-4">
                    {names.map((name, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between px-4 text-sm text-[#5c5c5f]"
                      >
                        <div className="flex items-center gap-4">
                          <span>{name.trim() || '店舗名'}</span>
                          <span>TRIPLE REPORT 使用料</span>
                        </div>
                        <span className="tabular-nums">
                          {MONTHLY_PER_STORE_TAX_IN.toLocaleString()}円/月
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-b border-[#ebebed] px-4 py-4">
                    <span className="text-base font-medium text-gray-900">合計金額（税込）</span>
                    <span className="text-base font-bold tabular-nums text-gray-900">
                      {monthlyTotal.toLocaleString()}円/月
                    </span>
                  </div>

                  <div className="mt-4 rounded-lg bg-[#e8eaf8] px-3 py-2">
                    <p className="text-sm leading-5 text-gray-900">
                      現在の契約店舗と合わせて、合計
                      <span className="font-bold text-primary">
                        {MOCK_STORES_TABLE.length + count}店舗
                      </span>
                      になります。次回お支払日（{NEXT_PAYMENT_DATE}）にお支払いする金額は
                      <span className="font-bold text-primary">
                        {combinedMonthlyTotal.toLocaleString()}円/月
                      </span>
                      となります。
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="mt-6 w-full rounded-full bg-primary py-4 text-sm font-bold text-white hover:bg-primary/90 disabled:opacity-50"
                  >
                    登録する
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>

      <HomeBottomNav />

      {/* 最終確認モーダル（Figma: 11137-96316） */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <div className="w-full max-w-[384px] rounded-lg bg-white p-6 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-2px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold leading-6 text-gray-900">新しい店舗を登録</h2>
                <button
                  type="button"
                  onClick={() => setShowConfirmModal(false)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100"
                  aria-label="閉じる"
                >
                  <XIcon className="h-6 w-6 text-gray-700" />
                </button>
              </div>
              <p className="text-sm leading-5 text-gray-900">
                「TRIPLE REPORT」の契約に新しい店舗を{count}店舗登録します。よろしいですか？
              </p>
            </div>
            <div className="mt-4 rounded-lg bg-[#f9f9fc] p-4 text-sm leading-5 text-gray-900">
              <div className="flex items-center justify-between py-1">
                <span className="font-medium">追加する店舗数</span>
                <span className="font-bold">{count}店舗</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="font-medium">新しい合計店舗数</span>
                <span className="font-bold">{MOCK_STORES_TABLE.length + count}店舗</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="font-medium">次回お支払金額（{NEXT_PAYMENT_DATE}）</span>
                <span className="font-bold">{combinedMonthlyTotal.toLocaleString()}円</span>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 rounded-full py-2 text-sm font-bold text-gray-900 hover:bg-gray-100"
              >
                キャンセル
              </button>
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="flex-1 rounded-full bg-primary py-2 text-sm font-bold text-white hover:bg-primary/90"
              >
                確定する
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
