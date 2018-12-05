import {IBlogContent} from "./IBlogContent";
import {IBlogComment} from "./IBlogComment";

export interface IBlogInfo{
    blog_content: IBlogContent;
    blog_comment?: [IBlogComment];
}