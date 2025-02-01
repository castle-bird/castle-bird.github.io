import styled from "styled-components";
import properties from "../../../global/GlobalStyleVar";

const HistoryContainer = styled.section`
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 2rem 0;

    ${properties.mediaQuery.desktopSmall(`
        padding: 0 15px;
    `)}

    .history-wrap {
        display: flex;
        flex-direction: column;

        max-width: ${properties.breakpoints.tablet};
        margin: 0 auto;

        .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 300px;
            padding: 4rem 0;
            border-top: 1px solid ${properties.colors.gray3};

            &:first-child {
                border-top: none;
                
            }

            ${properties.mediaQuery.mobile(`
                align-items: start;
                flex-direction: column;
                gap: 20px 0;
            `)}

            .content {
                display: flex;

                ${properties.mediaQuery.mobileSmall(`
                    flex-direction: column;
                    gap: 1rem;
                `)}

                strong {
                    width: 16rem;
                    padding-right: 3rem;
                    line-height: 1;
                    font-weight: 600;
                    font-size: 4rem;
                    color: ${properties.colors.primary};

                    ${properties.mediaQuery.tablet(`
                        width: 14rem;
                    `)}
                }

                ul {
                    li {
                        display: flex;
                        gap: 1rem;
                        padding-top: 2rem;

                        &:first-child {
                            padding-top: 0;
                        }

                        ${properties.mediaQuery.mobileSmall(`
                            padding-top: 1rem;
                        `)}

                        .date {
                            font-weight: 600;
                            width: 50px;

                            ${properties.mediaQuery.tablet(`
                                width: 40px;
                            `)}
                        }

                        .description {
                        }
                    }
                }
            }

            .thumb {
                width: 300px;
                height: 148px;
                border-radius: 1rem;
                overflow: hidden;

                ${properties.mediaQuery.tablet(`
                    width: 200px;
                    height: 98px;
                `)}

                ${properties.mediaQuery.mobile(`
                    display: flex;
                    align-items: center;
                    width: 100%;
                `)}

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
`;

export default HistoryContainer;
