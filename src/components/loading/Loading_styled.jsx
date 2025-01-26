import styled, { keyframes } from "styled-components";
import properties from "../../global/GlobalStyleVar";

const rotate4 = keyframes`
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
`;

const dash4 = keyframes`
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90, 200;
        stroke-dashoffset: -35px;
    }

    100% {
        stroke-dashoffset: -125px;
    }
`;

const LoadingContainer = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 3rem;
    transform-origin: center;
    animation: ${rotate4} 2s linear infinite;

    circle {
        fill: none;
        stroke: ${properties.colors.primary};
        stroke-width: 2;
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        animation: ${dash4} 1.5s ease-in-out infinite;
    }
`;

export default LoadingContainer;
