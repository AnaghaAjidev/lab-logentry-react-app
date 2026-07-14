import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddEntry from './components/AddEntry'
import ViewEntry from './components/ViewEntry'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>

      <Route path='/' element={<AddEntry/>}/>
      <Route path='/view' element={<ViewEntry/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
