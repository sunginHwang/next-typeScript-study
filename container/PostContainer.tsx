import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {StoreState} from '../core/store/modules';
import { actionCreators as postActions } from '../core/store/actions/PostAction';
import {IBlogContent} from "../model/interface/IBlogContent";
import {IBlogComment} from "../model/interface/IBlogComment";


class PostContainer extends Component<{
    blog_contents: IBlogContent;
    blog_comment?: IBlogComment[];
    PostActions: typeof postActions;
}> {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(){
    }

    onGetPostClick = () =>{
        const {props} = this as any;
        const { PostActions } = props;
        PostActions.getPost();
    };

    render() {
/*
        const {props} = this as any;
*/

        return(
            <div>
                <button onClick={()=>this.onGetPostClick()}>게시글 정보 가져오기</button>
            </div>
    );
    }
}

export default connect(
    ({ blogInfo }: StoreState) => ({
        blog_contents: blogInfo.blog_content
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(PostContainer as any);