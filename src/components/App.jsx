import React, { useState } from "react";

import { VIEWS } from "../utils/constants";

import Date from "./Date";
import Time from "./Time";
import Menu from "./Menu";
import Quotes from "./Quotes";
import DateToEpoch from "./DateToEpoch";
import EpochToDate from "./EpochToDate";
import SecondsToDate from "./SecondsToDate";
import TimeToMilliSec from "./TimeToMilliSec";
import MilliSecToTime from "./MilliSecToTime";

const App = () => {
    const [view, setView] = useState(VIEWS.MAIN);

    return (
        <div id="wrapper">
            <Menu view={view} setView={setView} />
            <h1>epoch</h1>
            <Quotes />
            <div style={{ marginBottom: "50px" }}></div>
            <div style={{ display: view === VIEWS.MAIN ? "block" : "none" }}>
                <Date />
                <Time />
                <SecondsToDate />
            </div>
            <div style={{ display: view === VIEWS.REVERSE ? "block" : "none" }}>
                <DateToEpoch />
                <EpochToDate />
                <div className="margin-b-60"></div>
                <TimeToMilliSec />                
                <MilliSecToTime />
            </div>
        </div>
    );
};

export default App;
