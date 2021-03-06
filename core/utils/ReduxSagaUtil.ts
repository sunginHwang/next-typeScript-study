import { call, put } from "redux-saga/effects";
import { AxiosResponse} from "axios";
import {Action, ActionFunctionAny} from "redux-actions";
import { REQUEST, SUCCESS, FAILURE} from '../../model/interface/async/AsyncType';
import { IApiCommonResponse } from '../../model/interface/common/IApiCommonResponse';




export function * asyncSagaCallBack(asyncFunc:ActionFunctionAny<Action<any>>, apiFunc, payload, successFunc, failureFunc) : any {

    yield put({type:`${asyncFunc+REQUEST}`}); // 요청대기

    try {
        const result :AxiosResponse<IApiCommonResponse> = yield call(apiFunc,payload); // 비동기처리 promise

        if(result.data.state === 'success'){
            const data = result.data.result;
            yield put({type:`${asyncFunc+SUCCESS}`,data});
            yield call(successFunc,result.data); // API 요청 실패 이후 작업
        }else{
            yield put({type:`${asyncFunc+FAILURE}`,result});
            yield call(failureFunc,result.data); // API 요청 실패 이후 작업
        }

    } catch(error) { // API 요청 자체 실패
        yield put({type:`${asyncFunc+FAILURE}`,error});
        yield call(failureFunc,error); // API 요청 실패 이후 작업
    }
}

