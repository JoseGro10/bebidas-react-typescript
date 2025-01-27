import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import FavoritesPages from "./views/FavoritesPages"

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/favorites" element={<FavoritesPages />} />
      </Routes>
    </BrowserRouter>
  )
}
