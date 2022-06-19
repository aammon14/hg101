import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: flex;
    margin: 50px; 
`;

export const AboutText = styled.div`
    margin: 10px;
    padding: 10px;
    border: 10px solid #BA8C63;
    background: rgb(39,144,35);
    background: linear-gradient(173deg, rgba(39,144,35,1) 0%, rgba(31,130,32,1) 30%, rgba(37,101,17,1) 80%);
    color: white;
    width: 65%;
    font-size: 20px;
    font-family: 'Kalam', cursive;
    box-shadow: 2px 2px 5px black;
`;

export const AboutImage = styled.img`
    width: 35%;
    transform: scaleX(-1);
`;