import { Link } from "react-router-dom";
import HeaderContainer from "./Header_styled";
import Nav from "./Nav/Nav";
import Hamburger from "./Hamburger/Hamburger";
import { useState } from "react";

export default function Header() {
    const [hamburgerChecked, setHamburgerChecked] = useState(false);

    return (
        <HeaderContainer>
            <div className="header-wrap">
                <h1>
                    <Link to="/" aria-label="메인 바로가기">
                        Logo
                    </Link>
                </h1>

                {/* 네비 */}
                <Nav hamburgerChecked={hamburgerChecked} setHamburgerChecked={setHamburgerChecked}/>

                {/* 햄버거 */}
                <Hamburger hamburgerChecked={hamburgerChecked} setHamburgerChecked={setHamburgerChecked}/>
            </div>
        </HeaderContainer>
    );
}
