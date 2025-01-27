import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./views/IndexPage"

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  )
}
