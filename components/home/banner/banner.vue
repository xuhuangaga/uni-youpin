<template>
	<view class="p-10 swiper">
		<view>
			<u-swiper :list="bannerList" @click="click"></u-swiper>
		</view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			bannerList:{
				type:Array
			}
		},
		data() {
			return {
			}
		},
		methods: {
			//点击轮播图
			click(e){
				let url = this.bannerList[e].jump_url
			//跳转页面
				// #ifdef MP-WEIXIN
				uni.setClipboardData({
					data: url,
					success: function() {}
				});
				// #endif
				// #ifndef MP-WEIXIN
				window.location.href = url
				// #endif
			}
		},
		mounted() {
			// console.log(this.bannerList);
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
	.swiper {
		/* #ifdef MP-WEIXIN */
		padding-top: 140rpx;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		padding-top: 110rpx;
		/* #endif */
		background: #ff8569;
		height:260rpx;
	}
</style>
