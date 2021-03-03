import React, { useState } from "react";
import moment from "moment";

import Utils from "../utils";

const DateToEpoch = () => {
    const getEpochDate = (value) => {
        if (value) {
            const providedDate = moment(value, "YYYY-MM-DD");
            const baseDate = moment("1970-01-01", "YYYY-MM-DD");
            return providedDate.diff(baseDate, "days");
        }
    };

    const [state, setState] = useState({
        epochDate: getEpochDate(moment().format("YYYY-MM-DD")),
        dateText: moment().format("YYYY-MM-DD")
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
        const isValidDate = moment(value, "YYYY-MM-DD").isValid();

        setState({
            ...state,
            dateText: value,
            epochDate:
                isValidDate && value.length === 10 ? getEpochDate(value) : "-"
        });
    };

    return (
        <div className="margin-b" style={{ overflow: "hidden" }}>
            <div className="field">
                Date: <span className="field-notice"> {state.stateText}</span>
            </div>

            <div>
                <div style={{ float: "left" }}>
                    <input
                        className="text epoch-date"
                        type="text"
                        value={state.dateText}
                        maxLength="10"
                        placeholder="YYYY-MM-DD"
                        onChange={onDateChange}
                    />
                </div>

                <div style={{ fontSize: "40px", color: "#fff", float: "left" }}>
                    :
                </div>

                <div
                    className="big date-to-epoch"
                    onClick={(e) => onTextClick(state.epochDate)}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {state.epochDate}
                </div>
            </div>
        </div>
    );
};

export default DateToEpoch;
