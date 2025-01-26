import styled from "styled-components";
import properties from "../../../../global/GlobalStyleVar";

const HamburgerContainer = styled.label`

    display: none;

    ${properties.mediaQuery.tablet(`
        display: flex;
    `)};

    align-items: center;
    cursor: pointer;

    input {
        display: none;
    }

    svg {
        /* The size of the SVG defines the overall size */
        height: 3em;

        /* Define the transition for transforming the SVG */
        transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);

        .line {
            fill: none;
            stroke: ${properties.colors.default};
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 1.5;

            /* Define the transition for transforming the Stroke */
            transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .line-top-bottom {
            stroke-dasharray: 12 63;
        }
    }

    input:checked + svg {
        transform: rotate(-45deg);

        .line-top-bottom {
            stroke-dasharray: 20 300;
            stroke-dashoffset: -32.42;
        }
    }
`;

export default HamburgerContainer;
