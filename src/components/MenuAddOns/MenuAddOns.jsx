import React from 'react';
import "./MenuAddOns.scss";

function MenuAddOns({ step, setStep, subscription, totalPrice, setTotalPrice, cartAddOn, setCartAddOn, options }) {
  const handleGoNext = () => {
    setStep(step + 1);  // Passe à l'étape suivante
  };

  const handleGoBack = () => {
    setStep(step - 1);  // Retour à l'étape précédente
  };

  const updatePrice = (addOn, isAdding) => {
    const price = subscription === "monthly" ? options[addOn].monthly : options[addOn].yearly;
    setTotalPrice(prevTotal => prevTotal + (isAdding ? price : -price));
  };

  const toggleAddOn = (addOn) => {
    setCartAddOn(prevAddOns => {
      const isAdding = !prevAddOns.includes(addOn);
      if (isAdding) {
        return [...prevAddOns, addOn];
      } else {
        return prevAddOns.filter(item => item !== addOn);
      }
    });
    updatePrice(addOn, !cartAddOn.includes(addOn));
  };

  return (
    <div className='MenuAddOns'>
      <div className='MenuAddOnsTop'>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
      </div>
      <div className='MenuAddOnsBody'>
        {Object.keys(options).map(addOnKey => {
          const addOn = options[addOnKey];
          return (
            <div
              key={addOnKey}
              className={`MenuAddOnsChoice ${cartAddOn.includes(addOnKey) ? 'active' : ''}`}
              onClick={() => toggleAddOn(addOnKey)}
            >
              <div className='MenuAddOnsChoiceLeft'>
                <input type="checkbox" checked={cartAddOn.includes(addOnKey)} readOnly />
              </div>
              <div className='MenuAddOnsChoiceCenter'>
                <h3>{addOnKey}</h3>
                <span>{addOn.description}</span>
              </div>
              <div className='MenuAddOnsChoiceRight'>
                <span>
                  {subscription === "monthly" ? `+$${addOn.monthly}/mo` : `+$${addOn.yearly}/yr`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className='MenuAddOnsBot'>
        <button className="ButtonBack" type="button" onClick={handleGoBack}>GO BACK</button>
        <button className="ButtonNext" type="button" onClick={handleGoNext}>NEXT STEP</button>
      </div>
    </div>
  );
}

export default MenuAddOns;
