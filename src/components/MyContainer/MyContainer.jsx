import React from 'react'
import { useState } from 'react'
import "./MyContainer.scss"
import Menu from '../Menu/Menu'
import PersoInfo from '../PersoInfo/PersoInfo'
import PersoPlan from '../PersoPlan/PersoPlan'
import MenuAddOns from '../MenuAddOns/MenuAddOns'

function MyContainer() {
  const [step, setStep] = useState(1)  
  const [subscription, setSubscription] = useState("monthly")
  const [choicePlan, setChoicePlan] = useState("")
  const [totalPrice, setTotalPrice] = useState(0)

  console.log(totalPrice)

  return (
    <div className='MyContainer'>
        <Menu step={step}/>
        <div className='FormContainer'>
            {
                step === 1 ? 
                <PersoInfo step={step} setStep={setStep}/> 
                :
                step === 2 ? 
                <PersoPlan step={step} setStep={setStep} subscription={subscription} setSubscription={setSubscription} choicePlan={choicePlan} setChoicePlan={setChoicePlan} setTotalPrice={setTotalPrice}/> 
                :
                step === 3 ?
                <MenuAddOns step={step} setStep={setStep} subscription={subscription} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
                :
                ""
            }
        </div>
    </div>
  )
}

export default MyContainer