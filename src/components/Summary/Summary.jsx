import React from "react";
import "./Summary.scss";

function Summary({ step, setStep, subscription, choicePlan, cartAddOn, totalPrice, plans, options }) {
  const handleGoNext = () => setStep(step + 1);
  const handleGoBack = () => setStep(step - 1);
  const handleGoEdit = () => setStep(2);

  return (
    <div className="Summary">
      <div className="SummaryTop">
        <h1>Finishing up</h1>
        <p>Double-check everything is OK before confirming</p>
      </div>

      <div className="SummaryBody">
        {/* Plan selection */}
        <div className="SummaryBodyTop">
          <div className="SummaryBodyTopLeft">
            <h3>{choicePlan} ({subscription})</h3>
            <span onClick={handleGoEdit}>Change</span>
          </div>
          <div className="SummaryBodyTopRight">
            <span>${plans[choicePlan.toLowerCase()][subscription]}/{subscription === "monthly" ? "mo" : "yr"}</span>
          </div>
        </div>

        {/* Selected Add-ons */}
        <div className="SummaryBodyMid">
          {cartAddOn.length > 0 ? (
            cartAddOn.map((addOn) => (
              <div key={addOn} className="SummaryAddOn">
                <span className="AddOnTitle">{addOn}</span>
                <span className="AddOnPrice">+${options[addOn][subscription]}/{subscription === "monthly" ? "mo" : "yr"}</span>
              </div>
            ))
          ) 
          : 
          ""
          }
        </div>

        {/* Total Price */}
        <div className="SummaryBodyBot">
          <div className="SummaryBodyBotLeft">
            Total ({subscription === "monthly" ? "per month" : "per year"})
          </div>
          <div className="SummaryBodyBotRight">
            ${totalPrice}/{subscription === "monthly" ? "mo" : "yr"}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="SummaryBot">
        <button className="ButtonBack" type="button" onClick={handleGoBack}>GO BACK</button>
        <button className="ButtonNext" type="button" onClick={handleGoNext}>CONFIRM</button>
      </div>
    </div>
  );
}

export default Summary;
