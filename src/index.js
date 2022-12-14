
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './SharedComponents/NavigationBar';
import React, { useState } from 'react';
import * as ReactDom from 'react-dom/client';


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<NavigationBar />);