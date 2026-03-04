import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { useAuth } from '@/contexts/AuthContext'

const HomePage = lazy(() => import('@/pages/HomePage'))
const StoresPage = lazy(() => import('@/pages/StoresPage'))
const AddStoresPaymentPage = lazy(() => import('@/pages/AddStoresPaymentPage'))
const ResultOverviewPage = lazy(() => import('@/pages/ResultOverviewPage'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))

function LoginRedirect() {
  const { user, loading } = useAuth()
  if (loading) return <div className="flex min-h-screen items-center justify-center">Loading…</div>
  return user ? <Navigate to="/" replace /> : <LoginPage />
}

function App() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading…</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginRedirect />} />
        <Route
          path="/stores"
          element={
            <ProtectedRoute>
              <StoresPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stores/add"
          element={
            <ProtectedRoute>
              <AddStoresPaymentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/result/:storeId?"
          element={
            <ProtectedRoute>
              <ResultOverviewPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  )
}

export default App
