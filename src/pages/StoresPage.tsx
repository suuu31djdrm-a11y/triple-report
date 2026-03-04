import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HomeSidebar } from '@/components/home/HomeSidebar'
import { SimplePageHeader } from '@/components/home/SimplePageHeader'
import { HomeBottomNav } from '@/components/home/HomeBottomNav'
import { MOCK_CONTRACTED_STORES, getExistingMonthlyTotal, type ContractedStore, type StoreStatus } from '@/data/contractedStores'

export type { ContractedStore, StoreStatus }

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

const statusLabel: Record<StoreStatus, string> = {
  '契約中': '契約中',
  '解約予定': '解約予定',
  '解約済': '解約済',
}

export default function StoresPage() {
  const [stores] = useState<ContractedStore[]>(MOCK_CONTRACTED_STORES)

  const totalAmount = getExistingMonthlyTotal(stores)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="hidden md:block">
        <HomeSidebar />
      </div>

      <div className="md:ml-56 min-h-screen flex flex-col pb-20 md:pb-0">
        <SimplePageHeader />

        <main className="flex-1 p-4 md:p-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-xl font-bold text-gray-900 md:text-2xl">契約店舗</h1>
              <Link
                to="/stores/add"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-primary/90"
              >
                <PlusIcon className="h-5 w-5" />
                店舗追加
              </Link>
            </div>

            <section className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px]">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500">店舗名</th>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500">プラン</th>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500">契約開始日</th>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500">ステータス</th>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500">担当者</th>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500">電話番号</th>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500">住所</th>
                      <th className="px-4 py-3 text-right text-xs font-bold uppercase tracking-wider text-gray-500">月額（税抜）</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stores.map((store) => (
                      <tr
                        key={store.id}
                        className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50"
                      >
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{store.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{store.plan}</td>
                        <td className="px-4 py-3 text-sm tabular-nums text-gray-700">{store.contractStartDate}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              store.status === '契約中'
                                ? 'bg-green-100 text-green-800'
                                : store.status === '解約予定'
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {statusLabel[store.status]}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">{store.personInCharge}</td>
                        <td className="px-4 py-3 text-sm tabular-nums text-gray-700">{store.phone}</td>
                        <td className="max-w-[180px] truncate px-4 py-3 text-sm text-gray-600" title={store.address}>{store.address}</td>
                        <td className="px-4 py-3 text-right text-sm tabular-nums text-gray-700">
                          {store.status === '契約中' ? `¥${store.monthlyAmount.toLocaleString()}` : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between border-t-2 border-gray-200 bg-gray-50 px-4 py-4">
                <span className="text-sm font-bold text-gray-700">合計金額（月額・税抜）</span>
                <span className="text-lg font-bold tabular-nums text-gray-900">
                  ¥{totalAmount.toLocaleString()}
                </span>
              </div>
            </section>

            <div className="mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <PhoneIcon className="h-5 w-5 shrink-0 text-amber-600" />
              <div>
                <p className="text-sm font-medium text-amber-900">店舗解約について</p>
                <p className="mt-0.5 text-sm text-amber-800">
                  店舗の解約はお電話にてお受けしております。ご希望の場合はサポート窓口までご連絡ください。
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <HomeBottomNav />
    </div>
  )
}
