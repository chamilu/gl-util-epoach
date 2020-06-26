import React from "react";

function SecondsToDate() {
    const date = new Date(1593181260000);
    return (
        <div className="margin-b">
            <div className="field">Get current DateTime:</div>
            <div style={{ marginBottom: 10 }}>
                <input className="text" type="text" />
            </div>
            <div className="field-small">{date.toString()}</div>
        </div>
    );
}

export default SecondsToDate;
