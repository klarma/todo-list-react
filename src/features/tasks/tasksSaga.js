import { takeEvery, call, put, delay, select } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksinLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(2000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
    };
};

function* saveTasksinLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksinLocalStorage, tasks);
};

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksinLocalStorageHandler);
};