import { combineReducers } from 'redux';
import CounterReducer from '../modules/CounterReducer';
import { ICounterInfo }  from '../../../model/interface/ICounterInfo';

export default combineReducers({
    CounterReducer
} as any);

// 스토어의 상태 타입 정의
export interface StoreState {
    counter: ICounterInfo;
}