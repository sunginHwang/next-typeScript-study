import axios, {AxiosInstance} from 'axios';

let axiosUtil: AxiosInstance = axios.create();
axiosUtil.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default axiosUtil;