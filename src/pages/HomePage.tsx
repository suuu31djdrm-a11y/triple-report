import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function HomePage() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="absolute top-4 right-4">
        {user ? (
          <button
            type="button"
            onClick={handleSignOut}
            className="text-sm text-gray-600 hover:text-gray-900 underline"
          >
            ログアウト
          </button>
        ) : null}
      </div>
      <h1 className="text-xl font-bold text-gray-900">TRIPLE REPORT</h1>
      <Link
        to="/result"
        className="mt-6 rounded-xl bg-primary px-6 py-3 text-center font-medium text-white shadow-card hover:bg-primary/90"
      >
        銀座店の結果
      </Link>
    </div>
  )
}
