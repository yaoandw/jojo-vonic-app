/**
 * Created by yaoandw on 2017/3/12.
 */
import axios from 'axios';
import sess from './sess';

export const HTTP = axios.create({
    baseURL: `http://localhost:3000/`,
    timeout: 1000,
    headers: {
        // Authorization: 'Bearer '+sess.get('accessToken')
        Authorization: sess.get('accessToken')
    }
})