import {Action, handleActions} from 'redux-actions';
import * as action from '../actions/PostAction';
import {IBlogInfo} from '../../../model/interface/IBlogInfo';
import {IBlogContentRes} from "../../../model/interface/apis/IBlogContentRes";

const initialState: IBlogInfo = {
    blog_content: {
        board_key: 0,
        category_key: 0,
        category_name: '',
        content: '',
        member_id: '',
        member_key: '',
        title: '',
        regi_date: ''
    },
    blog_comment: undefined
};

export default handleActions<IBlogInfo, any>(
    {
        [action.GET_POST]: (state) => {
            return {...state};
        },
        [action.GET_POST_SUCCESS]: (state, action: Action<IBlogContentRes>): IBlogInfo => {
            const boardInfo: IBlogContentRes = action.payload!;
            return {
                ...state,
                blog_content: boardInfo!.board_content,
                blog_comment: boardInfo!.board_commnet
            };
        },
        [action.GET_POST_FAILURE]: (state) => {
            return {...state};
        },
        [action.GET_POST_COMMON.REQUEST]: (state) => {
            return {...state};
        },
        [action.GET_POST_COMMON.SUCCESS]: (state, action: Action<IBlogContentRes>): IBlogInfo => {
            const boardInfo: IBlogContentRes = action.payload!;
            return {
                ...state,
                blog_content: boardInfo!.board_content,
                blog_comment: boardInfo!.board_commnet
            };
        },
        [action.GET_POST_COMMON.FAILURE]: (state) => {
            return {...state};
        },

    },
    initialState
);