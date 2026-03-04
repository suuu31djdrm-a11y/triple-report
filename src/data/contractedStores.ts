export type StoreStatus = '契約中' | '解約予定' | '解約済'

export interface ContractedStore {
  id: string
  name: string
  plan: string
  contractStartDate: string
  status: StoreStatus
  personInCharge: string
  phone: string
  address: string
  monthlyAmount: number
}

export const MOCK_CONTRACTED_STORES: ContractedStore[] = [
  { id: 'ginza', name: '銀座店', plan: 'スタンダード', contractStartDate: '2023/04/01', status: '契約中', personInCharge: '田中 良子', phone: '03-1234-5678', address: '東京都中央区銀座1-1-1', monthlyAmount: 15000 },
  { id: 'shinjuku', name: '新宿店', plan: 'スタンダード', contractStartDate: '2023/06/01', status: '契約中', personInCharge: '山田 太郎', phone: '03-2345-6789', address: '東京都新宿区西新宿2-2-2', monthlyAmount: 15000 },
  { id: 'musashikosugi', name: '武蔵小杉店', plan: 'スタンダード', contractStartDate: '2023/08/01', status: '契約中', personInCharge: '佐藤 花子', phone: '044-345-6789', address: '神奈川県川崎市中原区新丸子東3-3-3', monthlyAmount: 15000 },
  { id: 'osaki', name: '大崎店', plan: 'プレミアム', contractStartDate: '2022/01/15', status: '契約中', personInCharge: '鈴木 一郎', phone: '03-4567-8901', address: '東京都品川区大崎1-4-4', monthlyAmount: 22000 },
  { id: 'odaiba', name: 'お台場店', plan: 'スタンダード', contractStartDate: '2024/02/01', status: '契約中', personInCharge: '高橋 美咲', phone: '03-5678-9012', address: '東京都江東区青海1-5-5', monthlyAmount: 15000 },
  { id: 'kichijoji', name: '吉祥寺店', plan: 'スタンダード', contractStartDate: '2023/09/01', status: '契約中', personInCharge: '伊藤 健', phone: '0422-67-8901', address: '東京都武蔵野市吉祥寺南町2-6-6', monthlyAmount: 15000 },
  { id: 'ebisu', name: '恵比寿店', plan: 'スタンダード', contractStartDate: '2023/11/01', status: '契約中', personInCharge: '渡辺 さくら', phone: '03-6789-0123', address: '東京都渋谷区恵比寿西1-7-7', monthlyAmount: 15000 },
  { id: 'kasai', name: '葛西店', plan: 'スタンダード', contractStartDate: '2024/01/10', status: '契約中', personInCharge: '中村 大輔', phone: '03-7890-1234', address: '東京都江戸川区東葛西6-8-8', monthlyAmount: 15000 },
  { id: 'yokohama', name: '横浜店', plan: 'プレミアム', contractStartDate: '2022/05/01', status: '契約中', personInCharge: '小林 恵子', phone: '045-890-1234', address: '神奈川県横浜市西区みなとみらい2-9-9', monthlyAmount: 22000 },
  { id: 'chiba', name: '千葉店', plan: 'スタンダード', contractStartDate: '2024/03/01', status: '契約中', personInCharge: '加藤 翔太', phone: '043-901-2345', address: '千葉県千葉市中央区新町10-10-10', monthlyAmount: 15000 },
  { id: 'shibuya', name: '渋谷店', plan: 'スタンダード', contractStartDate: '2023/07/15', status: '契約中', personInCharge: '吉田 優', phone: '03-0123-4567', address: '東京都渋谷区道玄坂1-11-11', monthlyAmount: 15000 },
  { id: 'shinagawa', name: '品川店', plan: 'スタンダード', contractStartDate: '2024/04/01', status: '契約中', personInCharge: '松本 直樹', phone: '03-1234-5670', address: '東京都港区高輪3-12-12', monthlyAmount: 15000 },
]

/** 契約中の店舗の月額合計（税抜） */
export function getExistingMonthlyTotal(stores: ContractedStore[]): number {
  return stores
    .filter((s) => s.status === '契約中')
    .reduce((sum, s) => sum + s.monthlyAmount, 0)
}
