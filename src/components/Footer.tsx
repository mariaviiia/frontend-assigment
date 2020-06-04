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

const StyledLogo = styled.img`
    margin.left= 20px;
`;

const Action = styled.a`
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    align-self: center;
    &:hover, &:focus{
        border-bottom: 1px solid #fff;
    }
`;

const Copyright = styled.span`
    color: #fff;
    align-self: flex-end;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <StyledLogo src={Logo} alt="Logo" />
            <Action>Preguntas frecuentes</Action>
            <Action>Contáctanos</Action>
            <Action>Información</Action>
            <Copyright>DocRed © 2019. Todos los derechos reservados</Copyright>
        </StyledFooter>
    );
};

export default Footer;
