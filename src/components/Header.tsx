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
    padding: 20px 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const InputContainer = styled.div`
    display: flex;
    height: 35px;
    width: 25%;
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
`;

const HomeButton = styled.button`
    align-items: center;
    background: none;
    border: none;
    display: flex;
`;

const ButtonContent = styled.span`
    color: #fff;
    font-size: 15px;
    margin-left: 3px;
`;

const OptionsContainer = styled.div`
    border-left: 1px solid #fff;
    padding-left: 10px;
    justify-self: end;
`;

const User = styled.button`
    background: none;
    border: none;
    align-items: center;
    display: inline-flex;
`;

const StyledUserPhoto = styled.img`
    border-radius: 100%;
    height: 30px;
    border: 2px solid #fff;
`;

const Header = () => {
    return (
        <StyledHeader>
            <img src={Logo} alt="Logo" />
            <InputContainer>
                <IconContainer>
                    <SearchIcon htmlColor="#78b045" />
                </IconContainer>
                <Input type="text" placeholder="¿Qué estas buscando?" />
            </InputContainer>
            <HomeButton>
                <HomeOutlinedIcon htmlColor="#fff" />
                <ButtonContent>Inicio</ButtonContent>
                <ExpandMoreOutlinedIcon htmlColor="#fff" />
            </HomeButton>
            <OptionsContainer>
                <NotificationsNoneIcon fontSize="large" htmlColor="#fff" />
                <User>
                    <StyledUserPhoto src={UserPhoto} alt="Usuario" />
                    <ExpandMoreOutlinedIcon htmlColor="#fff" />
                </User>
                <SettingsOutlinedIcon fontSize="large" htmlColor="#fff" />
            </OptionsContainer>
        </StyledHeader>
    );
};

export default Header;
