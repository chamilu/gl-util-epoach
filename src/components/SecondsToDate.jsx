import React, { useState } from "react";

function SecondsToDate() {
    // const date = new Date(1593181260000);
    const [date, setDate] = useState("");

    const getDateFromSeconds = (e) => {
        const { value } = e.target;
        if (value && value.length === 13) {
            setDate(new Date(parseInt(value, 10)));
        } else {
            setDate("Invalid! eg: 1593181260000");
        }
    };
    return (
        <div className="margin-b">
            <div className="field">Get current DateTime: (*beta)</div>
            <div style={{ marginBottom: 10 }}>
                <input
                    className="text"
                    type="text"
                    onChange={getDateFromSeconds}
                />
            </div>
            <div className="field-small">{date.toString()}</div>
        </div>
    );
}

export default SecondsToDate;
