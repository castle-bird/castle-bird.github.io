import styled from "styled-components";
import properties from "../../../global/GlobalStyleVar";

const FooterContainer = styled.footer`
    position: relative;
    padding: 1rem 0;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: ${properties.colors.gray};
    }

    .footer-wrap {
        display: flex;
        justify-content: flex-end;
        gap: 20px;
        max-width: ${properties.breakpoints.desktopSmall};
        margin: 0 auto;
        align-items: center;

        ${properties.mediaQuery.desktopSmall(`
            padding: 0 15px;    
        `)}

        ul {
            display: flex;
            gap: 0 1rem;
            

            li {
                a {
                    display: block;

                    img {
                        display: block;
                    }
                }
            }
        }

        p {
            padding-top: 3px;
            color: ${properties.colors.gray2};
        }
    }
`;

export default FooterContainer;
