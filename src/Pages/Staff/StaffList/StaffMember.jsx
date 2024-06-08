import styled from "styled-components";
import PropTypes from "prop-types";

import Accolades from "./Accolades/Accolades";

const StaffMember = ({ member }) => {
    const { name, image, yearStarted, accolades } = member;

    /* remove all returned data except image

    (
        <h3>{name}</h3>

            <div className="bottom">
                <p>
                    <b>Year Started:</b> {yearStarted}
                </p>
                <Accolades accolades={accolades} />
            </div>
        )

        6/8 15:19 df

    */
    return (
        <StaffMemberStyled>
            <img src={image} alt={name} />
        </StaffMemberStyled>
    );
};

export default StaffMember;

// prop-types
StaffMember.propTypes = {
    member: PropTypes.object.isRequired,
};
// change background color 6/8 15:27
const StaffMemberStyled = styled.div`
    background-color: #f9f9f9;
    // change image size from 100% to 500px 6/8 15:36 . broke it!
    img {
        width: 500px;
        display: block;
    }

    .bottom {
        padding: 20px;
    }

    h3 {
        color: white;
        background-color: #014444;
        padding: 5px 10px;
        margin: 0px;
    }
`;
