import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import properties from "./GlobalStyleVar";

const GlobalStyle = createGlobalStyle`
    ${reset}

    a {
        text-decoration: none;
        color: inherit;
    }
    img {
        max-width: 100%;
    }

    /* 추가 글로벌 CSS */
    html,
    body,
    *,
    *::before, 
    *::after  {
        font-family: "Poppins", "Pretendard Variable", Pretendard , sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: -0.75px;
        color: ${properties.colors.default};
        box-sizing: border-box;

        ${properties.mediaQuery.tablet(`
            font-size: 14px
        `)}
    }

    main {
        ${properties.mediaQuery.desktopSmall(`
            padding: 0 15px;
        `)}
    }

    // 스크롤바
    *::-webkit-scrollbar {
            width: 0.5rem;
            background-color: ${properties.colors.white};
        }

    *::-webkit-scrollbar-thumb {
        background-color: ${properties.colors.gray};
        border-radius: 1rem;
    }

    *::-webkit-scrollbar-thumb:hover {
        cursor: pointer;
        background-color: ${properties.colors.primary};
    }

    ${properties.mediaQuery.tablet(`
        *::-webkit-scrollbar {
            display: none;
        }
    `)};

    // 기본 버튼
    .button {
        z-index: 1;
        position: relative;
        display: inline-block;
        padding: 0.5rem 1rem;
        border: 2px solid ${properties.colors.primary};
        border-radius: 10px;
        font-weight: 500;
        color: ${properties.colors.primary};
        overflow: hidden;
        background-color: ${properties.colors.white};
        cursor: pointer;

        &::before {
            content: "";
            z-index: -1;
            position: absolute;
            width: 12.5rem;
            height: 12.5rem;
            top: 100%;
            left: 100%;
            border-radius: 50%;
            background: ${properties.colors.primary};
            transition: 0.3s all;
        }

        &:hover {
            color: ${properties.colors.white};

            &::before {
                top: -30px;
                left: -30px;
            }
        }
    }
`;

export default GlobalStyle;
