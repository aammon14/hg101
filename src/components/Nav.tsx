import { NavContainer, Logo, Links, Link } from './style';

import logo from '../assets/hg101.jpeg';

const Nav = () => {
    return (
        <NavContainer>
            <Logo src={logo}></Logo>
            <Links>
                <Link>US History</Link>
                <Link>APUSH</Link>
                <Link>Global</Link>
                <Link>AP Human Geo</Link>
                <Link>Government</Link>
            </Links>
        </NavContainer>
    );
};

export default Nav;