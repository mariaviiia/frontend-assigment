import React from 'react';
import styled from 'styled-components';
import Article from './Article';
import News from './News';

const StyledContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    background-color: #edebeb;
`;

const Content: React.FC = () => {
    return (
        <>
            <StyledContainer>
                <Article />
                <News />
            </StyledContainer>
        </>
    );
};

export default Content;
