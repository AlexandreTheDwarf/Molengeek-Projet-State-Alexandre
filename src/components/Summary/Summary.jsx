import React from 'react'
import "./Summary.scss"

function Summary({step, setStep, subscription, choicePlan, cartAddOn, totalPrice}) {
    const handleGoNext = () => {
        setStep(step + 1);  // Passe à l'étape suivante
    };

    const handleGoBack = () => {
        setStep(step - 1);  // Retour à l'étape précédente
    };

    const handleGoEdit = () => {
        setStep(2);
    }

    const Affichage = () => {
        if (subscription === "monthly") {
            switch (choicePlan) {
                case "Arcade":
                    return "$9/mo";
                case "Advanced":
                    return "$12/mo";
                case "Pro":
                    return "$15/mo";
                default:
                    return "";
            }
        } else {
            switch (choicePlan) {
                case "Arcade":
                    return "$90/yr";
                case "Advanced":
                    return "$120/yr";
                case "Pro":
                    return "$150/yr";
                default:
                    return "";
            }
        }
    };
    

  return (
    <div className='Summary'>
        <div className='SummaryTop'>
            <h1>Finishing up</h1>
            <p>Double-check everything is OK before confirming</p>
        </div>
        <div className='SummaryBody'>
            <div className='SummaryBodyTop'>
                <div className='SummaryBodyTopLeft'>
                    <h3>{choicePlan}({subscription})</h3>
                    <span onClick={handleGoEdit}>Change</span>
                </div>
                <div className='SummaryBodyTopRight'>
                    <span>
                        {
                            Affichage()
                        }
                    </span>
                </div>
            </div>
            <div className='SummaryBodyMid'>
                        {/* {
                            cartAddOn.map()
                        } */}
            </div>
            <div className='SummaryBodyBot'>
                <div className='SummaryBodyBotLeft'>
                    Total ({
                        subscription === "monthly" ? "per month" : "per year"
                    })
                </div>
                <div className='SummaryBodyBotRight'>
                    ${totalPrice}/{subscription === "monthly" ? "mo" : "yr"}
                </div>
            </div>
        </div>
        <div className='SummaryBot'>
          <button className="ButtonBack" type="button" onClick={handleGoBack}>GO BACK</button> 
          <button className="ButtonNext" type="button" onClick={handleGoNext}>CONFIRM</button> 
        </div>
    </div>
  )
}

export default Summary