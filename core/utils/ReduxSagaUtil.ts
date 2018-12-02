import { call } from "redux-saga/effects";

export function * asyncSagaCallBack(asyncFunc, apiFunc, payload, successFunc, failureFunc) : any {

/*    yield put(asyncFunc.request()); // 요청대기*/

    try {
        yield console.log(asyncFunc);
        const result = yield call(apiFunc,payload); // 비동기처리 promise

        yield call(successFunc,result.data); // API 요청 실패 이후 작업

    } catch(error) { // API 요청 자체 실패
        yield call(failureFunc,asyncFunc); // API 요청 실패 이후 작업
    }
}



export function * asyncSagaCall(asyncFunc, apiFunc, payload) : any {

    /*    yield put(asyncFunc.request()); // 요청대기*/

    yield console.log(asyncFunc);
    const result = yield call(apiFunc, payload); // 비동기처리 promise
    yield console.log(result);

}
