import styled from "styled-components";
import { NavLink } from "react-router-dom";

/* Components ---------------------------*/
import Inset from "../Inset.jsx";
import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import MainMenu from "./MainMenu.jsx";

const MediumLarge = () => {
    return (
        <MediumLargeStyled className="MediumLarge">
            <Inset>
                <div className="inset">
                    <div className="logo">
                        <SiteLogo />
                    </div>
                    <div className="menus">
                        <MainMenu />
                    </div>
                </div>
            </Inset>
        </MediumLargeStyled>
    );
};

export default MediumLarge;

const MediumLargeStyled = styled.div`
    color: white;

    .logo {
        .SiteLogo {
            width: 25%;
            margin: auto;
            padding: 20px 0px;
        }
    }
    /* NAVLINK TEXT STYLE text-align center to right, font weight bold to medium, font-size 12px to 15px,
    text-transform uppercase to lowercase, border-bottom removed (solid, 1px, 84d4d4),
    color #84d4d4 to #1C1C1C, opacity 0.8 to 100 6/5 22:08 */
    nav {
        text-align: center;
        a {
            width: 80px;
            display: inline-block;

            line-height: 30px;
            margin: 0px 0px 20px 5px;

            text-align: center;
            font-size: 15px;
            opacity: 100;
            color: #1c1c1c;
            font-weight: medium;
            text-decoration: none;
            text-transform: lowercase;

            &:hover,
            &:active,
            &:focus {
                opacity: 1;
            }
            // NAVLINK ACTIVE TEXT STYLE border-bottom added, color feature removed 22:16 6/5 df
            &.active {
                border-bottom: solid 1px #1c1c1c;
            }
        }
    }
`;
