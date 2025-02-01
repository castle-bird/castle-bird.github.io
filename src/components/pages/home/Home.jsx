import { useContext, useRef } from "react";
import { GitContext } from "../../../hooks/GitContext";

import HomeContainer from "./Home_styled";
import HomeList from "./HomeList/HomeList";
import HomeView from "./HomeView/HomeView";

export default function Home() {
    const { gitState, currentData } = useContext(GitContext);
    const currentView = useRef();

    return (
        <HomeContainer>
            <HomeList gitState={gitState} currentView={currentView}/>
            <HomeView currentData={currentData} currentView={currentView}/>
        </HomeContainer>
    );
}
