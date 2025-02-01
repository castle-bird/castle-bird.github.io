import styled from "styled-components";
import properties from "../../../global/GlobalStyleVar";

const HistoryContainer = styled.section`
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;

    .history-wrap {
        display: flex;
        justify-content: space-between;
        max-width: ${properties.breakpoints.tablet};
        margin: 0 auto;
        padding: 2rem 0;

        .year {
            flex: 1;

            strong {
                font-size: 8rem;
                font-weight: 600;
                line-height: 1;
                color: ${properties.colors.primary};
            }
        }

        .description {
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            gap: 4rem;
            padding-left: 10rem;

            li {
                display: flex;
                flex-direction: column;

                &[data-year] {
                    margin-top: 10rem;
                }
                &[data-year]:first-of-type {
                    margin-top: 0;
                }

                .date {
                    font-weight: 500;
                    font-size: 2rem;
                }
            }
        }
    }
`;

export default HistoryContainer;
