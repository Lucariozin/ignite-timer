import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { History } from './pages/History'

import { DefaultTemplate } from './components/templates/DefaultTemplate'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultTemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Route>

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}
