import { call, put } from "redux-saga/effects";
import { AxiosResponse} from "axios";
import {ActionFuncType} from "./ReduxUtil";


interface apiCommonResponse {
    msg: string,
    result: any,
    state: boolean
};

export function * asyncSagaCallBack(asyncFunc:ActionFuncType, apiFunc, payload, successFunc, failureFunc) : any {

   yield put(asyncFunc.request()); // 요청대기

    try {
        const result :AxiosResponse<apiCommonResponse> = yield call(apiFunc,payload); // 비동기처리 promise
        yield put(asyncFunc.success(result.data)); // 비동기 처리 성공
        yield call(successFunc,result.data.result); // API 요청 실패 이후 작업

    } catch(error) { // API 요청 자체 실패
        yield put(asyncFunc.failure(error.response.data)); // 비동기 처리 실패
        yield call(failureFunc,asyncFunc); // API 요청 실패 이후 작업
    }
}

