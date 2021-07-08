import React, { useState } from "react";
import moment from "moment";

import Utils from "../utils";
import { TIME_FORMAT } from "../utils/constants";

const TimeToMilliSec = () => {
    const getTimeToMill = (value) => {
        const time = moment(value, TIME_FORMAT);
        const midNight = moment().clone().startOf("day");
        return time.diff(midNight, "milliseconds");
    };

    const [state, setState] = useState({
        enteredTime: moment().format(TIME_FORMAT),
        milliSecs: getTimeToMill(moment().format(TIME_FORMAT))
    });

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

    const onDateChange = (e) => {
        const { value } = e.target;
        const isValidDate = moment(value, TIME_FORMAT).isValid();

        setState({
            ...state,
            enteredTime: value,
            milliSecs:
                isValidDate && value.length === 8 ? getTimeToMill(value) : "-"
        });
    };

    return (
        <div className="margin-b" style={{ overflow: "hidden" }}>
            <div className="field">
                Time: <span className="field-notice"> {state.stateText}</span>
            </div>

            <div>
                <div style={{ float: "left" }}>
                    <input
                        className="text epoch-date"
                        type="text"
                        value={state.enteredTime}
                        placeholder="HH:MM:SS"
                        maxLength="8"
                        onChange={onDateChange}
                    />
                </div>

                <div className="separator">
                    :
                </div>

                <div
                    className="big date-to-epoch"
                    onClick={(e) => onTextClick(state.milliSecs)}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {state.milliSecs}
                </div>
            </div>
        </div>
    );
};

export default TimeToMilliSec;
