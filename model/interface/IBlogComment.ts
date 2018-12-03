export interface IBlogComment {
    board_key: number;
    comment_content: string;
    comment_key: number;
    member_key: number;
    member_nickname: string;
    update_date?: string;
}
