const localStorageKey = "tasks";

export const saveTasksinLocalStorage = tasks =>
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageKey)) || [];
