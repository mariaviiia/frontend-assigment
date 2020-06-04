import React from 'react';
import Logo from '../assets/logo.png';
import styled from 'styled-components';

const StyledFooter = styled.div`
    background-color: #3b80c2;
    display: flex;
    height: 60px;
    width: 100%;
    padding: 20px 0;
    justify-content: space-around;
`;

const Action = styled.button`
    background: none;
    border: none;
    color: #fff;
`;

const Copyright = styled.span`
    color: #fff;
    align-self: flex-end;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <img src={Logo} alt="Logo" />
            <Action>Preguntas frecuentes</Action>
            <Action>Contáctanos</Action>
            <Action>Información</Action>
            <Copyright>DocRed © 2019. Todos los derechos reservados</Copyright>
        </StyledFooter>
    );
};

export default Footer;
