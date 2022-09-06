import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom'

import corkboard from '../../../assets/corkboard.jpg';

export type Props = {
    active?: boolean;
    z?: number;
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

export const SubjectsContainer = styled.div`
    background-color: #61e7ff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 50px;

    .lesson-plans-title {
        font-family: 'Kalam';
        font-size: 28px;
        color: darkblue;
        text-align: center;
    }
`;

export const PreviewPics = styled.div<Props>`
    position: relative;
    max-height: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    img {
        max-height: 250px;
    }

    img:first-child {
        justify-self: end;
        align-self: end;
      
        :hover {
            z-index: 5;
            transition: 500ms;
            transform: rotate(-6deg) translateX(25px) translateY(18px) scale(1.2);
            box-shadow: 2px 2px 2px black;
        }
    }
    img:nth-child(2) {
        justify-self: start;
        align-self: end;
        z-index: 1;

        :hover {
            z-index: 5;
            transition: 500ms;
            transform: translateX(-15px) translateY(20px) rotate(-8deg) scale(1.2);
            box-shadow: 2px 2px 2px black;
        }
    }
    img:nth-child(3) {
        justify-self: end;
        align-self: end;
        z-index: 1;

        :hover {
            z-index: 5;
            transition: 500ms;
            transform: translateX(30px) translateY(-30px) rotate(8deg) scale(1.15);
            box-shadow: 2px 2px 2px black;
        }
    }
    img:nth-child(4) {
        justify-self: start;
        align-self: start;
        z-index: 1;

        :hover {
            z-index: 5;
            transition: 500ms;
            transform: translateX(-25px) translateY(-25px) rotate(18deg) scale(1.15);
            box-shadow: 2px 2px 2px black;
        }
    }
`;

export const SubjectPicker = styled.div`
    margin: 0 20px;
    padding: 0 20px;
    text-align: center;

    .download-title {
        font-family: 'Kalam';
        font-size: 28px;
        color: darkblue;
    }

    .subject-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: masonry;
        border: 10px solid lightgrey;
        background-image: url(${corkboard});
        background-size: cover;
    }
`;

export const SubjectCard = styled(Link)`
    place-self: center;
    margin: 25px;
    background-color: white;
    border: 1px solid lightgrey;
    padding: 10px;
    width: 120px;
    height: 60px;
    text-align: center;
    font-family: 'Caveat Brush';
    font-size: 24px;
    text-decoration: none;
    color: darkblue;
    transform: rotate(18deg);
    transform-origin: 5px 5px;
    box-shadow: 2px 2px 2px black;

    >div {
        position: absolute;
        height: 5px;
        width: 5px;
        border-radius: 5px;
        top: 5px;
        left: 5px;
        background-color: red;
        box-shadow: 1px 1px 2px black;
        z-index: 10;
    }

    :hover {
        z-index: 5;
        transition: 300ms;
        transform: rotate(0deg);transform-origin: top left;
        cursor: pointer;
    }
`;
