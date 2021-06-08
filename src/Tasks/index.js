import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
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
                        className="tasks__button tasks__button--done">
                        {task.done
                            ? <i class='fas fa-check'></i>
                            : ""}
                    </button>
                    <span
                        className={
                            `tasks__spanTask${task.done
                                ? " tasks__spanTask--done"
                                : ""}`
                        }
                    >
                        {task.content}
                    </span>
                    <button
                        className="tasks__button">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </li>
            ))
        }
    </ul>
)

export default Tasks;