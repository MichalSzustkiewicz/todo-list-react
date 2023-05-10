import { useState, useRef } from "react";
import { FormButton, FormContainer, FormField } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputField = useRef();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (trimmedNewTaskContent !== "") {
            addNewTask(trimmedNewTaskContent);
            setNewTaskContent("");
        }
    };

    const focusInput = () => {
        inputField.current.focus();
    };

    return (
        <FormContainer onSubmit={onFormSubmit}>
            <FormField
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputField}
            />
            <FormButton onClick={focusInput}>
                Dodaj zadanie
            </FormButton>
        </FormContainer>
    );
};

export default Form;