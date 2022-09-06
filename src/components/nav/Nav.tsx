import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/hg101.png';
import { NavContainer, Logo, Links, StyledLink, StyledIcon } from './style';

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
                <StyledLink to="/">NYS Regents</StyledLink>
                <StyledIcon href="https://www.teacherspayteachers.com/Store/History-And-Geography-101" target="_blank"><FontAwesomeIcon icon={faStore} /></StyledIcon>
            </Links>
        </NavContainer>
    );
};

export default Nav;