import axios from "axios";


export const asyncCall = (postNo: number): any => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postNo}`)
};