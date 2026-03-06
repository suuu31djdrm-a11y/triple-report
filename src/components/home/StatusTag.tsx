/** 店舗カードのステータスバッジ（Figma: Report Green / Blue / Orange / Gray） */
export type StatusTagVariant =
  | '要結果確認・報告'  // green
  | '報告の承認要'      // light blue
  | '完了'             // primary blue
  | '再提出要'         // light blue
  | 'QSCチェック中'    // orange
  | 'QSCチェック要'    // orange
  | '未定'             // gray

const variantStyles: Record<StatusTagVariant, string> = {
  '要結果確認・報告': 'bg-[var(--report-green)] text-white',
  '報告の承認要': 'bg-[var(--report-light-blue)] text-white',
  '完了': 'bg-primary text-white',
  '再提出要': 'bg-[var(--report-light-blue)] text-white',
  'QSCチェック中': 'bg-[var(--report-orange)] text-white',
  'QSCチェック要': 'bg-[var(--report-orange)] text-white',
  '未定': 'bg-gray-300 text-gray-900',
}

/** プログレスバー等でタグと色を揃えるための fill 色（CSS変数またはTailwind色） */
export const variantProgressColor: Record<StatusTagVariant, string> = {
  '要結果確認・報告': 'var(--report-green)',
  '報告の承認要': 'var(--report-light-blue)',
  '完了': 'var(--color-primary)',
  '再提出要': 'var(--report-light-blue)',
  'QSCチェック中': 'var(--report-orange)',
  'QSCチェック要': 'var(--report-orange)',
  '未定': '#d1d5db',
}

export function StatusTag({
  variant,
  className = '',
  size = 'default',
}: {
  variant: StatusTagVariant
  className?: string
  size?: 'default' | 'mobile'
}) {
  const textSize = size === 'mobile' ? 'text-xs leading-4' : 'text-xs leading-5 md:text-sm'
  return (
    <span
      className={`inline-flex items-center justify-center rounded px-2 py-0.5 font-bold whitespace-nowrap md:px-3 md:py-1 ${textSize} ${variantStyles[variant]} ${className}`}
    >
      {variant}
    </span>
  )
}
