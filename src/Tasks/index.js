import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasksList">
        {
            tasks.map(task => (
                <li
                    key={task.id}
                    className={`tasksList__item${task.done && hideDoneTasks
                        ? " taskList__item--hide"
                        : ""}`
                    }
                >
                    <button
                        className="tasksList__button tasksList__button--done">
                        {task.done
                            ? <i class='fas fa-check'></i>
                            : ""}
                    </button>
                    <span
                        className={
                            `tasksList__spanTask${task.done
                                ? " tasksList__spanTask--done"
                                : ""}`
                        }
                    >
                        {task.content}
                    </span>
                    <button
                        className="tasksList__button">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </li>
            ))
        }
    </ul>
)

export default Tasks;