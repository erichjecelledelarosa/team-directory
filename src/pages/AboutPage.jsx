function AboutPage() {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm dark:bg-slate-900">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
        About
      </p>
      <h1 className="mt-3 text-3xl font-bold">Our people make the difference</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
        This team directory is designed to help you quickly get to know our staff,
        highlight the people you care about most, and navigate the company with ease.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-slate-100 p-5 dark:bg-slate-800">
          <h2 className="text-xl font-semibold">Fast</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Browse the directory in seconds.
          </p>
        </div>
        <div className="rounded-lg bg-slate-100 p-5 dark:bg-slate-800">
          <h2 className="text-xl font-semibold">Organized</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Keep your favorite teammates close.
          </p>
        </div>
        <div className="rounded-lg bg-slate-100 p-5 dark:bg-slate-800">
          <h2 className="text-xl font-semibold">Helpful</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            See key details about each team member.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
