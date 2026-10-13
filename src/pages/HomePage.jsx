import { Link } from 'react-router-dom'

function HomePage({ favoritesCount }) {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm dark:bg-slate-900">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
        Team directory
      </p>
      <h1 className="mt-4 text-4xl font-bold">Welcome to the team</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
        Explore the people behind the company, keep track of your favorites,
        and learn more about each team member.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/users"
          className="rounded-md bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500"
        >
          View team
        </Link>
        <Link
          to="/about"
          className="rounded-md border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:border-slate-500 dark:border-slate-700 dark:text-slate-100"
        >
          About us
        </Link>
      </div>

      <div className="mt-8 rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
        <p className="text-sm text-slate-600 dark:text-slate-300">Favorites saved</p>
        <p className="mt-1 text-3xl font-bold">{favoritesCount}</p>
      </div>
    </section>
  )
}

export default HomePage
