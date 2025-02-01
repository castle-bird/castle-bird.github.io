import styled from "styled-components";
import properties from "../../../../global/GlobalStyleVar";

const HomeViewContainer = styled.article`
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${properties.mediaQuery.mobileSmall(`
        display: none;
    `)}

    .close {
        display: none;
    }

    &.mo-show {
        display: flex;
        justify-content: center;
        align-items: center;

        position: fixed;
        inset: 0 0 0 0;
        background-color: rgba(0 0 0 / 16%);

        z-index: 1;

        .close {
            display: flex;
            justify-content: flex-end;
            width: 85%;
            padding-top: 1rem;
        }

        .home-view-wrap {
            position: relative;
            width: 85%;
            max-height: 70%;
            padding: 2rem 1rem 0;
            border-radius: 1rem 1rem 0 0;

            .logo {
                top: 1rem;
                right: 10px;
            }
        }

        .tags {
            width: 85%;
            padding: 1rem;
            border-radius: 0 0 1rem 1rem;
        }
    }

    .home-view-wrap {
        overflow-x: hidden;
        overflow-y: auto;
        padding-bottom: 2rem;
        padding-right: 10px;
        background-color: #fff;

        > * {
            margin-bottom: 1rem;
        }

        em {
            position: relative;
            display: block;
            padding-left: 0.7rem;
            font-weight: 600;
            font-size: 1.25rem;

            &::before {
                content: "";
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: ${properties.colors.primary};
            }
        }

        .content {
            display: block;
            margin-top: 10px;
            padding: 1rem;
            background-color: ${properties.colors.gray3};
            border-radius: 1rem;
        }

        strong {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            color: ${properties.colors.primary};
        }

        h4 {
        }

        .timeline {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            li {
            }
        }

        .logo {
            position: absolute;
            top: 0;
            right: 0;
            width: 8rem;
            z-index: 1;
        }

        .description {
        }
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5rem 1rem;

        padding: 1rem 0;
        background-color: ${properties.colors.white};

        li {
            border-radius: 1.5rem;
            font-weight: 500;

            span {
                padding: 2px 10px;
                border-radius: 1rem;
                font-size: 0.875rem;
            }

            .pub {
                background-color: rgb(211, 229, 239);
                color: rgb(24, 51, 71);
            }
            .public {
                background-color: rgb(255, 226, 221);
                color: rgb(93, 23, 21);
            }
            .web {
                background-color: rgb(232, 222, 238);
                color: rgb(65, 36, 84);
            }
            .manage {
                background-color: rgb(219, 237, 219);
                color: rgb(28, 56, 41);
            }
            .build {
                background-color: rgb(250, 222, 201);
                color: rgb(73, 41, 14);
            }
            .accessibility {
                background-color: rgb(227, 226, 224);
                color: rgb(50, 48, 44);
            }
            .nexacro {
                background-color: rgb(238, 224, 218);
                color: rgb(68, 42, 30);
            }
            .si {
                background-color: rgb(245, 224, 233);
                color: rgb(76, 35, 55);
            }
            .join {
                background-color: rgb(253, 236, 200);
                color: rgb(64, 44, 27);
            }
            .front {
                background-color: #e0e6f7;
                color: #3c4b73;
            }
            .individual {
                background-color: #d6e9d6;
                color: #2d4a34;
            }
            .react {
                background-color: #e1f7ff;
                color: #1c6f8c;
            }
            .anothor {
                background-color: #f5e6cc;
                color: #6b4f3f;
            }
        }
    }
`;

export default HomeViewContainer;
