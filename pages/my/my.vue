<template>
	<view class="f-c-9 my-box">
		<top :isNavbar="true" style="position: absolute;" :isBack="false" title="我的" color="#ffffff"></top>
		<view class="my-top-bg">
			<image src="../../static/static/top-bg.png" class="wbfb hbfb"></image>
		</view>
		<view class="my-con-box z">
			<user class="z"></user>
			<view class="bc-w br-20 z m-lr10 my-con-o-dv">
				<view class="p-10">
					<order></order>
					<gn></gn>
					<tool></tool>
					<view class="f-w-bold">
						专属推荐
					</view>
					<recomment></recomment>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import order from '../../components/my/home/order/order.vue'
	import gn from '../../components/my/home/gongneng/gongneng.vue'
	import tool from '../../components/my/home/tool/tool.vue'
	import recomment from '../../components/my/recomment/recomment.vue'
	import user from '../../components/my/user/user.vue'
	export default {
		components: {
			order,
			gn,
			recomment,
			tool,
			user
		},
		props: {},
		data() {
			return {}
		},
		methods: {
			//获取数据
			getData() {

			}
		},
		mounted() {
			this.getData()
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
	.my-top-bg {
		width: 750rpx;
		/* #ifdef MP-WEIXIN */
		height: 400rpx;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		height: 350rpx;
		/* #endif */
		position: absolute;
		z-index: -1;
	}

	.my-top-dv {
		width: 750rpx;
		height: 400rpx;
		z-index: -1;
		margin-top: -120rpx;
	}

	.my-con-box {
		/* #ifdef MP-WEIXIN */
		padding-top: 140rpx;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		padding-top: 100rpx;
		/* #endif */
	}

	.my-con-o-dv {
		/* #ifdef MP-WEIXIN */
		margin-top: -40rpx;
		/* #endif */
	}
</style>
