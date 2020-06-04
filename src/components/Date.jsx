import React from "react";
import moment from "moment";

const Date = () => {
    const epoach = moment("1970-01-01").format("YYYY-MM-DD");
    const today = moment();
    const date = today.diff(epoach, "days");

    return (
        <div className="margin-b-40">
            <div>date: </div>
            <div className="big">{date}</div>
        </div>
    );
};

export default Date;
