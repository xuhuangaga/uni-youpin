<template>
	<view class="flex-j-center a-center bc-w no-s-dv">
		<view class="t-a-center">
			<view class="p-10 f-size16">
				您还没有登录哦~
			</view>
			<view class="p-10 gologin f-c-w" @click="login">
				立即登录
			</view>
		</view>
		<login :show="show" @loginOk="loginOk"></login>
	</view>

</template>

<script>
	import login from '../../h5login/h5login.vue'
	export default {
		components: {
			login,
		},
		props: {},
		data() {
			return {
				//登录弹出层是否显示
				show: false,
				info:{}
			}
		},
		methods: {
			//登录成功子组件login分发事件
			loginOk(show,info) {
				this.show = show
				this.info=info
				//登录成功分发事件 传用户信息过去
				if(show){
					this.$emit('loginOk',info)
				}
			},
			//点击立即登录
			login() {
				//h5登录
				// #ifndef MP-WEIXIN
				this.show = true
				// #endif
				// 小程序登录
				// #ifdef MP-WEIXIN
				// 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
				wx.getUserProfile({
					desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
					success: (res) => {
						//存本地 和 vuex
						this.$utils.saveHistory({
							key: 'user',
							data: res.userInfo,
							item: 'nickName'
						})
						this.$store.commit('setUser', res.userInfo)
						uni.showToast({
							title: '登录成功'
						})
					}
				})
				// #endif
			}
		},
		mounted() {

		},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {},
		watch: {},
	}
</script>

<style scoped lang="scss">

</style>
