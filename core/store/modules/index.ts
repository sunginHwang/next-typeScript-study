import { combineReducers } from 'redux';
import counter from './CounterReducer';
import post from './PostReducer';

import {ICounterInfo} from '../../../model/interface/ICounterInfo';
import {IBlogInfo} from '../../../model/interface/IBlogInfo';


export default combineReducers({
    counter, post
} as any);

// 스토어의 상태 타입 정의
export interface StoreState {
    counter: ICounterInfo;
    post: IBlogInfo;
}