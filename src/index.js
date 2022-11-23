
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './Navbar';
import React, { useState } from 'react';
import * as ReactDom from 'react-dom/client';
import {Button, ButtonGroup, Nav} from "react-bootstrap";


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Navbar />);