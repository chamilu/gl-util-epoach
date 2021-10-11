import React, { useState, useEffect } from "react";
import moment from "moment";

import Utils from "../utils";

const Date = () => {
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
        <div className="margin-b-20">
            <div className="field">
                Date: <span className="field-notice"> {state.stateText}</span>
            </div>

            <div
                className="big"
                onClick={(e) => onTextClick(state.date)}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {state.date}
            </div>
        </div>
    );
};

export default Date;
