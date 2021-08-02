<template>
	<view>
		<u-popup v-model="show" mode="center" width="600" height="400" class="p-20">
			<u-form :model="form" label-width="120" class="p-20">
				<u-form-item label="用户名">
					<u-input v-model="form.name" placeholder="请输入用户名" />
				</u-form-item>
				<u-form-item label="密码">
					<u-input type="password" v-model="form.password" placeholder="请输入密码" />
				</u-form-item>
			</u-form>
			<view class="p-l-r20 flex-j-around a-center">
				<u-button @click="submit" type="success">登录</u-button>
				<u-button @click="cancle" type="success">取消</u-button>
			</view>
		</u-popup>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				form: {
					name: '',
					password: ''
				},
			}
		},
		methods: {
			//取消登录
			cancle(){
				this.$emit('loginOk', false)
			},
			//h5页面点击立即登录
			submit() {
				if (!this.form.name.trim() || !this.form.password.trim()) {
					uni.showToast({
						title: '用户名和密码都不能为空',
						icon:'none'
					})
				} else {
					uni.showToast({
						title: '登录成功',
						icon:'none'
					})
					//保存登录的用户信息
					let info = {
						city: "Chengdu",
						country: "China",
						gender: 2,
						language: "zh_CN",
						nickName: this.form.name,
						province: "Sichuan"
					}
					//存本地 和 vuex
					this.$utils.saveHistory({
						key: 'user',
						data: info,
						item: 'nickName'
					})
					this.$store.commit('setUser', info)
					// console.log(info);
					this.$emit('loginOk', false,info)
				}
			},
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
