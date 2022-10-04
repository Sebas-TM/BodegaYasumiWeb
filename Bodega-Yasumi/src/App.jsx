import './assets/css/App.css'
import "./assets/scss/base/App.scss";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard'
import Cart from './pages/Cart/Cart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
