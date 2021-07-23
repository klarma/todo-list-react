import { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContentTrimed = newTaskContent.trim();

        if (!newTaskContentTrimed) {
            return;
        };

        addNewTask(newTaskContentTrimed);
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
                className="form__input"
                placeholder="Co jest do zrobienia?"
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
};

export default Form;