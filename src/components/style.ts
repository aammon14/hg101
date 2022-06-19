import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const NavContainer = styled.div`
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: 1px solid black;
    box-shadow: 0px 1px 5px black;
`;

export const Logo = styled(Link)`
    margin: auto 10px;

    img {
        height: 70px;
        border-radius: 37.5px;
        box-shadow: 1px 1px 5px black;
    }
`;

export const Links = styled.div`
    display: flex;
`;

export const StyledLink = styled(Link)`
    margin: auto 15px;
    font-family: 'Caveat Brush';
    font-size: 20px;
    text-decoration: none;
    color: black;

    :hover {
        color: #61e7ff;
        text-shadow: 1px 1px 1px black;
    }
`;