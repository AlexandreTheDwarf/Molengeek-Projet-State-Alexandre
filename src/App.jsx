import { useState } from 'react'
import './App.css'
import MyContainer from './components/MyContainer/MyContainer'

function App() {

  const [step, setstep] = useState(1)

  return (
    <>
      <MyContainer step={step} setstep={setstep}/>
    </>
  )
}

export default App
