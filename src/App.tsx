import { BrowserRouter, Routes, Route } from 'react-router-dom'

//레이아웃
import Layout from './layouts/Layout'

//페이지
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Interview from './pages/Interview'
import Recruit from './pages/Recruit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 레이아웃 */}
        <Route element={<Layout />}>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/portfolio'
            element={<Portfolio />}
          />
          <Route
            path='/interview'
            element={<Interview />}
          />
          <Route
            path='/recruit'
            element={<Recruit />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
