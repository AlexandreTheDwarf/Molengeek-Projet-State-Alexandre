import React from 'react'
import "./MyContainer.scss"
import Menu from '../Menu/Menu'
import PersoInfo from '../PersoInfo/PersoInfo'

function MyContainer({step, setstep}) {
  return (
    <div className='MyContainer'>
        <Menu step={step}/>
        <div className='FormContainer'>
            {
                step == 1 ? <PersoInfo step={step} setstep={setstep}/> : ""
            }
        </div>
    </div>
  )
}

export default MyContainer