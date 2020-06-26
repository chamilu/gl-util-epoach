import React from "react";

import Date from "./Date";
import Time from "./Time";
import SecondsToDate from "./SecondsToDate";

const App = () => {
    return (
        <div id="wrapper">
            <h1>epoch</h1>
            <Date />
            <Time />
            <SecondsToDate />
        </div>
    );
};

export default App;
