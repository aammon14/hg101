import styled from 'styled-components';

export const NavContainer = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: 1px solid black;
    box-shadow: 0px 10px 5px black;
`;

export const Logo = styled.img`
    margin: auto 10px;
    height: 75px;
    border-radius: 37.5px;
`;

export const Links = styled.div`
    display: flex;
`;

export const Link = styled.div`
    margin: auto 15px;
    font-family: 'Caveat Brush';
    font-size: 20px;
`;