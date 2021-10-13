import { useTasks } from '../../useTasks';
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Container/Section";
import Header from "../../common/Container/Header";
import Container from "../../common/Container";

function Tasks() {
  const {
    removeTask,
    toggleTaskDone,
    setAllDone,
  } = useTasks();

  return (
    <>
      <Header
        title="Lista zadań"
      />
      <Container>
        <Section
          title="Dodaj nowe zadanie"
          body={
            <Form />
          }
        />
        <Section
          title="Lista zadań"
          body={
            <TaskList
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
              setAllDone={setAllDone}
            />
          }
        />
      </Container>
    </>
  );
};

export default Tasks;
