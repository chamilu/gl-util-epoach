import React, { useState, useEffect } from "react";
import moment from "moment";

const Date = () => {
    const [date, setDate] = useState(0);

    const getDate = () => {
        const epoach = moment("1970-01-01").format("YYYY-MM-DD");
        const today = moment();
        const value = today.diff(epoach, "days");
        setDate(value);
    };

    useEffect(() => {
        getDate();
        setInterval(() => {
            getDate();
        }, 60 * 1000);
    }, []);

    return (
        <div id="date-wrapper">
            <div className="field">Date:</div>
            <div className="big">{date}</div>
        </div>
    );
};

export default Date;
