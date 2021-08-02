<template>
	<view class="p-10">
		<view v-if="flag" class="flex-j-between a-center">
			<view class="flex-a-center">
				<!-- #ifdef MP-WEIXIN -->
				<image class="userinfo-avatar" :src="user.avatarUrl"></image>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<image class="userinfo-avatar" src="../../../static/static/user-pic.png"></image>
				<!-- #endif -->
				<view class="m-l10">
					<text class="userinfo-nickname" v-if="user">{{user.nickName}}</text>
				</view>
			</view>
			<view class="signout f-c-w" @click="signout">
				退出登录
			</view>
		</view>
		<view v-else>
			<!-- #ifdef MP-WEIXIN -->
			<button v-if="canIUseGetUserProfile" @tap="getUserProfile" class="f-c-w please-log"> 请登录 </button>
			<button v-else-if="canIUse" class="please-log f-c-w" open-type="getUserInfo" @getuserinfo="getUserInfo"> 请登录
			</button>
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<view else class="p-10 please-log f-c-w t-a-center" @click="show=true">
				请登录
			</view>
			<!-- #endif -->
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
				flag: true,
				user: null,
				//登录弹窗是否显示
				show: false,
				canIUse: wx.canIUse('button.open-type.getUserInfo'),
				canIUseGetUserProfile: false,
				canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse(
					'open-data.type.userNickName') // 如需尝试获取用户信息可改为false
			}
		},
		methods: {
			//h5登录成功 login子组件分发事件
			loginOk(show,info) {
				this.flag = true
				this.user = info
				this.show = show
			},
			//点击退出登录
			signout() {
				let that = this
				uni.showModal({
					title: '确认退出本次登录?',
					success(res) {
						if (res.confirm) {
							that.$utils.removeHistory('user')
							that.$store.commit('setUser', null)
							that.flag = false
						}
					}
				})
			},
			// 事件处理函数
			bindViewTap() {
				wx.navigateTo({
					url: '../logs/logs'
				})
			},
			getUserProfile(e) {
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
						this.flag = true
						this.user = res.userInfo
					}
				})
			},
			getUserInfo(e) {
				// 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
				//存本地 和 vuex
				this.$utils.saveHistory({
					key: 'user',
					data: e.detail.userInfo,
					item: 'nickName'
				})
				this.$store.commit('setUser', e.detail.userInfo)
				this.flag = true
				this.user = e.detail.userInfo
			}
		},
		mounted() {
			if (wx.getUserProfile) this.canIUseGetUserProfile = true
			//获取登录的用户信息
			let temp = this.$store.state.user
			if (!temp || temp.length===0) {
				this.user = null
				this.flag = false
			} else {
				this.user = temp[0]
				this.flag = true
			}
		},
		onLoad() {},
		onShow() {},
		filters: {},
		computed: {},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.please-log {
		background: #ebc875;
		border-radius: 10rpx;
		height: 80rpx;
	}

	.userinfo-avatar {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
	}

	.signout {
		background: #ebc875;
		padding: 10rpx 20rpx;
	}
</style>
