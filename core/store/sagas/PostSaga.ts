import {all, takeLatest, call, put} from "redux-saga/effects";
import * as PostAction from "../actions/PostAction";

import * as api from "../apis/TestApis";
import {AxiosResponse} from "axios";


type apiCommonResponse = {
    msg: string,
    result: any,
    state: boolean
};

type actionType = {
    type: string,
    payload: any
};

function * getPostInfo(info: actionType) {

    try {
        const result :AxiosResponse<apiCommonResponse> = yield call(api.asyncCall,info.payload); // 비동기처리 promise
        yield console.log('saga success');
        yield put(PostAction.actionCreators.getPostSuccess(result.data.result)); // API 요청 실패 이후 작업

    } catch(error) { // API 요청 자체 실패
        yield call(PostAction.actionCreators.getPostFailure); // API 요청 실패 이후 작업
    }

}

export default function* root() {
    yield all([
        takeLatest(PostAction.GET_POST, getPostInfo)
    ]);
}