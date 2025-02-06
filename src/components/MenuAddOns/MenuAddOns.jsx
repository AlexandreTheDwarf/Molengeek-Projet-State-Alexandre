import React from 'react'
import "./MenuAddOns.scss"

function MenuAddOns({step, setStep, subscription, totalPrice, setTotalPrice, cartAddOn, setCartAddOn}) {
    const handleGoNext = () => {
        setStep(step + 1);  // Passe à l'étape suivante
    };

    const handleGoBack = () => {
        setStep(step - 1);  // Retour à l'étape précédente
    };

    const Price = (Product) => {
        if (cartAddOn.includes(Product)){
            // Remove if already in
            setCartAddOn(cartAddOn.filter(item => item !== Product));
        }else{
            setCartAddOn([...cartAddOn,Product])
        }
      
        if (subscription === "monthly") {
          switch (Product) {
            case "Online":
              setTotalPrice(totalPrice + 1);
              break;
            case "Storage":
              setTotalPrice(totalPrice + 2);
              break;
            case "Customizable":
              setTotalPrice(totalPrice + 2);
              break;
            default:
              break;
          }
        } else {
          switch (Product) {
            case "Online":
              setTotalPrice(totalPrice + 12);
              break;
            case "Storage":
              setTotalPrice(totalPrice + 20);
              break;
            case "Customizable":
              setTotalPrice(totalPrice + 20);
              break;
            default:
              break;
          }
        }
      };

  return (
    <div className='MenuAddOns'>
        <div className='MenuAddOnsTop'>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>
        </div>
        <div className='MenuAddOnsBody'>
            <div className='MenuAddOnsChoice' onClick={() => {Price("Online")}}>
                <div className='MenuAddOnsChoiceLeft'>
                    <input type="checkbox" checked={cartAddOn.includes("Online")}/>
                </div>
                <div className='MenuAddOnsChoiceCenter'>
                    <h3>Online Service</h3>
                    <span>Acces to multiplayer games</span>
                </div>
                <div className='MenuAddOnsChoiceRight'>
                    <span>
                        {
                            subscription == "monthly" ? "+1$/mo" : "+12$/yr"
                        }
                    </span>
                </div>
            </div>
            <div className='MenuAddOnsChoice' onClick={() => {Price("Storage")}}>
                <div className='MenuAddOnsChoiceLeft'>
                    <input type="checkbox" checked={cartAddOn.includes("Storage")}/>
                </div>
                <div className='MenuAddOnsChoiceCenter'>
                    <h3>Larger Storage</h3>
                    <span>Extra of 1 TB cloud save</span>
                </div>
                <div className='MenuAddOnsChoiceRight'>
                    <span>
                        {
                            subscription == "monthly" ? "+2$/mo" : "+20$/yr"
                        }
                    </span>
                </div>
            </div>
            <div className='MenuAddOnsChoice' onClick={() => {Price("Customizable")}}>
                <div className='MenuAddOnsChoiceLeft'>
                    <input type="checkbox" checked={cartAddOn.includes("Customizable")}/>
                </div>
                <div className='MenuAddOnsChoiceCenter'>
                    <h3>Customizable Profile</h3>
                    <span>Custom theme on your profile</span>
                </div>
                <div className='MenuAddOnsChoiceRight'>
                    <span>
                        {
                            subscription == "monthly" ? "+2$/mo" : "+20$/yr"
                        }
                    </span>
                </div>
            </div>
        </div>
        <div className='MenuAddOnsBot'>
          <button className="ButtonBack" type="button" onClick={handleGoBack}>GO BACK</button> 
          <button className="ButtonNext" type="button" onClick={handleGoNext}>NEXT STEP</button> 
        </div>
    </div>
    
  )
}

export default MenuAddOns