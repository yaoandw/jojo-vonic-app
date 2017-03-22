<template>
    <div class="page has-navbar" v-nav="{ title: '消息', showBackButton: false }">
        <div class="page-content text-center">
            <h2 class="padding">Messages</h2>
        </div>
        <div class="padding">
            <button class="button button-positive button-block" @click="doLogout()">登 出</button>
        </div>
    </div>
</template>

<script>
    import httpUtil from '../../httpUtil';
    import sess from '../../sess';
    export default{
        data() {
            return {

            }
        },
        methods: {
            doLogout() {

                httpUtil.post('logout',{},function (responseData) {
                    $toast.show('登出成功');
                    sess.remove('accessToken');
                });
            }
        }
    }
</script>