import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const Body = createGlobalStyle`
    body { 
    margin: 0px;
    font-family: 'monserrat', sans-serif;
    width: 100%;
    background-color: #edebeb;
    }
`;

ReactDOM.render(
        <React.StrictMode>
            <Body />
            <App />
        </React.StrictMode>,
    document.getElementById('root'),
);
