import React from 'react'
import "./Menu.scss"

function Menu({step}) {
  return (
    <div className='Menu'>
        <div className='Option'>
            <div className='DivNumber'>
                <span className={step === 1 ? "active" : ""}>1</span>
            </div>
            <div className='DivText'>
                <span>STEP 1</span>
                <h3>YOUR INFO</h3>
            </div>
        </div>
        <div className='Option'>
            <div className='DivNumber'>
                <span className={step === 2 ? "active" : ""}>2</span>
            </div>
            <div className='DivText'>
                <span>STEP 2</span>
                <h3>SELECT PLAN</h3>
            </div>
        </div>
        <div className='Option'>
            <div className='DivNumber'>
                <span className={step === 3 ? "active" : ""}>3</span>
            </div>
            <div className='DivText'>
                <span>STEP 3</span>
                <h3>ADD-ONS</h3>
            </div>
        </div>
        <div className='Option'>
            <div className='DivNumber'>
                <span className={step === 4 ? "active" : ""}>4</span>
            </div>
            <div className='DivText'>
                <span>STEP 4</span>
                <h3>SUMMARY</h3>
            </div>
        </div>
    </div>
  )
}

export default Menu