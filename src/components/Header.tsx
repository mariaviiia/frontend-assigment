import React from 'react';
import Logo from '../assets/logo.png';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import UserPhoto from '../assets/usuario-photo.jpg';

const StyledHeader = styled.div`
    background-color: #3b80c2;
    padding: 20px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
`;

const StyledLogo = styled.img`
    margin.left= 20px;
`;

const InputContainer = styled.div`
    display: flex;
    height: 35px;
    width: 400px;
    margin-left: 70px;
`;

const IconContainer = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    height: auto;
    border-radius: 10px 0 0 0;
    padding: 0 5px;
`;

const Input = styled.input`
    height: auto;
    border: unset;
    border-radius: 0 0 10px 0;
    margin-left: 2px;
    width: 100%;
    padding-left: 10px;
    &:hover,
    &:focus {
        outline: 1px solid #3b80c2;
    }
`;

const HomeButton = styled.button`
    align-items: center;
    background: none;
    border: none;
    display: flex;
    margin-left: 50px;
    cursor: pointer;
    &:hover,
    &:focus {
        background-color: #236eb5;
        outline: none;
    }
`;

const ButtonContent = styled.span`
    color: #fff;
    font-size: 15px;
    margin-left: 3px;
`;

const OptionsContainer = styled.div`
    border-left: 1px solid #fff;
    padding-left: 10px;
    right: 20px;
    position: absolute;
    display: flex;
`;

const Action = styled.button`
    background: none;
    border: none;
    align-items: center;
    display: inline-flex;
    cursor: pointer;
    &:hover,
    &:focus {
        background-color: #236eb5;
        outline: none;
    }
`;

const StyledUserPhoto = styled.img`
    border-radius: 100%;
    height: 30px;
    border: 2px solid #fff;
`;

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <StyledLogo src={Logo} alt="Logo" />
            <InputContainer>
                <IconContainer>
                    <SearchIcon htmlColor="#78b045" />
                </IconContainer>
                <Input type="text" placeholder="¿Qué estas buscando?" />
            </InputContainer>
            <HomeButton type="button">
                <HomeOutlinedIcon htmlColor="#fff" />
                <ButtonContent>Inicio</ButtonContent>
                <ExpandMoreOutlinedIcon htmlColor="#fff" />
            </HomeButton>
            <OptionsContainer>
                <Action type="button">
                    <NotificationsNoneIcon fontSize="large" htmlColor="#fff" />
                </Action>
                <Action type="button">
                    <StyledUserPhoto src={UserPhoto} alt="Usuario" />
                    <ExpandMoreOutlinedIcon htmlColor="#fff" />
                </Action>
                <Action type="button">
                    <SettingsOutlinedIcon fontSize="large" htmlColor="#fff" />
                </Action>
            </OptionsContainer>
        </StyledHeader>
    );
};

export default Header;
