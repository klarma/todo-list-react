import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasks">
        {
            tasks.map(task => (
                <li
                    key={task.id}
                    className={`tasks__item${task.done && hideDone
                        ? " tasks__item--hide"
                        : ""}`
                    }
                >
                    <button
                        className="tasks__button tasks__button--done"
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done
                            ? <i className='fas fa-check'></i>
                            : ""}
                    </button>
                    <span
                        className={
                            `tasks__spanTask${task.done
                                ? " tasks__spanTask--done"
                                : ""}`
                        }
                    >
                        {task.id} - {task.content}
                    </span>
                    <button
                        className="tasks__button"
                        onClick={() => removeTask(task.id)}
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </li>
            ))
        }
    </ul>
)

export default Tasks;