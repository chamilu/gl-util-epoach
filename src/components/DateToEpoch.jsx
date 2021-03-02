import React, { useState, useEffect } from "react";
import moment from "moment";

import Utils from "../utils";

const DateToEpoch = () => {
    const [state, setState] = useState({
        date: 0
    });

    const getDate = () => {
        const epoach = moment("1970-01-01").format("YYYY-MM-DD");
        const today = moment();
        const value = today.diff(epoach, "days");
        setState({
            ...state,
            date: value,
            stateText: ""
        });
    };

    useEffect(() => {
        getDate();
        setInterval(() => {
            getDate();
        }, 60 * 1000);
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
                Date: <span className="field-notice"> {state.stateText}</span>
            </div>

            <div>
                <div style={{ float: "left" }}>
                    <input
                        className="text epoch-date"
                        type="text"
                        value="2021-03-02"
                    />
                </div>

                <div
                    className="big date-to-epoch"
                    onClick={(e) => onTextClick(state.date)}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    :{state.date}
                </div>
            </div>
        </div>
    );
};

export default DateToEpoch;
