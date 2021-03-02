import React from "react";
import { MdAlarmOn, MdHistory } from "react-icons/md";
import { VIEWS } from "../utils/constants";

const Menu = ({ view, setView }) => {
    return (
        <div className="menu-wrapper">
            <div
                className={`icon ${view === VIEWS.REVERSE ? "selected" : ""}`}
                onClick={() => setView(VIEWS.REVERSE)}
            >
                <MdHistory fontSize="35px" />
            </div>
            <div
                className={`icon ${view === VIEWS.MAIN ? "selected" : ""}`}
                onClick={() => setView(VIEWS.MAIN)}
            >
                <MdAlarmOn fontSize="35px" />
            </div>
        </div>
    );
};

export default Menu;
