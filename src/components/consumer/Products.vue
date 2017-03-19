<template>
  <div class="page has-navbar" v-nav="{ title: '首页' }">
    <div class="page-content">
      <cells :items="post" :on-cell-click="onCellClick" col="2"></cells>
    </div>
  </div>
</template>
<script>
//    import axios from 'axios';
      import {HTTP} from '../../http-common';
    export default {
    data () {
      return {
          msg: 'Hello! Vonic.',
          post:[]
      }
    },
      created () {
          // 组件创建完后获取数据，
          // 此时 data 已经被 observed 了
          this.fetchData()
      },
      watch: {
          // 如果路由有变化，会再次执行该方法
          '$route': 'fetchData'
      },
      methods: {
          fetchData () {
              self.vueObj = this;
              HTTP.get('populars').then(function (response) {
                  console.log(response.data);
//                  $toast.show(response.data);
                  var items = response.data.items;

                  self.vueObj.post = self.vueObj.processItems(items);
              })
                  .catch(function (error) {
                      $toast.show(error);
                  });
          },
          onCellClick(cellIndex) {
              console.log('cell ' + cellIndex + ' clicked');
          },

          getIcon(product) {
              return '<div class="entrance assertive"><div class="item-image"><img src="'+product.cover+'"></img></div><span>'+product.name+'</span><br><span>'+product.description+'</span></div>'
          },

          processItems(items) {
              console.log('gghghghgh');
              let aitems = [];
              if (items == null){
                  return aitems;
              }
              for (let i = 0; i < items.length; i++) {
                  var item = items[i];
                  aitems.push(this.getIcon(item.products));
              }
              return aitems;
          }
      }
  }
</script>
<style>
  h2 {
    font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
    color: #888;
  }

  .page.has-navbar .page-content {
    padding-top: 100px;
  }
</style>
