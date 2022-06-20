import styled, { keyframes } from 'styled-components';

export type Props = {
    active: boolean;
}

const pulse = keyframes`
  0% {
    transform: scale(0.90);
    filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0.7));
  }
  
  70% {
    transform: scale(1.1);
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0));
  }
  
  100% {
    transform: scale(0.90);
    filter: drop-shadow( 0 0 0 rgba(0, 0, 0, 0));
  }
`;

export const AboutContainer = styled.div`
    display: flex;
    margin: 30px 50px; 
`;

export const WhiteBoard = styled.div<Props>`
    margin: 20px 10px;
    padding: 10px;
    border: 10px solid lightgrey;
    background: rgb(255,255,255);
    background: linear-gradient(173deg, rgba(255,255,255,1) 0%, rgba(235,235,234,0.9192051820728291) 80%, rgba(255,255,255,1) 100%);
    /* border: 10px solid #BA8C63;
    background: rgb(39,144,35);
    background: linear-gradient(173deg, rgba(39,144,35,1) 0%, rgba(31,130,32,1) 30%, rgba(37,101,17,1) 80%); */
    color: white;
    width: 65%;
    font-size: 20px;
    font-family: 'Kalam', cursive;
    box-shadow: 2px 2px 5px black;
    position: relative;
    transform: ${p => p.active ? 'translateX(0)' : 'translateX(-200px)'};
    opacity: ${p => p.active ? 1 : 0};
    transition: 1s all ease;

    p:first-child {
        color: red;
    }
    p:nth-child(2) {
        color: green;
    }
    p:nth-child(3) {
        color: blue;
    }
    p:nth-child(4) {
        color: red;
    }
`;

export const AboutImage = styled.img<Props>`
    width: 35%;
    position: relative;
    transform: ${p => p.active ? 'translateX(0) scaleX(-1)' : 'translateX(200px) scaleX(-1)'};
    opacity: ${p => p.active ? 1 : 0};
    transition: 1s all ease;
`;

export const ScrollArrow = styled.div<Props>`
    position: relative;
    font-size: 80px;
    left: calc(50% - 40px);
    top: 0;
    opacity: ${p => p.active ? 0 : 0.9};
    transform: ${p => p.active ? 'translateY(-50px)' : 'translateY(0px)'};
    transition: 0.5s all ease;
    
    svg {
        animation: ${pulse} 1.5s infinite;
    }
`;

export const TestimonialContainer = styled.div`
    background: rgb(254,255,0);
    background: linear-gradient(173deg, rgba(254,255,0,1) 0%, rgba(207,208,35,1) 100%);
    
    .headline {
        font-family: 'Kalam';
        font-size: 28px;
        color: darkblue;
        padding-top: 45px;
        margin-left: 70px;

    }
`;

export const TestimonialList = styled.div`
    display: flex;
    overflow-x: scroll;
    padding: 25px 50px 50px 50px;
`;

export const TestimonialCard = styled.div`
    margin: 20px;
    border: 1px solid lightgrey;
    padding: 20px;
    width: 160px;
    min-width: 160px;
    background-color: white;
    box-shadow: 5px 5px 10px black;
    font-size: 20px;
    display: grid;
    border-radius: 5px;

    .comment {
        margin-bottom: 30px;
    }

    .name {
        text-align: right;
        align-self: end;
    }

    transition: 0.3s;
    transform: perspective(100px);

    :hover {
        transform: perspective(100px) translateZ(5px); 
        box-shadow: 8px 8px 16px black;   
    }
`;