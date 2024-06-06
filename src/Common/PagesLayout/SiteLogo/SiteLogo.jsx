import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/

/* NEW LOGO IMPORT
Successfully changed import source to new logo. Renamed original as OLD 6/5 21:15 df */

import logoUrl from "./crossfit-decimate-logo.png";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="CrossFit Decimate Logo" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #13bbbb;
    width: 100%;
    height: 100%;

    /* ATTEMPT AT RESIZING AND CENTERING
    Changed img width from 100% to 150%, successful resize but now off center.
    Affecting both header and footer. 6/5 21:21 df

    Added margin-left, margin-right, display, still not solved 21:55 df

    22:06 changed it back to 100% for now. */

    img {
        width: 100%;
        height: auto;
    }
`;
