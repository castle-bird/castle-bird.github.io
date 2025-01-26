import styled from "styled-components";
import properties from "../../../global/GlobalStyleVar";

const HomeContainer = styled.section`
    position: relative;
    display: flex;
    gap: 0 30px;
    max-width: ${properties.breakpoints.tablet};
    height: 100%;
    margin: 0 auto;
    padding-top: 2rem;
    box-sizing: border-box;
`;

export default HomeContainer;
