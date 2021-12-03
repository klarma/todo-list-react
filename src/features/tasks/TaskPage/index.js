import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Section from "../../../common/Container/Section";
import Header from "../../../common/Container/Header";
import Container from "../../../common/Container";
import { getTaskById } from "../tasksSlice";

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <>
            <Container>
                <Header title="Szczegóły zadania" />
                <Section
                    title={task ? task.content : "Nie znaleziono zadania :("}
                    body={
                        <><strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}</>
                    }
                />
            </Container>
        </>
    );
};

export default TaskPage;
