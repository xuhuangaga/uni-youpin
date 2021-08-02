import Vue from 'vue'
import App from './App'
import api from './http/api.js'
import uView from "uview-ui"
//引入vuex
import store from './store'
import utils from './utils/util.js'
import top from './components/top/top.vue';

Vue.use(uView);
Vue.config.productionTip = false
//全局挂载
Vue.prototype.$api = api
Vue.prototype.$store = store
Vue.prototype.$utils = utils
//注册全局组件
Vue.component('top',top)

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
