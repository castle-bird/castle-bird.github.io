import styled from "styled-components";
import properties from "../../../global/GlobalStyleVar";

const Error404Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    /* Add your background pattern here */
    background-image: repeating-radial-gradient(#0c0a0a 80%, #2f312f 90%, #3f4549 90%);
    background-size: 65px 65px;
    text-align: center;

    ${properties.mediaQuery.desktopSmall(`
        margin: 0 -15px;
    `)}

    h1 {
        font-weight: 200;
        font-size: 4rem;
        color: ${properties.colors.white};

        span {
            font-weight: 500;
            color: ${properties.colors.primary};
        }
    }
    p {
        margin: 1rem 0;
        color: ${properties.colors.white};
    }
`;

export default Error404Container;
