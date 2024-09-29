import React from 'react';
import typing from '../images/typing.jpg';
import CustomerSupportCard from '../cards/CustomerSupportCard'

export default function AboutUs(){
    return(
        <div>
            <h2>About US</h2>
            <div className='aboutUs--container'>
                <img src={typing} alt='typing' className='img--aboutUS'></img>
                <div className='aboutUs--text'>
                    <h3 className='aboutUs--text--header'>Find Clients and Get Good Pay for Good Work</h3>
                    <p>Academic Dawn is an international company that helps freelancers find a job 
                        and develop professionally working on interesting and challenging projects at 
                        their own pace from any corner of the world. Our goal is simple - to match skilled 
                        content creators with clients who require their abilities.
                    </p>
                    <ol>
                        <span className='aboutUs--li--numbers'>1</span><span className='aboutUs--text--header'>No Hassle, Just Writing</span>
                        <p className='aboutUs--text--paragraph'>
                            At WritersHub.org, we believe that our freelancers shouldn't 
                            worry about anything except their creative work. That's why 
                            we take care of the whole process for you - all you need to 
                            do is choose the projects you want, complete them, and get paid. 
                            We prefer to keep it this simple.
                        </p>
                        <span className='aboutUs--li--numbers'>2</span><span className='aboutUs--text--header'>Free, Simple Registration</span>
                        <p className='aboutUs--text--paragraph'>
                            Just answer a few questions and show us how skilled you are - we'll 
                            match you with the best orders. It's the same with our payments 
                            system - a bi-monthly process that means you'll never have to worry 
                            about when your money is coming in. Also, we believe that your career 
                            should progress with your skills, meaning that you always have the opportunity 
                            to get an upgrade at WritersHub.org
                        </p>
                        <span className='aboutUs--li--numbers'>3</span><span className='aboutUs--text--header'>Join Our Freelance Writing Team Today</span>
                        <p className='aboutUs--text--paragraph'>
                            Your comfort and well-being is important to us, and that's why we have a great 
                            staff to support you whenever you may need it.
                        </p>
                    </ol>
                </div>   
            </div>
            {/* Customer Support Cards */}
            <div className='customer--support--cards'>
                <CustomerSupportCard />    
                <CustomerSupportCard /> 
                <CustomerSupportCard /> 
                <CustomerSupportCard />             
            </div>
            <p className='customer--support--cards--paragraph'>
                Our friendly team consists both of professionals from various fields and newcomers who 
                are simply passionate and creative. You can join us and begin to enjoy the benefits of 
                a stress-free work environment with all of the support you need to do your job well.
            </p>
                        
        </div>
    )
}