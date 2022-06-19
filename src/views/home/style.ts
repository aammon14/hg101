import styled, { keyframes } from 'styled-components';
import world from '../../assets/continents.svg';


const infiniteRotate = keyframes`
    from {background-position: 0 50%;}
    to {background-position: 100vw 50%;}
`;

export const HomeContainer = styled.div`

`;

export const Banner = styled.div`
    display: flex;
    width: 100%;
    height: 600px;
    background: url(${world});
    background-size: 100%;
    animation: ${infiniteRotate} 60s linear infinite;
    border-bottom: 1px solid black;
`;

export const Title = styled.div`
    height: 100%;
    width: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(62,139,222,0) 30%, rgba(0,0,0,0.542454481792717) 80%);

    h1 {
        margin: 0;
        line-height: 600px;
        text-align: center;
        font-size: 75px;
        color: white;
        text-shadow: 5px 5px 5px black;
        font-family: 'Luckiest Guy', cursive;
    }
`;
