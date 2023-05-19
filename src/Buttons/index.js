import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, markAllDone }) => (
  tasks.length > 0 && (
    <StyledButtons>
      <Button
        onClick={toggleHideDone}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button
        onClick={markAllDone}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </Button>
    </StyledButtons>
  )
);

export default Buttons;