import { takeEvery, call, put, delay, select } from "redux-saga/effects";
import { fetchExampleTasks, fetchExampleTasksSuccess, fetchExampleTasksError, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksinLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError())
        yield call(alert, "Coś poszło nie tak");
    };
};

function* saveTasksinLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksinLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksinLocalStorageHandler);
};