import styled from 'styled-components';
import {Link} from "react-router-dom";
import logoIcon from '../assets/Header/logo.png'
import HeaderMenu from "./HeaderMenu.jsx"
import HeaderIcons from "./HeaderIcons.jsx"

const HeaderWrapper = styled.div`
    background-color: #ACAC86;
    padding: 28px 50px;
`;

const HeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const HeaderLogo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 25px;
`;
const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
`;
const LogoImg = styled.img`

`;
const LogoText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const LogoTextTop = styled.h2`
    font-size: 25px;
    margin-bottom: 10px;
    font-family: Montserrat SemiBold;
    text-transform: uppercase;
    color: white;
`;
const LogoTextBottom = styled.p`
    font-family: Montserrat SemiBold;
    text-transform: uppercase;
    color: white;
    font-size: 13px;
`;

function Header() {
    return (
        <>
            <HeaderWrapper>
                <div className="container">
                    <HeaderRow>
                        <HeaderLogo to={'/'}>
                            <LogoImg src={logoIcon}/>
                            <LogoText>
                                <LogoTextTop>чайначай</LogoTextTop>
                                <LogoTextBottom>ваш гид в мире китайского чая</LogoTextBottom>
                            </LogoText>
                        </HeaderLogo>
                        <HeaderRight>
                            <HeaderMenu/>
                            <HeaderIcons/>
                        </HeaderRight>

                    </HeaderRow>
                </div>
            </HeaderWrapper>
        </>
    )
}

export default Header