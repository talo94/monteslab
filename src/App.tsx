import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/layout/Navbar/index.ts"
import { routes } from "./routes/routes.ts"

import Home from "./pages/Home"
import Proyectos from "./pages/Proyectos.tsx"
import Viajes from "./pages/Viajes.tsx"
import Ideas from "./pages/Ideas.tsx"
import Giras from "./pages/Giras.tsx"
import Grecia2026 from "./pages/giras/2026/Grecia/Grecia.tsx"

function AppRoutes() {
  const { pathname } = useLocation()
  const showNavbar = pathname !== routes.grecia2026

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.proyectos} element={<Proyectos />} />
        <Route path={routes.viajes} element={<Viajes />} />
        <Route path={routes.ideas} element={<Ideas />} />
        <Route path={routes.giras} element={<Giras />} />
        <Route path={routes.grecia2026} element={<Grecia2026 />} />
      </Routes>
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
