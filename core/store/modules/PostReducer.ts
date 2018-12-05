import { handleActions } from 'redux-actions';
import * as action from '../actions/PostAction';
import {IBlogInfo} from '../../../model/interface/IBlogInfo';

const initialState: IBlogInfo = {
    blog_content: {
        board_key: 0,
        category_key: 0,
        category_name:'',
        content:'',
        member_id:'',
        member_key: '',
        title:'',
        regi_date:''
    },
    blog_comment : undefined
};

export default handleActions<IBlogInfo>(
    {
        [action.GET_POST]: (state) => {
            return { ...state };
        },
        [action.GET_POST_SUCCESS]: (state, action) => {
            console.log(state, action);
            return { ...state };
        },
        [action.GET_POST_FAILURE]:  (state) => {
            return { ...state };
        },

    },
    initialState
);