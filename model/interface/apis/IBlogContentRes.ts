import {IBlogComment} from "../IBlogComment";
import {IBlogContent} from "../IBlogContent";

export interface IBlogContentRes {
    board_commnet?: [IBlogComment]
    board_content: IBlogContent
}