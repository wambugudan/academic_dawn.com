import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AboutUs from './pages/AboutUs';    
import Footer from './Footer';
import Header from './Header';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

export default function App(){
    return(
        <div className='container'>
            <Header />
                {/* Conditional Rendering of Components */}
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/about-us' element={ <AboutUs /> } />
                    <Route path='/contact-us' element={ <ContactUs /> } />
                    <Route path='/signup' element={ <SignUp /> } />
                    <Route path='/login' element={ <Login /> } />
                </Routes>
            
            <Footer />
        </div>
    )
}