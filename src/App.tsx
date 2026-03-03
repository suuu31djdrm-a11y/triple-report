import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Pages can be added here as you build from Figma.
// Use lazy() for code-splitting if you add many pages.
const HomePage = lazy(() => import('@/pages/HomePage'))
const ResultOverviewPage = lazy(() => import('@/pages/ResultOverviewPage'))

function App() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading…</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result/:storeId?" element={<ResultOverviewPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
