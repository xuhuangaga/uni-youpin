import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		user:uni.getStorageSync('userHistory')
	},
    mutations: {
		//修改用户信息
		setUser(state,data){
			state.user=data
		}
	},
    actions: {}
})
export default store