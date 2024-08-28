import styled from "styled-components";
import {Link} from "react-router-dom";

const HeaderMenuWrapper = styled.ul`
        display: flex;
        gap: 20px;
`;
const HeaderMenuLink = styled(Link)`
        font-size: 15px;
        font-family: Montserrat SemiBold;
        color: white;
        text-transform: uppercase;
`;
function HeaderMenu() {

    return(
        <HeaderMenuWrapper>
            <li><HeaderMenuLink to={'/catalog'}>Каталог</HeaderMenuLink></li>
            <li><HeaderMenuLink to={'/stocks'}>Акции</HeaderMenuLink></li>
            <li><HeaderMenuLink to={'/dap'}>Доставка и оплата</HeaderMenuLink></li>
            <li><HeaderMenuLink to={'/about'}>О нас</HeaderMenuLink></li>
            <li><HeaderMenuLink to={'/contacts'}>Контакты</HeaderMenuLink></li>
        </HeaderMenuWrapper>
    )
}
export default HeaderMenu