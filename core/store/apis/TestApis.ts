import axiosCall from '../../utils/AxiosUtil';
import {AxiosPromise, AxiosResponse} from "axios";

export const asyncCall = (postNo: number): AxiosPromise<AxiosResponse> => {
    return axiosCall.get(`http://www.woolta.com:81/api/Board/get_board_content?board_key=${postNo}84`)
};