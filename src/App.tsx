import { BrowserRouter, Routes, Route } from 'react-router-dom'

//헤더
import Header from './components/Header'

//페이지
import Home from './pages/Home'
import MuiPage from './pages/MuiPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/header'
          element={<Header />}
        />
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/mui'
          element={<MuiPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
