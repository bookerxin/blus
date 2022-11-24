

import React, { useState } from 'react';

const NavigationBar = () => {
    const [time, setTime] = useState(new Date().toTimeString().split(' ')[0]);

    const timerId = setInterval(
        () => {
            setTime(new Date().toTimeString().split(' ')[0])
        }, 1000
    );

    return (
        <h1>noboot</h1>
    );
}

// Default export removes the need for {}
export default NavigationBar;

// TODO - Add clock in top right
// TODO - Add scrollable text box, with fade on top and bottom?
// TODO - Play more with the styles; learn Bootstrap