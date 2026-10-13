import { Link } from 'react-router-dom'
import Button from './Button'

function UserCard({ id, name, email, company, role, isFavorite, onToggleFavorite }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="mt-1 text-sm text-violet-500 dark:text-violet-300">{role}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
        <p>{email}</p>
        <p>{company}</p>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <Button
          label={isFavorite ? 'Remove Favorite' : 'Add Favorite'}
          onClick={onToggleFavorite}
          variant={isFavorite ? 'danger' : 'primary'}
        />
        <Link to={`/users/${id}`} className="font-medium text-violet-500 underline-offset-2 hover:underline dark:text-violet-300">
          View Details
        </Link>
      </div>
    </article>
  )
}

export default UserCard
