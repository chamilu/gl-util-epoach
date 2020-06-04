import React from "react";
import moment from "moment";

const Date = () => {
    const epoach = moment("1970-01-01").format("YYYY-MM-DD");
    const today = moment();
    const date = today.diff(epoach, "days");

    return (
        <div id="date-wrapper">
            <div className="field">Date:</div>
            <div className="big">{date}</div>
        </div>
    );
};

export default Date;
