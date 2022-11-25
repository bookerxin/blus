
import React, { useState } from 'react';
import './CSS/NavigationBar.css';

const NavigationBar = () => {
    const [time, setTime] = useState(new Date().toTimeString().split(' ')[0]);
    const [navDir, setDir] = useState('up');
    const [navPos, setPos] = useState(20);

    const timerId = setInterval(
        () => {
            setTime(new Date().toTimeString().split(' ')[0])
        }, 1000
    );

    const navMovement = setInterval(
        () => {
            const navigation_bar = document.getElementsByClassName('navigation-bar-container')[0];

            if (navDir === 'up') {
                setPos(navPos-1);
                if (navPos <= 0) {
                    setDir('down')
                }
            }
            else if (navDir === 'down') {
                setPos(navPos+1);
                if (navPos >= 30) {
                    setDir('up')
                }
            }
            console.log(navPos);
            navigation_bar.style.top = navPos;
        }, 2000
    );

    return (
        <div className='navigation-bar-container'>
            <div className='navigation-bar'>
                <span className='navigation-brand'>blus</span>
                <nav className='nav-links-container'>
                    <a href='#' className='nav-links'>Vakutter</a>
                    <a href='#' className='nav-links'>Derival</a>
                    <a href='#' className='nav-links'>Kossa</a>
                </nav>
                <span className='nav-clock'>{time}</span>
            </div>
        </div>
    );
}

// Default export removes the need for {}
export default NavigationBar;

// TODO - Add clock in top right
// TODO - Make navbar stick at top of screen on scroll.
// TODO - Fix interval animation attempt lol.