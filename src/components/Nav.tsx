import { Link } from 'react-router-dom';
import { NavContainer, Logo, Links, StyledLink, StyledIcon } from './style';

import logo from '../assets/hg101.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

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
                <StyledIcon href="https://www.teacherspayteachers.com/Store/History-And-Geography-101" target="_blank"><FontAwesomeIcon icon={faStore} /></StyledIcon>
            </Links>
        </NavContainer>
    );
};

export default Nav;