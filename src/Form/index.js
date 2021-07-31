import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

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
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
                placeholder="Co jest do zrobienia?"
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    )
};

export default Form;