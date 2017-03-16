/**
 * Created by yaoandw on 2017/3/12.
 */
import axios from 'axios';

export const HTTP = axios.create({
    baseURL: `http://localhost:3000/`,
    timeout: 1000,
    headers: {
        Authorization: 'Bearer {token}'
    }
})