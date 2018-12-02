import {all, takeLatest, call} from "redux-saga/effects";
import * as CounterAction from "../actions/CounterAction";
import {asyncSagaCallBack} from "../../utils/ReduxSagaUtil";

import * as api from "../apis/TestApis";
import {IJpholderInfo} from "../../../model/interface/IJpholderInfo";

type actionType = {
    type: string,
    payload: any
};

function * increaseSaga(info: actionType) {
    yield console.log(info.payload);
    yield call(asyncSagaCallBack,CounterAction.actionCreators.decrement,api.asyncCall,info.payload,
        function* success(success: IJpholderInfo) {
            yield console.log(12);
            yield console.log(success);
        } as any,
        function* failure(error) {
            yield console.log(error);
        } as any);

}

export default function* root() {
    yield all([
        takeLatest(CounterAction.INCREMENT, increaseSaga)
    ]);
}