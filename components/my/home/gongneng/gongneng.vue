<template>
	<view class="m-t20 p-t20">
		<view class="f-w-bold">
			我的功能
		</view>
		<view class="flex-j-around a-center m-t10">
			<view class="t-a-center" v-for="(item,index) in list" :key="index" @click="jump(item.jumpUrl)">
				<image class="o-img" :src="item.url"></image>
				<view>
					<text v-if="index===0">{{count}}</text>{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		props: {},
		data() {
			return {
				//可用优惠券数量
				count: 0,
				list: [{
						name: '张优惠券',
						url: '/static/static/user/youhuiquan.png',
						jumpUrl: '/pages/coupon/coupon'
					},
					{
						name: '我的红包',
						url: '/static/static/user/shoucang.png',
						jumpUrl: ''
					},
					{
						name: '我的收藏',
						url: '/static/static/user/shoucang.png',
						jumpUrl: '/pages/collection/collection'
					},
					{
						name: '浏览记录',
						url: '/static/static/user/liulanjilu.png',
						jumpUrl: '/pages/footprint/footprint'
					}
				]
			}
		},
		methods: {
			//跳转到详情
			jump(url) {
				if (this.user)
					uni.navigateTo({
						url: url
					})
				else
					uni.showToast({
						title: '请先登录',
						icon:'none'
					})
			},
			//获取可用优惠券数量
			getCount() {
				this.$api.user.couponCount()
					.then(res => {
						// console.log(res);
						this.count = res.data.count
					})
					.catch(err => {
						console.log(err);
					})
			}
		},
		mounted() {
			this.getCount()
		},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {
			user() {
				let user = this.$store.state.user
				return user ? user[0] : null
			}
		},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.o-img {
		width: 100rpx;
		height: 100rpx;
	}
</style>
