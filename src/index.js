
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import * as ReactDom from 'react-dom/client';
import * as bootstrap from 'react-bootstrap';
import {Button} from "react-bootstrap";

const Example = () =>{
    return (
        <>
            <Button as='a' variant={'primary'}>Main</Button>
            <Button as='a' variant={'dark'}>Second</Button>
        </>
    );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Example />);