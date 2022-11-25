
import './index.css'
import NavigationBar from './SharedComponents/NavigationBar';
import React, { useState } from 'react';
import * as ReactDom from 'react-dom/client';


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<NavigationBar />);

// TODO - Add scrollable text box, with fade on top and bottom? New component.
// TODO - Consider an alternative or some react link if we want changing colour schemes.