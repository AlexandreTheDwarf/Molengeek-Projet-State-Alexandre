import './App.css'
import MyContainer from './components/MyContainer/MyContainer'
import abonnement from "./data/abonnement.json";

function App() {
  
  return (
    <>
      <MyContainer data={abonnement}/>
    </>
  )
}

export default App
