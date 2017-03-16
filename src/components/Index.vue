<template>
    <div class="page has-navbar" v-nav="{ title: '消息', showBackButton: false }">
        <div class="page-content text-center">
            <h2 class="padding">loading...</h2>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        created () {
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            $toast.show('loading...');
            $router.forward('/cindex/products')
        }
    }
</script>
