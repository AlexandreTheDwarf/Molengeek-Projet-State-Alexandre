import React from 'react';
import "./ToggleBtn.scss";

function ToggleBtn({ subscription, setSubscription }) {

  const toggleSubscription = () => {
    setSubscription(subscription === "monthly" ? "yearly" : "monthly");  // Alterne entre monthly et yearly
  };

  return (
    <button 
      className={`ToggleBtn ${subscription === "yearly" ? "toggled" : ""}`} 
      onClick={toggleSubscription}  // Appel de la fonction qui alterne
    > 
      <div className='thumb'></div>
    </button>
  );
}

export default ToggleBtn;

