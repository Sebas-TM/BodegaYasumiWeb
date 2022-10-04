import "./assets/scss/base/App.scss";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard'
import Cart from './pages/Cart/Cart'
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
