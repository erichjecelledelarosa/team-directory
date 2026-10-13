import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import usersData from './data/users'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import UserDetailPage from './pages/UserDetailPage'
import UsersPage from './pages/UsersPage'

function App() {
  const location = useLocation()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [favorites, setFavorites] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        setUsers(usersData)
        setLoading(false)
      } catch {
        setError('Could not load the team directory.')
        setLoading(false)
      }
    }, 400)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const path = location.pathname

    if (path === '/') {
      document.title = 'Home | Team Directory'
      return
    }

    if (path === '/users') {
      document.title = 'Users | Team Directory'
      return
    }

    if (path.startsWith('/users/')) {
      document.title = 'User Details | Team Directory'
      return
    }

    if (path === '/about') {
      document.title = 'About | Team Directory'
      return
    }

    document.title = 'Page Not Found | Team Directory'
  }, [location.pathname])

  const toggleFavorite = (userId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(userId)
        ? currentFavorites.filter((id) => id !== userId)
        : [...currentFavorites, userId]
    )
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
        <Navbar
          favoritesCount={favorites.length}
          darkMode={darkMode}
          onToggleDark={() => setDarkMode((current) => !current)}
        />

        <main className="mx-auto max-w-6xl px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage favoritesCount={favorites.length} />} />
            <Route
              path="/users"
              element={
                <UsersPage
                  users={users}
                  favorites={favorites}
                  loading={loading}
                  error={error}
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />
            <Route
              path="/users/:id"
              element={
                <UserDetailPage
                  users={users}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App