import { useState, useRef } from "react";
import "./style.css";

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
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__field"
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputField}
            />
            <button onClick={focusInput} className="form__button">Dodaj zadanie</button>
        </form>
    );
};

export default Form;