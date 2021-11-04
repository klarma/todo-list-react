import { useSelector, useDispatch } from "react-redux";
import { selectTasks, selectHideDone, toggleTaskDone, removeTask } from "../tasksSlice";
import { List, Item, Content, Button } from "./styled";

const TaskList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

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
                            onClick={() => dispatch(toggleTaskDone(task.id))}
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
                            onClick={() => dispatch(removeTask(task.id))}
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