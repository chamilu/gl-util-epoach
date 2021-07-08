import React, { useState } from "react";
import moment from "moment";

import Utils from "../utils";

const EpochToDate = () => {
    const getBaseDate = () => moment("1970-01-01", "YYYY-MM-DD");

    const getEpochDate = (value) => {
        if (value) {
            const providedDate = moment(value, "YYYY-MM-DD");
            const baseDate = moment("1970-01-01", "YYYY-MM-DD");
            return providedDate.diff(baseDate, "days");
        }
    };

    const convertEpochToDate = (epoch) => getBaseDate().add(Number(epoch),'days').format('YYYY-MM-DD');

    const [state, setState] = useState({
        epochDate: getEpochDate(moment().format("YYYY-MM-DD")),
        dateText: convertEpochToDate(getEpochDate(moment().format("YYYY-MM-DD")))
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
        const isValid = value && String(value).length === 5 && !isNaN(value);

        setState({
            ...state,
            dateText: isValid ? convertEpochToDate(value) : "-",
            epochDate: value
        });
    };

    return (
        <div className="margin-b" style={{ overflow: "hidden" }}>
            <div className="field">
                {/* Epoch Date: <span className="field-notice"> {state.stateText}</span> */}
            </div>

            <div>
                <div style={{ float: "left" }}>
                    <input
                        className="text epoch-date"
                        type="text"
                        value={state.epochDate}
                        maxLength="5"
                        placeholder="DDDDD"
                        onChange={onDateChange}
                    />
                </div>

                <div className="separator">
                    :
                </div>

                <div
                    className="big date-to-epoch"
                    onClick={(e) => onTextClick(state.dateText)}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {state.dateText}
                </div>
            </div>
        </div>
    );
};

export default EpochToDate;
