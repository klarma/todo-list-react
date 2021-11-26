import { useSelector, useDispatch } from "react-redux";
import { fetchExampleTasks, selectButtonState } from "../tasksSlice";
import { Button } from "../styledButton";

const ButtonExampleTasks = () => {
    const buttonState = useSelector(selectButtonState);
    const dispatch = useDispatch();

    return (
        buttonState ?
            (
                <Button onClick={() => dispatch(fetchExampleTasks())}>
                    Pobierz przykładowe zadania
                </Button>
            ) :
            (
                <Button disabled>
                    Ładowanie
                </Button>
            )
    );
};

export default ButtonExampleTasks;