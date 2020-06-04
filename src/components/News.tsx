import React from 'react';
import styled from 'styled-components';
import ArticlePhoto from '../assets/article-photo.png';
import articleData from '../assets/article.json';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

const StyledContainer = styled.div`
    width: 30%;
    height: fit-content;
    padding: 15px;
    border-radius: 10px;
    background-color: #fff;
`;

const NewsButton = styled.button`
    display: flex;
    background: none;
    border: none;
    align-items: center;
`;

const StyledArticlePhoto = styled.img`
    height: 120px;
    width: 120px;
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
    width: 80%;
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
`;

const ActionLabel = styled.span`
    margin-left: 4px;
    color: #8d8e90;
`;

const News = () => {
    return (
        <StyledContainer>
            <NewsButton>
                <StyledArticlePhoto src={ArticlePhoto} alt="Noticia" />
                <DataNewsContainer>
                    <DataNews>
                        <StyledArticleData>{articleData.title}</StyledArticleData>
                        <Author>Por: Lorem ipsum Dolor</Author>
                        <ActionsContainer>
                            <Action>
                                <StarBorderIcon fontSize="small" htmlColor="#3b80c2" />
                                <ActionLabel>50</ActionLabel>
                            </Action>
                            <Action>
                                <ChatBubbleOutlineIcon fontSize="small" htmlColor="#3b80c2" />
                                <ActionLabel>40</ActionLabel>
                            </Action>
                            <Action>
                                <VisibilityOutlinedIcon fontSize="small" htmlColor="#8d8e90" />
                                <ActionLabel>75</ActionLabel>
                            </Action>
                        </ActionsContainer>
                    </DataNews>
                </DataNewsContainer>
            </NewsButton>
        </StyledContainer>
    );
};

export default News;