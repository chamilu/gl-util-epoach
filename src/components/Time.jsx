import React, { useState, useEffect } from "react";
import moment from "moment";

const Time = () => {
    const [time, setTime] = useState(0);

    const getTime = () => {
        const midNight = moment().clone().startOf("day");
        const value = moment().diff(midNight, "milliseconds");
        setTime(value);
    };

    useEffect(() => {
        getTime();
        setInterval(() => {
            getTime();
        }, 4000);
    }, []);

    return (
        <div>
            <div className="field">Time:</div>
            <div className="big">{time}</div>
        </div>
    );
};

export default Time;
