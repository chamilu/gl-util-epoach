import React, { useState } from "react";
import { VIEWS } from "../utils/constants";

import Date from "./Date";
import Time from "./Time";
import Menu from "./Menu";
import SecondsToDate from "./SecondsToDate";

const App = () => {
    const [view, setView] = useState(VIEWS.MAIN);
    return (
        <div id="wrapper">
            <Menu view={view} setView={setView} />
            <h1>epoch</h1>
            <Date />
            <Time />
            <SecondsToDate />
        </div>
    );
};

export default App;
