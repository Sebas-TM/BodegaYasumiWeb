import "./assets/css/App.css"
import "./assets/scss/base/App.scss";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// import Home from './pages/Home/Home';
// import Dashboard from './pages/Dashboard/Dashboard'
// import Cart from './pages/Cart/Cart'
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
// import PageNotFound from './pages/NotFound/PageNotFound';

const Home = lazy(() => import('./pages/Home/Home'))
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'))
const Cart = lazy(() => import('./pages/Cart/Cart'))
const Login = lazy(() => import('./pages/Login/Login'))
const Register = lazy(() => import('./pages/Register/Register'))
const PageNotFound = lazy(() => import('./pages/NotFound/PageNotFound'))

function App() {
  return (
    <Suspense fallback={
      <div className="h-screen flex justify-center items-center">
        <p>Page is loading ...</p>
      </div>
    }>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
