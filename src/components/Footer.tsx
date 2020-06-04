import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

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
    &:hover,
    &:focus {
        border-bottom: 1px solid #fff;
    }
`;

const Copyright = styled.span`
    color: #fff;
    align-self: flex-end;
`;

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <StyledLogo src="/logo.png" alt="Logo" />
            <Link href="/">
                <Action>Preguntas frecuentes</Action>
            </Link>
            <Link href="/">
                <Action>Contáctanos</Action>
            </Link>
            <Link href="/">
                <Action>Información</Action>
            </Link>
            <Copyright>DocRed © 2019. Todos los derechos reservados</Copyright>
        </StyledFooter>
    );
};

export default Footer;
