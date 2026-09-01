import { Link } from "react-router-dom"
import { routes } from "../../../routes/routes.ts"

export default function Navbar() {
  return (
    <nav className="w-full p-6 flex justify-between items-center">
      <Link to={routes.home} className="font-semibold">
        Montes Lab
      </Link>

      <div className="flex gap-6 text-sm text-stone-600">
        <Link to={routes.proyectos}>Proyectos</Link>
        <Link to={routes.viajes}>Viajes</Link>
        <Link to={routes.ideas}>Ideas</Link>
        <Link to={routes.giras}>Giras</Link>
      </div>
    </nav>
  )
}
