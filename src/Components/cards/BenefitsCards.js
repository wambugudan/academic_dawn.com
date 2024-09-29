import React from 'react';
import noCash from '../images/no-cash.png'

export default function BenefitsCards(){
    return(
        <div className='cards--container'>
            <img className='card--icon' src={noCash} alt="icon" /><br/>
            <h4>No sign up/ registration fees</h4>
        </div>
    )
}