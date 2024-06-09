import styled from "styled-components";
import { useState } from "react";

import sunImg from "./images/sun.png";
import moonImg from "./images/moon.png";

const SunAndMoon = () => {
    // JS Layer
    const [imgSrc, imgScrUpdate] = useState(moonImg);

    const changeToSun = () => {
        imgScrUpdate(sunImg);
    };
    const changeToMoon = () => {
        imgScrUpdate(moonImg);
    };

    // HTML Layer
    return (
        <SunAndMoonStyled>
            <h2>Sun And Moon</h2>

            <img
                src={imgSrc}
                onMouseEnter={changeToSun}
                onMouseLeave={changeToMoon}
            />
        </SunAndMoonStyled>
    );
};

export default SunAndMoon;

// CSS Layer
const SunAndMoonStyled = styled.div`
    text-align: center;
    //style update 6/8 17:26
    h2 {
        font-size: 30px;
        color: #1c1c1c;
    }

    img {
        display: block;
        margin: 30px auto;
        padding: 20px;
        border: solid 20px teal;
        background-color: #005151;
    }
`;
