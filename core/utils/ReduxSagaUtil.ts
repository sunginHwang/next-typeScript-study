import { call } from "redux-saga/effects";
import { AxiosResponse} from "axios";


interface apiCommonResponse {
    msg: string,
    result: any,
    state: boolean
};

export function * asyncSagaCallBack(asyncFunc, apiFunc, payload, successFunc, failureFunc) : any {

/*    yield put(asyncFunc.request()); // 요청대기*/

    try {
        const result :AxiosResponse<apiCommonResponse> = yield call(apiFunc,payload); // 비동기처리 promise
        yield call(successFunc,result.data.result); // API 요청 실패 이후 작업

    } catch(error) { // API 요청 자체 실패
        yield call(failureFunc,asyncFunc); // API 요청 실패 이후 작업
    }
}

