import { Link } from "react-router-dom"
import { routes } from "../routes/routes"

export default function Ideas() {
  return (
    <main className="mx-auto min-h-[calc(100vh-80px)] max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-semibold text-stone-900">Ideas</h1>
      <p className="mt-2 text-stone-600">
        Borradores, guiones y cosas en proceso.
      </p>

      <ul className="mt-8 flex flex-col gap-4">
        <li>
          <Link
            to={routes.aussieGirl}
            className="group block rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-50 to-purple-50 p-6 transition hover:border-pink-300 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-pink-400">
              TikTok
            </p>
            <h2 className="mt-1 text-xl font-semibold text-pink-900 group-hover:text-pink-700">
              Futura chica Aussie
            </h2>
            <p className="mt-2 text-sm text-pink-800/70">
              Guión para el video · melena nómada y rutina con Aussie
            </p>
          </Link>
        </li>
      </ul>
    </main>
  )
}
