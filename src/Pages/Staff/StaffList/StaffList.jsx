import styled from "styled-components";

import { staffData } from "../staffData.js";

import StaffMember from "./StaffMember.jsx";

const StaffList = () => {
    return (
        <StaffListStyled>
            {staffData.map((member) => {
                return <StaffMember key={member.id} member={member} />;
            })}
        </StaffListStyled>
    );
};

export default StaffList;
/* minmax 250 to 400px 6/8 15:27
gap from 1rem to 2rem 6/8 15:38
 */
const StaffListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 2rem;
`;
