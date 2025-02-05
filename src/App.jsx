import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/Menu'

function App() {

  const [step, setstep] = useState(1)

  return (
    <>
      <Menu step={step}/>
    </>
  )
}

export default App
