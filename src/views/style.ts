import styled, { keyframes } from 'styled-components';
import world from '../assets/continents.svg';


const infiniteRotate = keyframes`
    from {background-position: 0 0;}
    to {background-position: -100vw 0;}
`;

export const HomeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    background: url(${world}) repeat-x;
    animation: ${infiniteRotate} 60s linear infinite;
    border-bottom: 1px solid black;
`;

export const Title = styled.div`
    margin: auto;
    font-size: 80px;
    color: white;
    text-shadow: 5px 5px 5px black;
    font-family: 'Luckiest Guy', cursive;
    color: white;
`;
