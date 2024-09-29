import React from 'react';
import { Link } from 'react-router-dom';
// import sudents_celebrating from '../images/students_celebrating.png';
// // import CustomerSupportCard from '../cards/CustomerSupportCard'

export default function AboutUs(){
    return(
        <div className='login--container'>
            <h1>Log In</h1>
            <form className='login--form'>
                <input className='login--form--username' type="text" name="username" /><br />
                <input className='login--form--password' type="password" name="password"/><br />
                <input className='login--form--btn' type="submit" name="" value="Login" />
            </form> 
            <div className='go--to--signup'>
                <h4>Don't have an Account?</h4>
                <Link className='go--to--signup--link' to='/signup' >Sign up</Link>  
            </div>             
                                              
        </div>
    )
}