import React from 'react'
import "./MenuAddOns.scss"

function MenuAddOns({step, setStep, subscription, totalPrice, setTotalPrice}) {
    const handleGoNext = () => {
        setStep(step + 1);  // Passe à l'étape suivante
    };

    const handleGoBack = () => {
        setStep(step - 1);  // Retour à l'étape précédente
    };

  return (
    <div className='MenuAddOns'>
        <div className='MenuAddOnsTop'>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>
        </div>
        <div className='MenuAddOnsBody'>

        </div>
        <div className='MenuAddOnsBot'>
          <button className="ButtonBack" type="button" onClick={handleGoBack}>GO BACK</button> 
          <button className="ButtonNext" type="button" onClick={handleGoNext}>NEXT STEP</button> 
        </div>
    </div>
    
  )
}

export default MenuAddOns