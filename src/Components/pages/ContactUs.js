import React from 'react';
import sudents_celebrating from '../images/students_celebrating.png';
// import CustomerSupportCard from '../cards/CustomerSupportCard'

export default function AboutUs(){
    return(
        <div className='contactUs--container'>
            <h2>Contact US</h2>
            <div className='contactUs--grid--container'>
                <div className='contactUs--container--text'>
                    <p>
                        In case of any questions, feel free to check the FAQ section or reach us using the 
                        contact information below.
                    </p>
                    <p>           
                        Please note that different departments in our company work according to different schedules:
                    </p>
                    <ul>
                        <li>Support/QA Depts. - 24/7</li>
                        <li>HR/Billing Depts. - business hours only</li>
                    </ul>
                    <hr />
                    <h1 className='Contact--us--register'>Register to become a member</h1> 
                    <div className='signup--contactUs'>
                        <button className='nav--btn--signup' type="submit">Sign Up</button>
                    </div>          
                </div>
                <img src={sudents_celebrating} alt="students Celebrating" className='contactUs--students--celebrating'/>
            </div>
                                               
        </div>
    )
}