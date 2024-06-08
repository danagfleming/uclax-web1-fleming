import styled from "styled-components";

import StaffList from "./StaffList/StaffList";

import Inset from "@/Common/PagesLayout/Inset.jsx";

// remove "<h1>Staff</h1>" 6/8 14:45
const Staff = () => {
    return (
        <StaffStyled>
            <Inset>
                <StaffList />
            </Inset>
        </StaffStyled>
    );
};

export default Staff;
// change background color 6/8 15:09
const StaffStyled = styled.div`
    background-color: #f9f9f9;
`;
