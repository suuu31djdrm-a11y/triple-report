import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import {
  HomeSidebar,
  HomeHeader,
  HomeBottomNav,
  StoreStatusCard,
  CoachMarkStore,
  type StoreStatusCardData,
  type StatusTagVariant,
} from '@/components/home'

const MOCK_STORES: StoreStatusCardData[] = [
  {
    storeId: 'ginza',
    storeName: '銀座店',
    status: '要結果確認・報告' as StatusTagVariant,
    reportType: '週次レポート',
    reportAge: '1時間前',
    checkDate: '12/12',
    deadline: '12/14',
    progressCurrent: 2,
    progressTotal: 4,
    prevResultLabel: '(2025/11)',
  },
  {
    storeId: 'shinjuku',
    storeName: '新宿店',
    status: '報告の承認要' as StatusTagVariant,
    reportType: '週次レポート',
    reportAge: '1週間前',
    checkDate: '12/12',
    progressCurrent: 2,
    progressTotal: 4,
    prevResultLabel: '(2025/11)',
  },
  {
    storeId: 'musashikosugi',
    storeName: '武蔵小杉店',
    status: '要結果確認・報告' as StatusTagVariant,
    reportType: '週次レポート',
    reportAge: '3日前',
    checkDate: '12/12',
    deadline: '12/14',
    progressCurrent: 2,
    progressTotal: 4,
    prevResultLabel: '(2025/11)',
  },
  {
    storeId: 'osaki',
    storeName: '大崎店',
    status: '完了' as StatusTagVariant,
    reportType: '週次レポート',
    reportAge: '1週間前',
    checkDate: '12/12',
    completedAt: '2025/12/15',
    progressCurrent: 4,
    progressTotal: 4,
    prevResultLabel: '(2025/11)',
  },
  {
    storeId: 'odaiba',
    storeName: 'お台場店',
    status: '再提出要' as StatusTagVariant,
    reportType: '月次レポート',
    reportAge: '2日前',
    checkDate: '12/10',
    progressCurrent: 1,
    progressTotal: 4,
    prevResultLabel: '(2025/10)',
  },
  {
    storeId: 'kichijoji',
    storeName: '吉祥寺店',
    status: '報告の承認要' as StatusTagVariant,
    reportType: '週次レポート',
    reportAge: '1週間前',
    checkDate: '12/12',
    progressCurrent: 2,
    progressTotal: 4,
    prevResultLabel: '(2025/11)',
  },
  {
    storeId: 'ebisu',
    storeName: '恵比寿店',
    status: '報告の承認要' as StatusTagVariant,
    reportType: '週次レポート',
    reportAge: '5日前',
    checkDate: '12/12',
    progressCurrent: 2,
    progressTotal: 4,
    prevResultLabel: '(2025/11)',
  },
  {
    storeId: 'kasai',
    storeName: '葛西店',
    status: '要結果確認・報告' as StatusTagVariant,
    reportType: '週次レポート',
    reportAge: '1日前',
    checkDate: '12/12',
    deadline: '12/14',
    progressCurrent: 2,
    progressTotal: 4,
    prevResultLabel: '(2025/11)',
  },
  {
    storeId: 'yokohama',
    storeName: '横浜店',
    status: 'QSCチェック中' as StatusTagVariant,
    reportType: '月次レポート',
    reportAge: '日 7 12:20',
    checkDate: '12/12',
    progressCurrent: 1,
    progressTotal: 4,
    prevResultLabel: '(2025/11)',
  },
  {
    storeId: 'chiba',
    storeName: '千葉店',
    status: 'QSCチェック要' as StatusTagVariant,
    reportType: '月次レポート',
    reportAge: '日 7 12:20',
    progressCurrent: 0,
    progressTotal: 4,
    prevResultLabel: '(2025/11)',
  },
  {
    storeId: 'shibuya',
    storeName: '渋谷店',
    status: 'QSCチェック要' as StatusTagVariant,
    reportType: '月次レポート',
    reportAge: '日 7 12:20',
    progressCurrent: 0,
    progressTotal: 4,
    prevResultLabel: '(2025/11)',
  },
  {
    storeId: 'shinagawa',
    storeName: '品川店',
    status: '未定' as StatusTagVariant,
    reportType: '月次レポート',
    reportAge: '2024/10/30',
    progressCurrent: 0,
    progressTotal: 4,
    prevResultLabel: '(2025/10)',
  },
]

function HelpCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export default function HomePage() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Desktop: 固定サイドバー */}
      <div className="hidden md:block">
        <HomeSidebar />
      </div>

      {/* メインエリア: デスクトップは ml-sidebar、モバイルはフル幅 */}
      <div className="md:ml-64 min-h-screen flex flex-col pb-20 md:pb-0">
        <HomeHeader />

        <main className="flex-1 p-4 md:p-6">
          <div className="mx-auto max-w-6xl">
            {/* タイトル + ヘルプ */}
            <div className="mb-4 flex items-center gap-2 md:mb-6">
              <h1 className="text-lg font-bold text-gray-900 md:text-2xl">
                QSCチェック進捗状況
              </h1>
              <button
                type="button"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 md:h-8 md:w-8"
                aria-label="ヘルプ"
              >
                <HelpCircleIcon className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>

            {/* カードグリッド（デスクトップ3列） / リスト（モバイル1列） */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {MOCK_STORES.map((store) => (
                <StoreStatusCard key={store.storeId} data={store} isMobile={false} />
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile: 固定ボトムナビ */}
      <HomeBottomNav />

      {/* コーチマーク: ホームアクセス時に1回表示（店舗契約ページの案内） */}
      <CoachMarkStore />

      {/* ログアウト（右上・デスクトップ時） */}
      {user && (
        <div className="fixed top-4 right-4 z-20 hidden md:block">
          <button
            type="button"
            onClick={handleSignOut}
            className="text-sm text-gray-600 hover:text-gray-900 underline"
          >
            ログアウト
          </button>
        </div>
      )}
    </div>
  )
}
