import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import UserCard from '../components/UserCard'

function UsersPage({
  users,
  favorites,
  loading,
  error,
  searchTerm,
  onSearchChange,
  onToggleFavorite,
}) {
  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  const filteredUsers = users.filter((user) => {
    const query = searchTerm.trim().toLowerCase()

    if (!query) {
      return true
    }

    return [user.name, user.email, user.company, user.role]
      .join(' ')
      .toLowerCase()
      .includes(query)
  })

  return (
    <section>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Directory
          </p>
          <h1 className="mt-2 text-3xl font-bold">Our team</h1>
        </div>

        <div className="flex w-full max-w-md flex-col gap-2 md:items-end">
          <label htmlFor="user-search" className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Search team members
          </label>
          <input
            id="user-search"
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by name, email, role, or company"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none ring-0 transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>
      </div>

      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="text-sm text-slate-600 dark:text-slate-300">
          Showing {filteredUsers.length} of {users.length} people
        </span>
      </div>

      {filteredUsers.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          No team members match your search.
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              company={user.company}
              role={user.role}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={() => onToggleFavorite(user.id)}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default UsersPage
