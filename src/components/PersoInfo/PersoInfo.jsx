import React, { useState } from 'react';
import "./PersoInfo.scss";

function PersoInfo({ step, setStep }) {
  const [name, setName] = useState("");  
  const [email, setEmail] = useState("");  
  const [phone, setPhone] = useState("");  

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setStep(step + 1);
  };

  return (
    <div className='PersoInfo'>
      <div className='PersoInfoTop'>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>

      <form className='PersoInfoBody' onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Your name:</label>
            <input 
            type="text" 
            id="name" 
            placeholder='Ving-Six'
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required 
            />
        </div>

        <div>
            <label htmlFor="email">Your email:</label>
            <input 
            type="email" 
            id="email" 
            placeholder='Ving_Six@email.com'
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required 
            />
        </div>

        <div>
            <label htmlFor="phone">Your phone number:</label>
            <input 
            type="tel" 
            id="phone" 
            placeholder='eg.+1 234 567 890'
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            required 
            />
        </div>

        <div className='PersoInfoBot'>
          <button className="ButtonNext" type="submit">NEXT STEP</button>
        </div>
      </form>
    </div>
  );
}

export default PersoInfo;
