import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/layout/Navbar/index.ts"
import { lazy, Suspense } from "react"
import { routes, isPlantPath } from "./routes/routes.ts"

import Home from "./pages/Home"
import Proyectos from "./pages/Proyectos.tsx"
import Viajes from "./pages/Viajes.tsx"
import Ideas from "./pages/Ideas.tsx"
import Giras from "./pages/Giras.tsx"
import Grecia2026 from "./pages/giras/2026/Grecia/Grecia.tsx"
import GreciaLetras from "./pages/giras/2026/Grecia/GreciaLetras.tsx"
import EurotripFamiliar from "./pages/viajes/2026/EurotripFamiliar/EurotripFamiliar.tsx"
import EurotripFernandezBedoya from "./pages/viajes/2026/EurotripFernandezBedoya/EurotripFernandezBedoya"
import AussieGirl from "./pages/ideas/AussieGirl/AussieGirl.tsx"

const PlantCatalog = lazy(() => import("./pages/plantas/PlantCatalog"))
const PlantDetail = lazy(() => import("./pages/plantas/PlantDetail"))

const HIDE_NAV_PATHS: readonly string[] = [
  routes.grecia2026,
  routes.grecia2026Letras,
  routes.eurotripFamiliar2026,
  routes.eurotripFernandezBedoya2026,
  routes.aussieGirl,
]

function AppRoutes() {
  const { pathname } = useLocation()
  const isCommercialHome =
    pathname === routes.home || pathname === routes.homeEn
  const showNavbar =
    !isCommercialHome &&
    !isPlantPath(pathname) &&
    !HIDE_NAV_PATHS.includes(pathname)

  return (
    <>
      {showNavbar && <Navbar />}
      <Suspense fallback={<p role="status">Cargando ficha…</p>}>
        <Routes>
          <Route path={routes.plantas} element={<PlantCatalog />} />
          <Route path={routes.planta} element={<PlantDetail />} />
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.homeEn} element={<Home />} />
          <Route path={routes.proyectos} element={<Proyectos />} />
          <Route path={routes.viajes} element={<Viajes />} />
          <Route path={routes.ideas} element={<Ideas />} />
          <Route path={routes.giras} element={<Giras />} />
          <Route path={routes.grecia2026} element={<Grecia2026 />} />
          <Route path={routes.grecia2026Letras} element={<GreciaLetras />} />
          <Route
            path={routes.eurotripFamiliar2026}
            element={<EurotripFamiliar />}
          />
          <Route
            path={routes.eurotripFernandezBedoya2026}
            element={<EurotripFernandezBedoya />}
          />
          <Route path={routes.aussieGirl} element={<AussieGirl />} />
        </Routes>
      </Suspense>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
