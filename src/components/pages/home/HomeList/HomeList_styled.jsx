import styled from "styled-components";
import properties from "../../../../global/GlobalStyleVar";

const HomeListContainer = styled.article`
    position: relative;
    width: 300px;

    ${properties.mediaQuery.tablet(`
        width: 260px;
    `)} 

    ${properties.mediaQuery.mobile(`
        position: absolute;
        top: 0;
        left: -280px;
        height: 100%;
        z-index: 1;
        background-color: ${properties.colors.white};
        transition: 0.4s ease-in;
        box-shadow: 0 0 8px rgba(0 0 0 / 16%);
    `)} 

    ul {
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;

        li {
            position: relative;
            padding: 1rem 1rem 0;

            &::before {
                content: "";
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 70%;
                height: 1px;
                background-color: ${properties.colors.gray};
                transform: translateX(-50%);
                transition: all 0.1s ease-in;
            }

            &:last-child {

                &::before {
                    display: none;
                }

                padding-bottom: 1rem;
            }

            &.active {
                &::before {
                    opacity: 0;
                }

                a {
                    box-shadow: 0 0 8px rgba(0 0 0 / 16%);
                }
            }

            &:hover {
                &::before {
                    opacity: 0;
                }

                a {
                    box-shadow: 0 0 8px rgba(0 0 0 / 16%);
                }
            }

            a {
                display: block;
                padding: 2rem 1rem;
                border-radius: 1.5rem;
                transition: all 0.1s ease-in;

                strong {
                    display: block;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: ${properties.colors.primary};
                }

                h3 {
                    font-weight: 600;
                    font-size: 1.125rem;
                }

                p {
                    overflow: hidden;
                    white-space: normal;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    word-break: keep-all;
                    color: ${properties.colors.gray2};
                }
            }
        }
    }
`;

export default HomeListContainer;
