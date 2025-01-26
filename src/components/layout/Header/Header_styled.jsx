import styled from "styled-components";

import properties from "../../../global/GlobalStyleVar";
import logo from "../../../images/layout/logo.svg";

const HeaderContainer = styled.header`
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background-color: ${properties.colors.gray};
    }

    .header-wrap {
        display: flex;
        justify-content: space-between;
        align-content: center;

        max-width: ${properties.breakpoints.desktopSmall};
        margin: 0 auto;
        padding: 0.625rem 0;

        ${properties.mediaQuery.desktopSmall(`
            padding: 0.625rem 15px;
        `)}

        // 로고
        h1 {
            display: flex;
            align-items: center;

            a {
                display: block;
                width: 50px;
                height: 50px;
                background: no-repeat url(${logo}) left top;
                font-size: 0;
                line-height: 0;
            }
        }

        
    }
`;

export default HeaderContainer;
