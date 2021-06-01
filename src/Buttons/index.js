import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <span className="section__span">
        {tasks.length > 0 && (
            <>
                <button className="section__button">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="section__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}

    </span>
);

export default Buttons;