import axios, {AxiosInstance} from 'axios';

let axiosUtil: AxiosInstance = axios.create();
axiosUtil.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axiosUtil.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
axiosUtil.defaults.headers.common['Access-Control-Allow-Methods'] = '*';

export default axiosUtil;