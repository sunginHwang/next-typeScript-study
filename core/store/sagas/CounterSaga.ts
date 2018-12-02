import { all, takeLatest } from "redux-saga/effects";
import * as CounterAction from "../actions/CounterAction";


function * increaseSaga() {
    yield console.log('test');
}

export default function* root() {
    yield all([
        takeLatest(CounterAction.INCREMENT, increaseSaga)
    ]);
}