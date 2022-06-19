import { Link } from 'react-router-dom';
import { NavContainer, Logo, Links, StyledLink } from './style';

import logo from '../assets/hg101.jpeg';

const Nav = () => {
    return (
        <NavContainer>
            <Logo to="/">
                <img src={logo}></img>
            </Logo>

            <Links>
                <StyledLink to="/ushistory">US History</StyledLink>
                <StyledLink to="/">APUSH</StyledLink>
                <StyledLink to="/">Global</StyledLink>
                <StyledLink to="/">AP Human Geo</StyledLink>
                <StyledLink to="/">Government</StyledLink>
            </Links>
        </NavContainer>
    );
};

export default Nav;