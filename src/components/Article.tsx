import React from 'react';
import styled from 'styled-components';
import Banner from '../assets/Banner.jpg';
import articleData from '../assets/article.json';
import LogoNews from '../assets/logo-news.png';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CallMadeIcon from '@material-ui/icons/CallMade';

const StyledContainer = styled.div`
    width: 950px;
    height: auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
`;

const StyledBanner = styled.img`
    width: 100%;
    height: 600px;
`;

const TitleImage = styled.span`
    background-color: #3b80c2;
    border-radius: 0px 10px 10px 0px;
    color: #fff;
    margin-top: 15px;
    padding: 4px 30px;
    position: absolute;
`;

const Container = styled.div`
    padding: 20px;
`;

const ArticleTitle = styled.span`
    font-weight: bold;
    font-size: 20px;
`;

const SaveButton = styled.button`
    background-color: #78b045;
    border: none;
    border-radius: 10px 0px;
    color: #fff;
    padding: 5px 10px;
    margin-left: 150px;
    cursor: pointer;
    &:hover,
    &:focus {
        background-color: #5b9526;
        outline: none;
    }
`;

const StyledLogoNews = styled.img`
    height: 40px;
    width: auto;
`;

const ReporterContainer = styled.div`
    display: flex;
    margin-top: 30px;
`;

const ReporterDataContainer = styled.div`
    display: block;
`;

const Reporter = styled.span`
    font-size: 17px;
    font-weight: bold;
`;

const FirstReporterData = styled.span`
    padding: 0px 4px;
    color: #8d8e90;
`;

const ReporterData = styled.span`
    border-left: 1px solid;
    color: #8d8e90;
    padding: 0px 4px;
`;

const OptionsContainer = styled.div`
    display: flex;
`;

const Option = styled.button`
    background-color: #f5f8fc;
    border: none;
    color: #3b80c2;
    margin: 30px 0 0 30px;
    padding: 10px;
    cursor: pointer;
    &:hover,
    &:focus {
        outline: 1px solid #3b80c2;
    }
`;

const ActionsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
`;

const ActionsCard = styled.div`
    border: 1px solid #3b80c2;
    border-radius: 10px 0px;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    width: 500px;
`;

const Action = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    &:hover,
    &:focus {
        background-color: #f5f8fc;
        outline: none;
    }
`;

const ActionLabel = styled.span`
    color: #8d8e90;
    margin-left: 5px;
`;

const Article: React.FC = () => {
    return (
        <StyledContainer>
            <TitleImage>Noticia</TitleImage>
            <StyledBanner src={Banner} alt="Noticia" />
            <Container>
                <ArticleTitle>{articleData.title}</ArticleTitle>
                <SaveButton type="button">Guardar</SaveButton>
                <ReporterContainer>
                    <StyledLogoNews src={LogoNews} alt="Logo noticia" />
                    <ReporterDataContainer>
                        <Reporter>Noticias DocRed</Reporter>
                        <div>
                            <FirstReporterData>Hace 12 h</FirstReporterData>
                            <ReporterData>Publicado: 17/01/18</ReporterData>
                            <ReporterData>Lectura: 3min</ReporterData>
                        </div>
                    </ReporterDataContainer>
                </ReporterContainer>
                <OptionsContainer>
                    <Option type="button">Medicina interna</Option>
                    <Option type="button">Pediatría</Option>
                    <Option type="button">Obstreticia</Option>
                </OptionsContainer>
                <div
                    dangerouslySetInnerHTML={{
                        __html: articleData.content,
                    }}
                ></div>
                <ActionsContainer>
                    <ActionsCard>
                        <Action type="button">
                            <StarBorderIcon fontSize="small" htmlColor="#3b80c2" />
                            <ActionLabel>Destacar</ActionLabel>
                        </Action>
                        <Action type="button">
                            <ChatBubbleOutlineIcon fontSize="small" htmlColor="#3b80c2" />
                            <ActionLabel>Comentar</ActionLabel>
                        </Action>
                        <Action type="button">
                            <CallMadeIcon fontSize="small" htmlColor="#3b80c2" />
                            <ActionLabel>Compartir</ActionLabel>
                        </Action>
                    </ActionsCard>
                </ActionsContainer>
            </Container>
        </StyledContainer>
    );
};

export default Article;
