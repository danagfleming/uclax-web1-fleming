import styled from "styled-components";
import PropTypes from "prop-types";

import { breakpoints } from "@/Common/useMediaQuery";

const TabContent = ({ curTab }) => {
    const { title, image, text } = curTab;

    return (
        <TabContentStyled>
            <div className="column1">
                <img src={image} alt={title} />
            </div>
            <div className="column2">
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </TabContentStyled>
    );
};

export default TabContent;

// prop-types
TabContent.propTypes = {
    curTab: PropTypes.object.isRequired,
};

// change tab background color 6/6 20:59
const TabContentStyled = styled.div`
    padding: 20px;
    background-color: #eee4f7;

    @media ${breakpoints.isMediumAndUp} {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }
    // change image max width from 100% to 400px 6/6 22:29
    // this feature keeps breaking, when I reset it works. Not sure why.
    img {
        max-width: 400px;
        display: block;
        margin: 0px auto 15px;
    }
    // change font color 6/6 21:00
    h3 {
        font-size: 30px;
        color: #000000;
    }

    // change font color 6/6 21:00
    p {
        font-size: 18px;
        color: #000000;
        margin-bottom: 20px;
        line-height: 150%;
    }
`;
