import Button from '@mui/material/Button'
import { useState } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Menu } from './components/Menu'

function App () {
  const [hungry, setHungry] = useState(false)

  return (
    <div className='App'>
      <Header />

      {hungry ? <h1>I want food!</h1> : <h1>I'm doing good</h1>}
      <Menu setHungry={setHungry} />

      <Footer />
    </div>
  )
}

export default App
