import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

/* NAV LINK NAMES
navlink from Staff to work
noticed it becomes off-centered when the amount of characters in the text changes 6/5 22:29 df

further navlink name updates 6/8 17:07*/
const MainMenu = ({ onClick }) => {
    return (
        <MainMenuStyled onClick={onClick}>
            <nav className="mainMenu">
                <NavLink to={"/"} end>
                    UX
                </NavLink>
                <NavLink to={"/staff"}>Photography</NavLink>
                <NavLink to={"/contact"}>CV</NavLink>
                <NavLink to={"/course-work"}>Course</NavLink>
            </nav>
        </MainMenuStyled>
    );
};

export default MainMenu;

// prop-types
MainMenu.propTypes = {
    onClick: PropTypes.func,
};

const MainMenuStyled = styled.nav``;
