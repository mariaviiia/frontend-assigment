import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: 'montserrat', sans serif;
  }
`;

const Layout: React.FC = () => {
    return (
        <>
            <Head>
                <title>Front-end assigment</title>
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
            </Head>
            <Header />
            <Content />
            <Footer />
            <GlobalStyle />
        </>
    );
};

export default Layout;
