import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled from 'styled-components';

const Body = styled.body`
    margin: 0px;
    font-family: 'monserrat', sans-serif;
    width: 100%;
    background-color: #edebeb;
`;

ReactDOM.render(
    <Body>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Body>,
    document.getElementById('root'),
);
