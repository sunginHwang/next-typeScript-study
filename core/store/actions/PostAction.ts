import {createAction} from 'redux-actions';
import {asyncActionTypeCreator,} from '../../utils/ReduxUtil';
import { IAsyncActionType } from '../../../model/interface/async/IAsyncActionType';

const prefix:string = 'post/';

export const GET_POST:string = prefix+'GET_POST';
export const GET_POST_SUCCESS:string =  prefix+'GET_POST_SUCCESS';
export const GET_POST_FAILURE:string =  prefix+'GET_POST_FAILURE';
export const GET_POST_COMMON:IAsyncActionType = asyncActionTypeCreator( prefix+'GET_POST_COMMON');

export const actionCreators =  {
    getPost: createAction(GET_POST),
    getPostSuccess: createAction(GET_POST_SUCCESS),
    getPostFailure: createAction(GET_POST_FAILURE),
    getPostCommon: createAction(GET_POST_COMMON.INDEX)
};