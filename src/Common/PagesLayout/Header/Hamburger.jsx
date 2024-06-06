import styled from "styled-components";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Hamburger = ({ toggle }) => {
    return (
        <HamburgerStyled onClick={toggle}>
            <FontAwesomeIcon icon={faBars} />
        </HamburgerStyled>
    );
};

export default Hamburger;

// prop-types
Hamburger.propTypes = {
    toggle: PropTypes.func.isRequired,
};

// HAMBURGER STYLED color white to black 6/5 22:19 df
const HamburgerStyled = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;

    font-size: 30px;
    color: #1c1c1c;

    cursor: pointer;
`;
