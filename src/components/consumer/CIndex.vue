<template>
  <div class="page" v-nav="{hideNavbar: true}" v-tabbar="{'menus': menus, menuColor: '#B5B5B5', activeMenuColor: '#44CC00', onMenuClick: menuClicked}">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menus: [
          {
            iconOn: 'ion-ios-home',
            iconOff: 'ion-ios-home-outline',
            text: '首页',
            path: '/cindex/products'
          },
          {
            iconOn: 'ion-ios-pricetags',
            iconOff: 'ion-ios-pricetags-outline',
            text: '心愿单',
            path: '/cindex/wishes'
          },
          {
            iconOn: 'ion-ios-cart',
            iconOff: 'ion-ios-cart-outline',
            text: '订单',
            path: '/cindex/orders',
            badge: '5'
          },
          {
            iconOn: 'ion-ios-person',
            iconOff: 'ion-ios-person-outline',
            text: '消息',
            path: '/cindex/messages'
          }
        ]
      }
    },

    methods: {
      menuClicked(menuIndex) {
        console.log(menuIndex)
      }
    },

    beforeDestroy() {
      $tabbar.$emit('hideTabbar')
    }
  }
</script>
