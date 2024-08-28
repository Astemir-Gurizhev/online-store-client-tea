import styled from 'styled-components';
import {Link} from "react-router-dom";
import SearchIconImg from "../assets/Header/search.png"
import CartIconImg from "../assets/Header/cart.png"

const HeaderIconsWrapper = styled.div`
    display: flex;
    gap: 24px;
`;
const SearchIcon = styled.div`
    cursor: pointer;
`;
const CartIcon = styled(Link)`

`;


function HeaderIcons() {
    return(
        <HeaderIconsWrapper>
            <SearchIcon><img src={SearchIconImg} alt=""/></SearchIcon>
            <CartIcon to={'/cart'}><img src={CartIconImg} alt=""/></CartIcon>
        </HeaderIconsWrapper>
    )
}

export default HeaderIcons