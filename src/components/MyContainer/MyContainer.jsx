import React from 'react'
import { useState } from 'react'
import "./MyContainer.scss"
import Menu from '../Menu/Menu'
import PersoInfo from '../PersoInfo/PersoInfo'
import PersoPlan from '../PersoPlan/PersoPlan'

function MyContainer() {
  const [step, setStep] = useState(1)  
  const [subscription, setSubscription] = useState("monthly")
  return (
    <div className='MyContainer'>
        <Menu step={step}/>
        <div className='FormContainer'>
            {
                step === 1 ? 
                <PersoInfo step={step} setStep={setStep}/> 
                :
                step === 2 ? 
                <PersoPlan step={step} setStep={setStep} subscription={subscription} setSubscription={setSubscription}/> 
                :
                ""
            }
        </div>
    </div>
  )
}

export default MyContainer