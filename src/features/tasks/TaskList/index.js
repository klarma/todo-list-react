import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { List, Item, Content, Button } from "./styled";

const TaskList = ({ removeTask, toggleTaskDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);

    return (
        <List>
            {
                tasks.map(task => (
                    <Item
                        key={task.id}
                        hidden={task.done && hideDone}
                    >
                        <Button
                            toggleDone
                            onClick={() => toggleTaskDone(task.id)}
                        >
                            {task.done
                                ? <i className='fas fa-check'></i>
                                : ""}
                        </Button>
                        <Content
                            done={task.done}
                        >
                            {task.content}
                        </Content>
                        <Button
                            remove
                            onClick={() => removeTask(task.id)}
                        >
                            <i className="fas fa-trash-alt"></i>
                        </Button>
                    </Item>
                ))
            }
        </List>
    )
}

export default TaskList;