import styled, {keyframes} from "styled-components";
import properties from "../../../../global/GlobalStyleVar";

const navShow = keyframes`
    0% {
        left: -50vw;
    }

    100% {
        left: 0;
    }
`;

const NavContainer = styled.nav`
    position: relative;

    ${properties.mediaQuery.tablet(`
        display: none;
    `)}

    // 모바일
    &.mo-show {
        display: flex;
        align-items: center;
        justify-content: center;

        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 50vw;
        z-index: 1;
        background-color: ${properties.colors.white};
        box-shadow: 0 0 8px rgba(0 0 0 / 16%);
        animation: ${navShow} 0.3s ease-in;

        ul {
            flex-direction: column;
            height: max-content;

            li {
                height: auto;
                text-align: left;

                a {
                    padding: 1rem 2rem;
                    text-align: left;
                }
                button {
                    padding: 1rem 2rem !important;
                }
            }  
        }
    }

    .line {
        position: absolute;
        left: 0;
        bottom: 5px;
        width: 45px;
        height: 3px;
        background-color: ${properties.colors.primary};
        transition: all 0.1s ease-in-out;
        border-radius: 5px;
    }

    ul {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 2rem;

        li {
            height: 100%;

            a {
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                align-items: center;
                height: 100%;
                font-size: 1rem;

                &::before {
                    content: attr(data-text);
                    font-weight: 500;
                    height: 0;
                    line-height: 0;
                    font-size: 1rem;
                    visibility: hidden;
                }

                &.active {
                    font-weight: 500;
                }

                span {
                    display: flex;
                    width: 100%;
                    align-items: center;
                    height: 100%;
                }
            }
        }
    }
`;

export default NavContainer;
