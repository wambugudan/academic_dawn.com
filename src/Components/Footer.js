import React from 'react';

export default function Footer(){
    return(
        <div>
            <footer className='main--footer'>
                <div className='footer1'>
                    <div className='footer1--menu'>
                        <h3>Menu</h3>
                        <ul>
                            <li>How it works</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className='footer1--contacts'>
                        <h3>Contacts</h3>
                        <ul>
                            <li>support@email.com</li>
                            <li>hr@email.com</li>
                            <li>+254-702358786</li>
                        </ul>
                    </div>
                </div>
                <div className='footer2'>
                    {/* <h3>Terms and Conditions</h3> */}
                    <small>&copy; 2022 Academic Dawn | All Rights Reserved.</small>
                </div>
            </footer>
        </div>
    )
}