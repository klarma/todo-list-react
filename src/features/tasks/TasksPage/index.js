import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import ButtonExampleTasks from "./ButtonExampleTasks";
import Section from "../../../common/Container/Section";
import Header from "../../../common/Container/Header";
import Container from "../../../common/Container";
import Search from "./Search";



const TasksPage = () => (
  <>
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<ButtonExampleTasks />}
      />

      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  </>
);

export default TasksPage;
