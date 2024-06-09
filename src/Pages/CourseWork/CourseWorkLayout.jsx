import styled from "styled-components";

import { Outlet, NavLink } from "react-router-dom";

import Inset from "@/Common/PagesLayout/Inset.jsx";

const CourseWorkLayout = () => {
    return (
        <CourseWorkLayoutStyled>
            <Inset>
                <h1>Course Work</h1>
                <nav className="sublinks">
                    <NavLink to="/course-work/" end>
                        Essays
                    </NavLink>
                    <NavLink to="/course-work/sun-and-moon">
                        Sun And Moon
                    </NavLink>
                    <NavLink to="/course-work/responsive">Responsive</NavLink>
                    <NavLink to="/course-work/javascript-fundamentals">
                        Fundamentals
                    </NavLink>
                </nav>
                <Outlet />
            </Inset>
        </CourseWorkLayoutStyled>
    );
};

export default CourseWorkLayout;

// background color + font color update 6/8 17:13
const CourseWorkLayoutStyled = styled.div`
    background-color: #f9f9f9;

    h1 {
        color: #1c1c1c;
    }
`;
