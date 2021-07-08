import React, { useState } from "react";
import moment from "moment";

import Utils from "../utils";
import { TIME_FORMAT } from "../utils/constants";

const MilliSecToTime = () => {

    const getMidNight = () => moment().clone().startOf("day");

    const convertMillSecToTime = (millSec) => getMidNight().add(Number(millSec), 'milliseconds').format('HH:mm:ss');

    const [state, setState] = useState({
        enteredMilliSeconds: moment().diff(getMidNight(),'milliseconds'),
        convertedTime: convertMillSecToTime(moment().diff(getMidNight(),'milliseconds'))
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

    const onMilliSecChange = (e) => {
        const { value } = e.target;
        const isValid = value && String(value).length === 8 && !isNaN(value);
        setState({
            ...state,
            enteredMilliSeconds: value,
            convertedTime: isValid ? convertMillSecToTime(value) : "-"
        });
    };

    return (
        <div className="margin-b" style={{ overflow: "hidden" }}>
            <div className="field">
                {/* Milliseconds: <span className="field-notice"> {state.stateText}</span> */}
            </div>

            <div>
                <div style={{ float: "left" }}>
                    <input
                        className="text epoch-date"
                        type="text"
                        value={state.enteredMilliSeconds}
                        placeholder="SSSSSSSS"
                        maxLength="8"
                        onChange={onMilliSecChange}
                    />
                </div>

                <div className="separator">
                    :
                </div>

                <div
                    className="big date-to-epoch"
                    onClick={(e) => onTextClick(state.convertedTime)}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {state.convertedTime}
                </div>
            </div>
        </div>
    );
};

export default MilliSecToTime;
