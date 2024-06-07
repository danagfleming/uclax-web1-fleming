import styled from "styled-components";

import Inset from "@/Common/PagesLayout/Inset.jsx";
import Slideshow from "./Slideshow/Slideshow";
import Tabbed from "./Tabbed/Tabbed";

//import podcast banner image, use root routing

import Image from "@/Pages/Home/Slideshow/img/Core-Strength.jpg";

/* remove  <Slideshow /> from under Home 6/6 21:51
Inset Image using title {Image} - Success!!! Display!
*/
const Home = () => {
    return (
        <HomeStyled>
            <h1>Home</h1>
            <img src={Image} alt="Core-Strength" />
            <Inset>
                <Tabbed />
            </Inset>
        </HomeStyled>
    );
};

export default Home;

// add background color 6/6 21:07
//style img - resize SUCCESS 6/6 22:11
const HomeStyled = styled.div`
    h1 {
        display: none;
    }

    background-color: #f9f9f9;
    img {
        max-width: 1800px;
    }
`;
