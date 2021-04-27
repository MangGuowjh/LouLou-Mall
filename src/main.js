import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import { Button, Form, Field, Toast, Icon, Grid, GridItem, AddressList, 
        AddressEdit, Swipe, SwipeItem, SwipeCell, PullRefresh, List, Tab, 
        Tabs, Image } from 'vant'
import md5 from 'js-md5'

Vue.use(Form).use(Field).use(Toast).use(Button).use(Icon).use(GridItem)
  .use(Grid).use(AddressList).use(AddressEdit).use(Swipe).use(SwipeItem)
  .use(SwipeCell).use(PullRefresh).use(List).use(Tab).use(Tabs).use(Image)
  
Vue.prototype.$md5 = md5

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
