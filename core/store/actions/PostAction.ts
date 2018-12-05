import { createAction } from 'redux-actions';

export const GET_POST:string = 'post/GET_POST';
export const GET_POST_SUCCESS:string = 'counter/GET_POST_SUCCESS';
export const GET_POST_FAILURE:string = 'counter/GET_POST_FAILURE';

export const actionCreators = {
    getPost: createAction(GET_POST),
    getPostSuccess: createAction(GET_POST_SUCCESS),
    getPostFailure: createAction(GET_POST_FAILURE),
};

