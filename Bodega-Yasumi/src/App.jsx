import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './assets/css/App.css'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Footer/>   
      
    </div>
  )
}

export default App
