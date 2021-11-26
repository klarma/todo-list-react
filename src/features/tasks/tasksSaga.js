import { takeEvery, call, put, delay } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
    try {
        yield delay(2000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
    };
};

export function* watchFetchExampleTasks() {
    console.log("działa");
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
};