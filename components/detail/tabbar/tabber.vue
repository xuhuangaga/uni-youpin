<template>
	<view class="flex-j-around a-center del-tabbar p-fixed p-l-r5 p-tb10 bc-w">
		<view @click="jump('/pages/index/index')">
			<view class="t-a-center">
				<u-icon name="home" size="50"></u-icon>
			</view>
			<view class="t-a-center">
				首页
			</view>
		</view>
		<view class="">
			<view class="t-a-center">
				<u-icon name="chat" size="50"></u-icon>
			</view>
			<view class="t-a-center">
				客服
			</view>
		</view>
		<view @click="jump('/pages/cart/cart')" class="p-relative">
			<view class="t-a-center">
				<u-icon name="car" size="50"></u-icon>
			</view>
			<view class="t-a-center">
				购物车
			</view>
			<view class="tags f-c-w t-a-center">
				{{num}}
			</view>
		</view>
		<view class="flex-j-center">
			<view class="add flex-j-center a-center" @click="add">
				<view class="f-c-w">
					加入购物车
				</view>
			</view>
			<view class="buy flex-j-center a-center" @click="buy">
				<view class="f-c-w">
					立即购买
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			//购物车数量
			num: {
				type: Number
			}
		},
		data() {
			return {}
		},
		methods: {
			//跳转页面
			jump(item) {
				uni.switchTab({
					url: item
				})
			},
			//点击加入购物车
			add() {
				this.$emit('sure', false)
			},
			//点击立即购买
			buy() {
				this.$emit('sure', true)
			}
		},
		mounted() {},
		onLoad() {},
		onShow() {},
		filters: {},
		computed: {},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.del-tabbar {
		bottom: 0;
		left: 0;
		right: 0;
	}

	.add {
		background: #ffa50e;
		border-top-left-radius: 30rpx;
		border-bottom-left-radius: 30rpx;
	}

	.buy {
		background: #ff4429;
		border-top-right-radius: 30rpx;
		border-bottom-right-radius: 30rpx;
	}

	.add,
	.buy {
		width: 200rpx;
		height: 80rpx;
	}

	.tags {
		background: red;
		width: 50rpx;
		height: 50rpx;
		line-height: 50rpx;
		border-radius: 100%;
		position: absolute;
		right: -30rpx;
		top: -20rpx;
	}
</style>
