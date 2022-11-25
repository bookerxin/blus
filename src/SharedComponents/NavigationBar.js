
import React, { useState } from 'react';
import './SharedComponentsCSS/NavigationBar.css';

const NavigationBar = () => {
    const [time, setTime] = useState(new Date().toTimeString().split(' ')[0]);

    const timerId = setInterval(
        () => {
            setTime(new Date().toTimeString().split(' ')[0])
        }, 1000
    );

    return (
        <div className='navigation-bar'>
            <span className='navigation-brand'>blus</span>
            <div className='nav-links-container'>
                <a href='#' className='nav-links'>Vakutter</a>
                <a href='#' className='nav-links'>Derival</a>
                <a href='#' className='nav-links'>Kossa</a>
            </div>
        </div>
    );
}

// Default export removes the need for {}
export default NavigationBar;

// TODO - Add clock in top right
// TODO - Add scrollable text box, with fade on top and bottom?
// TODO - Play more with the styles; learn Bootstrap