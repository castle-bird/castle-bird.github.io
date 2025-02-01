import styled from "styled-components";
import properties from "../../../global/GlobalStyleVar";

const AboutContainer = styled.section`
    height: 100%;
    padding: 3rem 1.5rem;
    overflow-x: hidden;
    overflow-y: auto;

    .about-wrap {
        max-width: ${properties.breakpoints.desktopSmall};
        margin: 0 auto;
        border-radius: 12px;

        h2 {
            position: relative;
            padding-top: 2rem;
            font-size: 2rem;
            font-weight: 600;
            text-align: center;
            margin-bottom: 1rem;

            &:first-of-type {
                padding-top: 0;

                &::before {
                    display: none;
                }
            }

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 1px;
                background-color: ${properties.colors.gray};
            }
        }

        p {
            font-size: 1.2rem;
            line-height: 1.8;
            text-align: center;
            margin-bottom: 3rem;

            ${properties.mediaQuery.tablet(`
                br {
                    display: none;
                    word-wrap: break-word;
                }    
            `)};

            span {
                font-weight: 600;
                color: ${properties.colors.primary};
                padding: 0 0.4rem;
                border-radius: 4px;
            }
        }

        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;

            li {
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 5px 0;
                width: 7rem;
                height: 7rem;
                text-align: center;
                font-size: 0.875rem;
                box-shadow: 0 0 8px rgba(0 0 0 / 16%);
                border-radius: 1rem;

                img {
                    height: 45px;
                }
            }
        }
    }
`;

export default AboutContainer;
