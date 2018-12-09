import {Action, ActionFunctionAny, createAction} from 'redux-actions';
import {asyncActionTypeCreator, asyncActionCreator, ActionCreatorType} from '../../utils/ReduxUtil';

export const GET_POST:string = 'post/GET_POST';
export const GET_POST_SUCCESS:string = 'post/GET_POST_SUCCESS';
export const GET_POST_FAILURE:string = 'post/GET_POST_FAILURE';
export const GET_POST_COMMON:ActionCreatorType = asyncActionTypeCreator('post/GET_POST_COMMON');

function combineActionAndAsyncActionCreator(){
    let result:{[key: string]: ActionFunctionAny<Action<any>>} = {};

    result.push({'getPost': createAction(GET_POST)});
    result.push({'getPostSuccess': createAction(GET_POST_SUCCESS)});
    result.push({'getPostFailure': createAction(GET_POST_FAILURE)});
    result.push.apply(asyncActionCreator('getPostCommon',GET_POST_COMMON));

    return result;
}

export const actionCreators = combineActionAndAsyncActionCreator();

