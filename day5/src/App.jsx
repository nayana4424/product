import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Add from './Components/Add'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/hp' element={<Homepage/>}/>
      <Route path='/add' element={<Add/>}/>
     </Routes>
    </>
  )
}

export default App
