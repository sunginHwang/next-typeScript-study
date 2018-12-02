import { all, takeLatest, call } from "redux-saga/effects";
import * as CounterAction from "../actions/CounterAction";
import * as api from "../apis/TestApis";


function * increaseSaga() {
    try {
        const result : any = yield call(api.asyncCall,1); // 비동기처리 promise
        yield console.log(result);
    } catch(error) { // API 요청 자체 실패
        yield console.log(error);
    }}

export default function* root() {
    yield all([
        takeLatest(CounterAction.INCREMENT, increaseSaga)
    ]);
}