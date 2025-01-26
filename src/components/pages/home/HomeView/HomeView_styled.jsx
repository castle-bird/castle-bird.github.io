import styled from "styled-components";
import properties from "../../../../global/GlobalStyleVar";

const HomeViewContainer = styled.article`
    position: relative;
    flex: 1;

    .home-view-wrap {
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        padding-bottom: 3rem;

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
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        gap: 1rem;

        height: 3rem;

        margin-bottom: 0;
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
            .anothor {
                background-color: rgb(243, 234, 243);
                color: rgb(0, 0, 0);
            }
        }
    }
`;

export default HomeViewContainer;
