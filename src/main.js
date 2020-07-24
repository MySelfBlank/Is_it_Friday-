import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/base.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(VueAxios, axios);
Vue.prototype.myAjax = axios;
Vue.prototype.HOST="/api"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
