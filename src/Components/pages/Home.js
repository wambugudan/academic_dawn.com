import React from 'react';
import BenefitsCards from '../cards/BenefitsCards';
import HowItWorksCards from '../cards/HowItWorksCards';
import banner1 from '../images/Banner1.jpg'
import arrow from '../images/right-arrow.png'

export default function Header(){
    return(
        <div>
            <div className='banner'>
                <img src={banner1} width="190" height="45" alt="" />                
            </div>

            <h2 className='our--benefits'>Our Benefits</h2>

            <div className='benefits'>
                <BenefitsCards />
                <BenefitsCards />
                <BenefitsCards />
                <BenefitsCards />
                <BenefitsCards />
                <BenefitsCards />
            </div>

            <h2 className='how--it--Works'>How it Works</h2>

            <div className='howItWorsCards'>
                <HowItWorksCards />
                <img className='arrow' src={arrow} alt="" />
                <HowItWorksCards />
                <img className='arrow' src={arrow} alt="" />
                <HowItWorksCards />
            </div>

        </div>
        
    )
}