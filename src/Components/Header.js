import React from 'react';
import logo from './images/Logo2.png';
import { Link } from 'react-router-dom';
// import SignUp from './pages/SignUp'

export default function Header(){

    // function signUp() {
                
    // }

    return(
        <div>
            <header className='header--contact'>
                <h3>Turn your skills to a side hustle</h3>
                <h4>Contact Admin: test@email.com</h4> 
            </header>

            <nav className='nav--top'>
                <Link to='/'><img src={logo} alt="Logo" className='img--logo'/></Link>

                <ul className='nav--list'>                    
                    <Link to="/about-us" className='nav--list--link'> How it works </Link>
                    <Link to="/about-us" className='nav--list--link'> About Us </Link>
                    <Link to="/contact-us" className='nav--list--link'> Contact Us </Link>
                    <Link to="/about-us" className='nav--list--link'> FAQ </Link>
                </ul>

                <div className='nav--buttons'>
                    <Link to='/signup'><button className='nav--btn--signup' type="submit">Sign Up</button></Link>
                    <Link to='/login'><button className='nav--btn--login' type="submit">Login</button></Link>
                </div>

            </nav>
        </div>
    )
}