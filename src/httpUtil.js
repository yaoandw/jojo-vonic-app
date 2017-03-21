/**
 * Created by yaoandw on 2017/3/21.
 */

import {HTTP} from './http-common';

export default {
    get (query,callback) {
        HTTP.get(query).then(function (response) {
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

        }).catch(function (error) {
            console.info(error);
            $toast.show(error);
        });
    },
    post (query,params,callback) {
        HTTP.post(query,params).then(function (response) {
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

        }).catch(function (error) {
            console.info(error);
            $toast.show(error);
        });
    },
    put (query,callback) {

    },
    delete (query,callback) {

    }
}
