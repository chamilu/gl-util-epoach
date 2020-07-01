import React, { useState, useEffect } from "react";
import moment from "moment";

import Utils from "../utils";

const Time = () => {
    const [state, setState] = useState(0);

    const getTime = () => {
        const midNight = moment().clone().startOf("day");
        const value = moment().diff(midNight, "milliseconds");
        setState({
            ...state,
            time: value
        });
    };

    useEffect(() => {
        getTime();
        setInterval(() => {
            getTime();
        }, 4000);
    }, []);

    const onTextClick = (textToCopy) => {
        Utils.copyToClipboard(textToCopy);
        setState({
            ...state,
            stateText: "copied"
        });
    };

    const onMouseEnter = () => {
        setState({
            ...state,
            stateText: "click to copy"
        });
    };

    const onMouseLeave = () => {
        setState({
            ...state,
            stateText: ""
        });
    };

    return (
        <div className="margin-b">
            <div className="field">
                Time: <span className="field-notice"> {state.stateText}</span>
            </div>
            <div
                className="big"
                onClick={(e) => onTextClick(state.time)}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {state.time}
            </div>
        </div>
    );
};

export default Time;
