import axios, {AxiosPromise, AxiosResponse} from "axios";

export const asyncCall = (postNo: number): AxiosPromise<AxiosResponse> => {
    return axios.get(`http://www.woolta.com:81/api/Board/get_board_content?board_key=${postNo}`)
};