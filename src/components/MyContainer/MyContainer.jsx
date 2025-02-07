import React, { useState, useEffect } from "react";
import "./MyContainer.scss";
import Menu from "../Menu/Menu";
import PersoInfo from "../PersoInfo/PersoInfo";
import PersoPlan from "../PersoPlan/PersoPlan";
import MenuAddOns from "../MenuAddOns/MenuAddOns";
import Summary from "../Summary/Summary";
import ThankYou from "../ThankYou/ThankYou";

function MyContainer({ data }) {
  const [step, setStep] = useState(1);
  const [subscription, setSubscription] = useState("monthly");
  const [choicePlan, setChoicePlan] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartAddOn, setCartAddOn] = useState([]);

  const calculateTotal = (newChoicePlan, newAddOns) => {
    let price = 0;

    if (newChoicePlan) {
      price += subscription === "monthly" ? data.subscription[newChoicePlan.toLowerCase()].monthly : data.subscription[newChoicePlan.toLowerCase()].yearly;
    }

    newAddOns.forEach(addOn => {
      price += subscription === "monthly" ? data.options[addOn].monthly : data.options[addOn].yearly;
    });

    setTotalPrice(price);
  };

  const handleNextStep = (nextStep) => {
    setStep(nextStep);
  };

  const handleGoBack = (prevStep) => {
    setStep(prevStep);
  };

  useEffect(() => {
    calculateTotal(choicePlan, cartAddOn);
  }, [step, subscription, choicePlan, cartAddOn]);

  console.log("Total Price:", totalPrice);
  console.log("Cart Add-ons:", cartAddOn);

  return (
    <div className="MyContainer">
      <Menu step={step} />
      <div className="FormContainer">
        {step === 1 && <PersoInfo step={step} setStep={setStep} />}
        {step === 2 && (
          <PersoPlan
            step={step}
            setStep={handleNextStep}
            subscription={subscription}
            setSubscription={setSubscription}
            choicePlan={choicePlan}
            setChoicePlan={setChoicePlan}
            setTotalPrice={setTotalPrice}
            plans={data?.subscription}
          />
        )}
        {step === 3 && (
          <MenuAddOns
            step={step}
            setStep={handleNextStep}
            subscription={subscription}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            cartAddOn={cartAddOn}
            setCartAddOn={setCartAddOn}
            options={data?.options}
          />
        )}
        {step === 4 && (
          <Summary
            step={step}
            setStep={handleGoBack}
            subscription={subscription}
            choicePlan={choicePlan}
            cartAddOn={cartAddOn}
            totalPrice={totalPrice}
            plans={data?.subscription}
            options={data?.options}
          />
        )}
        {step === 5 && <ThankYou />}
      </div>
    </div>
  );
}

export default MyContainer;
