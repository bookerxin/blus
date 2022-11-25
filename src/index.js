
import './index.css'
import NavigationBar from './SharedComponents/NavigationBar';
import React, { useState } from 'react';
import * as ReactDom from 'react-dom/client';


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<NavigationBar />);