<template>
    <div class="page has-navbar" v-nav="{title: '商品', showBackButton: true}">
        <scroll class="page-content"
                :on-refresh="onRefresh"
                :on-infinite="onInfinite">
            <item v-for="(item, index) in items" @click.native="onItemClick(index)" :class="{'item-stable': index % 2 == 0}">
                {{ item }}
            </item>

            <div v-if="infiniteCount >= 2" slot="infinite" class="text-center">没有更多数据</div>
        </scroll>
    </div>

</template>
<script>
    import httpUtil from '../../httpUtil';
    export default {
        data () {
            return {
                items: [],
                infiniteCount: 0
            }
        },
        created () {
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            this.fetchData()
        },
        mounted() {
            for (let i = 1; i <= 20; i++) {
                this.items.push(i + ' - keep walking, be 2 with you.')
            }
            this.top = 1
            this.bottom = 20
        },

        methods: {
            fetchData (done) {
                var pid = $app.$route.params.pid;
                console.log(pid);
                httpUtil.get('products/'+pid, responseData => {
                    if (done){
                        done();
                    }

                });
            },
            onRefresh(done) {
                this.fetchData(done);
            },

            onInfinite(done) {
                setTimeout(() => {
                    if (this.infiniteCount < 2) {
                        let start = this.bottom + 1
                        for (let i = start; i < start + 10; i++) {
                            this.items.push(i + ' - keep walking, be 2 with you.')
                        }
                        this.bottom = this.bottom + 10;

                        this.infiniteCount++
                    }

                    done()
                }, 1500)
            },

            onItemClick(index) {
                console.log(index)
            }
        }

    }
</script>
