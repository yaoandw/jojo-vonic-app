<template>
    <div class="page" v-nav="{title: '登录', showBackButton: true}">

        <div class="page-content padding-top">

            <!-- type: text, password, email, tel -->
            <div class="text-center">
                <h2 class="padding">Jojo</h2>
            </div>
            <von-input type="tel" v-model.trim="username" placeholder="手机"></von-input>
            <von-input type="password" v-model="password" placeholder="密码" style="margin-bottom: 5px;"></von-input>

            <div class="padding">
                <button class="button button-positive button-block" @click="doLogin()">登 录</button>
            </div>

        </div>
    </div>
</template>
<script>
    import httpUtil from '../../httpUtil';
    import sess from '../../sess';
    export default{
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            doLogin() {
                if (this.username.length <= 0){
                    $toast.show('请输入手机号');
                    return;
                }
                if (this.password.length <= 0){
                    $toast.show('请输入密码');
                    return;
                }
                httpUtil.post('login/auth',{"mobile":this.username,"password":this.password},function (responseData) {
                    $toast.show('登录成功');
                    console.info('accessToken: '+responseData.accessToken);
                    sess.set('accessToken',responseData.accessToken);
                    console.info(sess.get('accessToken'));
                    setTimeout(() => {
//                        window.history.back()
                        $router.go(-1);
                    }, 1000)
                });
            },
            setCookie(){
                httpUtil.get('test/test/setCookieTest',function (responseData) {

                });
            },
            getCookie(){
                httpUtil.get('test/test/getCookieTest',function (responseData) {

                });
            }
        }
    }
</script>
