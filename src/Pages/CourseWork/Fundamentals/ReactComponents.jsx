import styled from "styled-components";

const ReactComponent = ({ title, showDisc = false }) => {
    return (
        <ReactComponentStyled>
            <h3>{title}</h3>
            {showDisc && (
                <DisclaimerStyled>
                    Disclaimer: Film is intended for mature audiences.
                </DisclaimerStyled>
            )}
        </ReactComponentStyled>
    );
};

export default ReactComponent;

const ReactComponentStyled = styled.div`
    border: solid 3px #101010;
    padding: 20px;
    margin: 30px 0px;

    h3 {
        color: #1c1c1c;
    }
`;

const DisclaimerStyled = styled.p`
    color: red;
    margin: 20px 0px;
`;
