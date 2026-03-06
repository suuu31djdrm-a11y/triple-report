export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 22h6l4-8 4 8h6L12 2z" />
      <path d="M12 10l-3 6h6l-3-6z" opacity={0.8} />
    </svg>
  )
}

export function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export function BackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  )
}

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

/** Icon / CalendarCheck（報告期限用・グレー） */
export function CalendarCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 15l2 2 4-4" />
    </svg>
  )
}

export function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

export function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}

/** Icon / Store（契約店舗・店舗ボタン用・添付 icon-store2.svg） */
export function StoreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 8.2373C21 8.00515 20.9491 7.78736 20.8594 7.59277L20.0781 5.89648C19.8262 5.35009 19.2794 5.00017 18.6777 5H5.32227C4.72064 5.00017 4.17381 5.3501 3.92188 5.89648L3.14062 7.59277C3.0509 7.78736 3 8.00515 3 8.2373C3.00001 9.18223 3.60995 9.7793 4.37305 9.7793C5.22479 9.77921 5.91503 9.08907 5.91504 8.2373C5.91504 7.68509 6.36285 7.23742 6.91504 7.2373C7.46732 7.2373 7.91504 7.68502 7.91504 8.2373C7.91505 9.08912 8.60619 9.7793 9.45801 9.7793C10.3097 9.77909 11 9.089 11 8.2373C11 7.68502 11.4477 7.2373 12 7.2373C12.5523 7.2373 13 7.68502 13 8.2373C13 9.089 13.6903 9.77909 14.542 9.7793C15.3938 9.7793 16.085 9.08912 16.085 8.2373C16.085 7.68502 16.5327 7.2373 17.085 7.2373C17.6371 7.23742 18.085 7.68509 18.085 8.2373C18.085 9.08907 18.7752 9.77921 19.627 9.7793C20.3901 9.7793 21 9.18223 21 8.2373ZM23 8.2373C23 10.1006 21.6721 11.7793 19.627 11.7793C18.6289 11.7793 17.7278 11.3663 17.084 10.7021C16.4402 11.3659 15.5397 11.7793 14.542 11.7793C13.5445 11.7792 12.6437 11.3667 12 10.7031C11.3563 11.3667 10.4555 11.7792 9.45801 11.7793C8.46004 11.7793 7.55889 11.3662 6.91504 10.7021C6.27124 11.366 5.37085 11.7793 4.37305 11.7793C2.32793 11.7793 1.00001 10.1006 1 8.2373C1 7.71058 1.11573 7.20804 1.32422 6.75586L2.10547 5.05957L2.22168 4.83008C2.84138 3.70715 4.02628 3.00016 5.32227 3H18.6777C20.06 3.00017 21.316 3.80428 21.8945 5.05957L22.6758 6.75586L22.75 6.92773C22.9117 7.33402 23 7.77648 23 8.2373Z" fill="currentColor" />
      <path d="M2.69492 20.9495V10.635C2.69492 10.0827 3.14263 9.635 3.69492 9.635C4.2472 9.635 4.69492 10.0827 4.69492 10.635V20.9495C4.69475 21.5016 4.2471 21.9495 3.69492 21.9495C3.14273 21.9495 2.69508 21.5016 2.69492 20.9495Z" fill="currentColor" />
      <path d="M22 19.9492C22.5523 19.9492 23 20.3969 23 20.9492C23 21.5014 22.5523 21.9492 22 21.9492H2C1.44772 21.9492 1 21.5014 1 20.9492C1 20.3969 1.44772 19.9492 2 19.9492H22Z" fill="currentColor" />
      <path d="M19.3051 20.6106V10.635C19.3051 10.0827 19.7528 9.635 20.3051 9.635C20.8574 9.635 21.3051 10.0827 21.3051 10.635V20.6106C21.3049 21.1627 20.8572 21.6106 20.3051 21.6106C19.7529 21.6106 19.3053 21.1627 19.3051 20.6106Z" fill="currentColor" />
      <path d="M11.1697 20.9488V15.8648C11.1697 15.481 10.8582 15.1695 10.4744 15.1695H8.78006C8.39628 15.1695 8.08475 15.481 8.08475 15.8648V20.9488C8.08475 21.5011 7.63703 21.9488 7.08475 21.9488C6.53246 21.9488 6.08475 21.5011 6.08475 20.9488V15.8648C6.08475 14.3765 7.29171 13.1695 8.78006 13.1695H10.4744C11.9627 13.1695 13.1697 14.3765 13.1697 15.8648V20.9488C13.1697 21.501 12.7219 21.9487 12.1697 21.9488C11.6174 21.9488 11.1697 21.5011 11.1697 20.9488Z" fill="currentColor" />
      <path d="M17.0851 14.8644C17.6372 14.8646 18.0851 15.3123 18.0851 15.8644C18.0851 16.4166 17.6372 16.8642 17.0851 16.8644H15.3898C14.8375 16.8644 14.3898 16.4167 14.3898 15.8644C14.3898 15.3121 14.8375 14.8644 15.3898 14.8644H17.0851Z" fill="currentColor" />
    </svg>
  )
}

export function CheckBoxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  )
}

export function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  )
}

export function CompletedIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8 4-8-4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  )
}

/** Icon / Archive（完了メニュー用） */
export function ArchiveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  )
}

export function CommentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  )
}

export function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}

export function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

/** Icon / File（月次レポート用） */
export function FileIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

/** Icon / FileCheck（承認フロー 3/12 用・書類＋右下チェックの1アイコン） */
export function FileCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 16l2 2 4-4" />
    </svg>
  )
}

export function PersonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}

/** Icon / User（田中良子など・黒） */
export function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}

export function DocumentListIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  )
}

export function AlertCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  )
}

/** Icon / CircleAlert（要報告用） */
export function CircleAlertIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4M12 16h.01" />
    </svg>
  )
}
