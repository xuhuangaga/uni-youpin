<template>
	<view>
		<view class="flex-j-between a-center" @click="jump('/pages/orders/orders?index=0')">
			<view class="f-w-bold">
				我的订单
			</view>
			<view class="f-size12 f-c-c">
				全部订单
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="flex-j-around a-center m-t10">
			<view class="t-a-center" v-for="(item,index) in list" :key="index" @click="jump(item.jumpUrl)">
				<image class="o-img" :src="item.url"></image>
				<view>
					{{item.name}}
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
				list: [{
						name: '全部订单',
						url: '/static/static/user/daifukuan.png',
						jumpUrl: '/pages/orders/orders?index=0'
					},
					{
						name: '待付款',
						url: '/static/static/user/daishouhuo.png',
						jumpUrl: '/pages/orders/orders?index=1'
					},
					{
						name: '待收货',
						url: '/static/static/user/daipingjia.png',
						jumpUrl: '/pages/orders/orders?index=2'
					},
					{
						name: '退款/售后',
						url: '/static/static/user/shouhou.png',
						jumpUrl: '/pages/orders/orders?index=4'
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
		},
		mounted() {

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
