import React, { useState } from "react";
import moment from 'moment'
import {TIMESTAMP_FORMAT} from '../utils/constants'

function SecondsToDate() {
    const [date, setDate] = useState("");

    const getDateFromSeconds = (e) => {
        const { value } = e.target;
        if (value && value.length === 13) {
            const formattedDate = moment(new Date(parseInt(value, 10))).format(TIMESTAMP_FORMAT)
            setDate(formattedDate);
        } else {
            setDate("Invalid! eg: 1593181260000");
        }
    };
    return (
        <div className="margin-b">
            <div className="field">*Get DateTime by milliseconds:</div>
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
