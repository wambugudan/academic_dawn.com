import React from 'react';
import CustomerSupport from '../images/Customer_Support.png'

export default function HowItWorksCards(){
    return(
        <div className='customer--supportcards--container'>
            <img className='card--icon--customerSupport--Img' src={CustomerSupport} alt="icon" /><br/>
            <h4>Jane Doe</h4>
            <h4>Support Team Leader</h4>
        </div>
    )
}