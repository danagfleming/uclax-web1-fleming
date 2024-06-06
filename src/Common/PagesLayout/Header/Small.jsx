import { useState } from "react";
import styled from "styled-components";

/* Components ---------------------------*/
import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import MainMenu from "./MainMenu.jsx";
import Hamburger from "./Hamburger.jsx";

const Small = () => {
    const [showMenu, showMenuUpdate] = useState(false);

    const toggle = () => {
        showMenuUpdate(!showMenu);
    };

    const hideMenu = () => {
        showMenuUpdate(false);
    };

    return (
        <SmallStyled>
            <Hamburger toggle={toggle} />
            <SiteLogo />
            {showMenu && <MainMenu onClick={hideMenu} />}
        </SmallStyled>
    );
};

export default Small;

const SmallStyled = styled.div`
    display: flex;
    justify-content: center;

    .SiteLogo {
        height: 300px;
        display: flex;
        align-items: center;
        padding: 20px;
        max-width: 330px;
    }
    // NAV background-color from #034444 to #f9f9f9 6/5 22:36
    nav {
        position: fixed;
        left: 0px;
        top: 300px;
        right: 0px;
        bottom: 0px;

        z-index: 100;

        background-color: #f9f9f9;

        // TEXT remove border-bottom: solid 1px #999999, change color white to #1c1c1c ? 6/5 22:22
        a {
            display: block;

            padding: 10px;

            color: #1c1c1c;
            text-decoration: none;
            // FOCUS TEXT remove background-color: #002a2a;, add border-bottom: solid 1px #1c1c1c;
            &:hover,
            &:active,
            &:focus {
                border-bottom: solid 1px #1c1c1c;
            }
        }
    }
`;
