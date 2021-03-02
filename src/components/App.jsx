import React, { useState } from "react";
import { VIEWS } from "../utils/constants";

import Date from "./Date";
import Time from "./Time";
import Menu from "./Menu";
import DateToEpoch from "./DateToEpoch";
import SecondsToDate from "./SecondsToDate";

const App = () => {
    const [view, setView] = useState(VIEWS.MAIN);
    return (
        <div id="wrapper">
            <Menu view={view} setView={setView} />
            <h1>epoch</h1>
            <div style={{ display: view === VIEWS.MAIN ? "block" : "none" }}>
                <Date />
                <Time />
                <SecondsToDate />
            </div>
            <div style={{ display: view === VIEWS.REVERSE ? "block" : "none" }}>
                <DateToEpoch />
            </div>
        </div>
    );
};

export default App;
