import { useSelector, useDispatch } from "react-redux";
import { fetchExampleTasks, selectButtonState } from "../tasksSlice";
import { Button, Wrapper } from "../styledButton";

const ButtonExampleTasks = () => {
    const buttonState = useSelector(selectButtonState);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            {buttonState ?
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
            }
        </Wrapper>
    );
};

export default ButtonExampleTasks;