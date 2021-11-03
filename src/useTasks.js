import { useLocalStorageState } from "./useLocalStorageState";

const useTasks = () => {
    const [tasks, setTasks] = useLocalStorageState("tasks", []);

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ]);
    };

    return {
        tasks,
        setAllDone,
        addNewTask,
    };
};

export { useTasks };