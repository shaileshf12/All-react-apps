import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Meme from './components/Meme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Meme/>
    </div>
  )
}

export default App
