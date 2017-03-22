/**
 * Created by yaoandw on 2017/3/12.
 */
import axios from 'axios';
import sess from './sess';

export const HTTP = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000,
    headers: {
        // Authorization: 'Bearer '+sess.get('accessToken')
        Authorization: sess.get('accessToken')
    }
})

// export function axiosInstance() {
//     console.info(HTTP);
//     HTTP.defaults.headers.common['Authorization'] = sess.get('accessToken');
//     return HTTP;
// }

// export default {
//     axiosInstance(){
//         HTTP.defaults.headers.common['Authorization'] = sess.get('accessToken');
//         return HTTP;
//     }
// }