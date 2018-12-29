import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {StoreState} from '../core/store/modules';
import { actionCreators as postActions } from '../core/store/actions/PostAction';
import PostContentComponent from '..//component/post/PostContentComponent/PostContentComponent';
import {IBlogContent} from "../model/interface/IBlogContent";
import {IBlogComment} from "../model/interface/IBlogComment";


class PostContainer extends Component<{
    blog_content: IBlogContent;
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
        PostActions.getPostCommon(180);

    };

    render() {

        const {props} = this as any;
        console.log(props);

        return(
            <div>
                <button onClick={()=>this.onGetPostClick()}>게시글 정보 가져오기</button>
                <PostContentComponent
                    title={props.blog_content.title}
                    content={props.blog_content.content}
                    member_key={props.blog_content.member_key}
                    member_id={props.blog_content.member_id}
                    board_key={props.blog_content.board_key}
                    category_key={props.blog_content.category_key}
                    category_name={props.blog_content.category_name}
                />
            </div>
    );
    }
}

export default connect(
    ({ post }: StoreState) => ({
        blog_content: post.blog_content
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(PostContainer as any);