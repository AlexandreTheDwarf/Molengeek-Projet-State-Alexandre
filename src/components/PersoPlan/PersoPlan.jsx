import React from 'react';
import "./PersoPlan.scss";
import ToggleBtn from '../ToggleBtn/ToggleBtn'

function PersoPlan({ step, setStep, subscription, setSubscription, choicePlan, setChoicePlan, setTotalPrice }) { 
  const handleGoNext = () => {
    setStep(step + 1);  // Passe à l'étape suivante
    Price(choicePlan)
  };

  const handleGoBack = () => {
    setStep(step - 1);  // Retour à l'étape précédente
  };

  const Price = (plan) => {
  
    if (subscription === "monthly") {
      switch (plan) {
        case "Arcade":
          setTotalPrice(9);
          break;
        case "Advanced":
          setTotalPrice(12);
          break;
        case "Pro":
          setTotalPrice(15);
          break;
        default:
          break;
      }
    } else {
      switch (plan) {
        case "Arcade":
          setTotalPrice(90);
          break;
        case "Advanced":
          setTotalPrice(120);
          break;
        case "Pro":
          setTotalPrice(150);
          break;
        default:
          break;
      }
    }
  };
  

  return (
    <div className='PersoPlan'>
      <div className='PersoPlanTop'>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
      </div>

      <div className='PersoPlanBody'>
        <div className='PersoPlanCardContainer'>
            <div className={`Card ${choicePlan === "Arcade" ? "active" : ""}`} onClick={() => {setChoicePlan("Arcade")}}>
                <div className='CardTop'>
                    <img src="../../public/img/arcade.svg" alt="" />
                </div>
                <div className='CardBot'>
                    <h3>Arcade</h3>
                    <span>
                        {
                            subscription === "monthly" ? "$9/mo" : "$90/yr"
                        }
                    </span>
                </div>
            </div>
            <div className={`Card ${choicePlan === "Advanced" ? "active" : ""}`} onClick={() => {setChoicePlan("Advanced")}}>
                <div className='CardTop'>
                    <img src="../../public/img/advenced.svg" alt="" />
                </div>
                <div className='CardBot'>
                    <h3>Advanced</h3>
                    <span>
                        {
                            subscription === "monthly" ? "$12/mo" : "$120/yr"
                        }
                    </span>
                </div>
            </div>
            <div className={`Card ${choicePlan === "Pro" ? "active" : ""}`} onClick={() => {setChoicePlan("Pro")}}>
                <div className='CardTop'>
                    <img src="../../public/img/pro.svg" alt="" />
                </div>
                <div className='CardBot'>
                    <h3>Pro</h3>
                    <span>
                        {
                            subscription === "monthly" ? "$15/mo" : "$150/yr"
                        }
                    </span>
                </div>
            </div>
        </div>

        <div className='PersoPlanSelector'> 
            <span className={subscription === "monthly" ? "selected" : ""}>Monthly</span>
                <ToggleBtn subscription={subscription} setSubscription={setSubscription}/>
            <span className={subscription === "yearly" ? "selected" : ""}>Yearly</span>
        </div>
        
        <div className='PersoPlanBot'>
          <button className="ButtonBack" type="button" onClick={handleGoBack}>GO BACK</button> 
          <button className="ButtonNext" type="button" onClick={handleGoNext} disabled={choicePlan == ""}>NEXT STEP</button> 
        </div>
      </div>
    </div>
  );
}

export default PersoPlan;
