import styled from "styled-components";

const Inset = ({ children }) => {
    return <InsetStyled className="Inset">{children}</InsetStyled>;
};

export default Inset;

//max width 1200 to 1600 21:26 df
const InsetStyled = styled.div`
    max-width: 1600px;
    margin: auto;
    padding: 0px 10px;
`;
