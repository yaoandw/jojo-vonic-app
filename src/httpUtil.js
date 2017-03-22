/**
 * Created by yaoandw on 2017/3/21.
 */

import {HTTP} from './http-common';
import sess from './sess';

export default {
    get (query,callback) {
        // var th = this;
        HTTP.get(query,{headers: { Authorization: sess.get('accessToken')}}).then(response => {
            console.info(this);
            this.doSuccess(response,callback);

        }).catch(function (error) {
            console.info(error);
            $toast.show(error);
        });
    },
    post (query,params,callback) {
        HTTP.post(query,params,{headers: { Authorization: sess.get('accessToken')}}).then(response => {

            this.doSuccess(response,callback);

        }).catch(function (error) {
            console.info(error);
            $toast.show(error);
        });
    },
    put (query,callback) {

    },
    delete (query,callback) {

    },
    doSuccess(response,callback) {
        console.log(response.data);
        console.info('rrrrrr');
//                  $toast.show(response.data);
        if (response.data.bbErrorCode == 10001){//未登录
            $toast.show(response.data.bbErrorMsg);
            setTimeout(() => {
                $router.forward('/pwdLogin');
            }, 1000)
        }else {
            callback(response.data);
        }
    }
}
