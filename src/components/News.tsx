import React from 'react';
import styled from 'styled-components';
import articleData from '../../public/assets/article.json';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import Link from 'next/link';

const StyledContainer = styled.div`
    width: 350px;
    height: fit-content;
    padding: 15px;
    border-radius: 10px;
    background-color: #fff;
`;

const NewsSection = styled.a`
    display: flex;
    background: none;
    border: none;
    align-items: center;
    cursor: pointer;
    &:hover,
    &:focus {
        background-color: #f5f8fc;
    }
`;

const StyledArticlePhoto = styled.img`
    height: 120px;
    width: 120px;
`;

const TitleImage = styled.span`
    background-color: #3b80c2;
    border-radius: 0px 10px 10px 0px;
    color: #fff;
    margin-top: 10px;
    padding: 4px 20px;
    position: absolute;
`;

const DataNewsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const DataNews = styled.div`
    display: block;
    padding: 2px;
    width: 180px;
    text-align: justify;
`;

const StyledArticleData = styled.span`
    font-size: 15px;
    font-weight: bold;
    display: block;
    margin-bottom: 4px;
`;

const Author = styled.span`
    padding: 2px;
    border-bottom: 1px solid #8d8e90;
    color: #8d8e90;
`;

const ActionsContainer = styled.div`
    margin-top: 6px;
    display: flex;
`;

const Action = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover,
    &:focus {
        outline: 1px solid #3b80c2;
    }
`;

const ActionLabel = styled.span`
    margin-left: 4px;
    color: #8d8e90;
`;

const News: React.FC = () => {
    return (
        <StyledContainer>
            <Link href="/">
                <NewsSection>
                    <div>
                        <TitleImage>Noticia</TitleImage>
                        <StyledArticlePhoto src="/article-photo.png" alt="Noticia" />
                    </div>
                    <DataNewsContainer>
                        <DataNews>
                            <StyledArticleData>{articleData.title}</StyledArticleData>
                            <Author>Por: Lorem ipsum Dolor</Author>
                            <ActionsContainer>
                                <Action type="button">
                                    <StarBorderIcon fontSize="small" htmlColor="#3b80c2" />
                                    <ActionLabel>50</ActionLabel>
                                </Action>
                                <Action type="button">
                                    <ChatBubbleOutlineIcon fontSize="small" htmlColor="#3b80c2" />
                                    <ActionLabel>40</ActionLabel>
                                </Action>
                                <Action type="button">
                                    <VisibilityOutlinedIcon fontSize="small" htmlColor="#8d8e90" />
                                    <ActionLabel>75</ActionLabel>
                                </Action>
                            </ActionsContainer>
                        </DataNews>
                    </DataNewsContainer>
                </NewsSection>
            </Link>
        </StyledContainer>
    );
};

export default News;
