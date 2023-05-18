import { useState, useRef } from "react";
import { Button, StyledForm, Input } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputField = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (trimmedNewTaskContent !== "") {
            addNewTask(trimmedNewTaskContent);
            setNewTaskContent("");
            inputField.current.focus();
        }
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputField}
            />
            <Button>
                Dodaj zadanie
            </Button>
        </StyledForm>
    );
};

export default Form;