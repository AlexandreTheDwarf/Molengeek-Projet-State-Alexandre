import React from 'react';
import "./PersoPlan.scss";
import ToggleBtn from '../ToggleBtn/ToggleBtn';

function PersoPlan({ step, setStep, subscription, setSubscription, choicePlan, setChoicePlan, setTotalPrice, plans }) {
  const handleGoNext = () => {
    setStep(step + 1);  // Passe à l'étape suivante
  };

  const handleGoBack = () => {
    setStep(step - 1);  // Retour à l'étape précédente
  };

  const updatePrice = (plan) => {
    if (subscription === "monthly") {
      setTotalPrice(plans[plan.toLowerCase()].monthly);  // Utilise les données JSON
    } else {
      setTotalPrice(plans[plan.toLowerCase()].yearly);  // Utilise les données JSON
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
          {Object.keys(plans).map(planKey => {
            const plan = plans[planKey];
            return (
              <div
                key={planKey}
                className={`Card ${choicePlan === planKey ? "active" : ""}`}
                onClick={() => {
                  setChoicePlan(planKey);
                  updatePrice(planKey);
                }}
              >
                <div className='CardTop'>
                  <img src={`../../public/img/${planKey}.svg`} alt={planKey} />
                </div>
                <div className='CardBot'>
                  <h3>{planKey.charAt(0).toUpperCase() + planKey.slice(1)}</h3>
                  <span>
                    {subscription === "monthly" ? `$${plan.monthly}/mo` : `$${plan.yearly}/yr`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className='PersoPlanSelector'>
          <span className={subscription === "monthly" ? "selected" : ""}>Monthly</span>
          <ToggleBtn subscription={subscription} setSubscription={setSubscription} />
          <span className={subscription === "yearly" ? "selected" : ""}>Yearly</span>
        </div>

        <div className='PersoPlanBot'>
          <button className="ButtonBack" type="button" onClick={handleGoBack}>GO BACK</button>
          <button className="ButtonNext" type="button" onClick={handleGoNext} disabled={choicePlan === ""}>NEXT STEP</button>
        </div>
      </div>
    </div>
  );
}

export default PersoPlan;
