import styled from "styled-components";

/* Components ---------------------------*/
import Inset from "./Inset.jsx";
import SiteLogo from "./SiteLogo/SiteLogo.jsx";

/* FOOTER TEXT CONTENT - Changed crossfit slogan to my contact email.
Updated copyright to 2024. Changed body from H2 to H5. 6/5 22:48 df
Remove Site Logo:
<div className="logo">
                    <SiteLogo />
                </div>
Remove copyright:
<div className="copyright">
                    &copy; 2024. All rights reserved.
                </div>


  6/5 22:53 df */

const Footer = () => {
    return (
        <FooterStyled className="Footer">
            <Inset>
                <h5>danagfleming@gmail.com</h5>
            </Inset>
        </FooterStyled>
    );
};

export default Footer;

const FooterStyled = styled.footer`
    color: white;

    padding: 20px 0px;

    text-align: center;

    /* LOGO DISPLAY justify-content from center to left
    CUT THIS? DROPPED CONTENT 22:44 6/5 df */
    .logo {
        display: flex;
        justify-content: left;
        .SiteLogo {
            margin-bottom: 10px;
            width: 150px;
        }
    }
    /* FOOTER STYLE #ffffff to #1c1c1c, add text-align left,
    added 50px margins on Top,Left,Bottom
    font-size 12 to 15

    Changed body to from h2 to h5 to reduce font weight. 6/5 22:45 df */
    h5 {
        color: #1c1c1c;
        margin: 50px 50px 50px;
        font-size: 15px;
        text-align: left;
    }
    /* FOOTER STYLE #ffffff to #1c1c1c add text-align left
    CUT THIS? DROPPED CONTENT 6/5 22:45 df */
    .copyright {
        font-size: 14px;
        color: #1c1c1c;
        text-align: left;
    }
`;
