import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'
import ErrorMessage from '../components/ErrorMessage'

function UserDetailPage({ users, favorites, onToggleFavorite }) {
  const { id } = useParams()
  const user = users.find((person) => String(person.id) === String(id))

  if (!user) {
    return <ErrorMessage message="User not found." />
  }

  const isFavorite = favorites.includes(user.id)

  return (
    <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm dark:bg-slate-900">
      <Link to="/users" className="mb-6 inline-block text-sm font-medium text-violet-500 hover:underline dark:text-violet-300">
        ← Back to directory
      </Link>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500 dark:text-violet-300">
            Profile
          </p>
          <h1 className="mt-2 text-3xl font-bold">{user.name}</h1>
        </div>

        <Button
          label={isFavorite ? 'Remove Favorite' : 'Add Favorite'}
          onClick={() => onToggleFavorite(user.id)}
          variant={isFavorite ? 'danger' : 'primary'}
        />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400">Role</p>
          <p className="mt-2 text-xl font-semibold">{user.role}</p>
        </div>

        <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400">Company</p>
          <p className="mt-2 text-xl font-semibold">{user.company}</p>
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-slate-200 p-5 dark:border-slate-700">
        <p className="text-sm text-slate-500 dark:text-slate-400">Contact</p>
        <p className="mt-2 text-lg">{user.email}</p>
      </div>
    </section>
  )
}

export default UserDetailPage
