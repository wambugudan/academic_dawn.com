import React from 'react';
import signUp from '../images/sign_up.png'

export default function HowItWorksCards(){
    return(
        <div className='cards--container'>
            <img className='card--icon' src={signUp} alt="icon" /><br/>
            <h4>sign up</h4>
        </div>
    )
}