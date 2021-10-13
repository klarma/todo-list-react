import { useState } from 'react';
import { useTasks } from '../../useTasks';
import { useSelector } from "react-redux";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Container/Section";
import Header from "../../common/Container/Header";
import Container from "../../common/Container";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  const { tasks } = useSelector(selectTasks);
  const [hideDone, setHideDone] = useState(false);
  const {
    removeTask,
    toggleTaskDone,
    setAllDone,
  } = useTasks();

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

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
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
        />
      </Container>
    </>
  );
};

export default Tasks;
