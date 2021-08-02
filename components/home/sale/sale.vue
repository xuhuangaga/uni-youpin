<template>
	<view class="flex-j-between a-center bc-w p-10 br-20 m-t10">
		<view class="" v-for="(item,index) in saleList" :key="index" class="t-a-center" @click="jump(item.item.jump_url)">
			<view class="f-size20 f-w-bold">{{item.item.title}}</view>
			<view class="f-size12 m-t-b5 subtitle">
				{{item.item.subtitle}}
			</view>
			<image :src="item.item.pic_url1" class="s-img"></image>
		</view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			saleList: {
				type: Array
			}
		},
		data() {
			return {}
		},
		methods: {
			//跳转页面
			jump(url) {
				// #ifdef MP-WEIXIN
				uni.setClipboardData({
					data: url,
					success: function() {}
				});
				// #endif
				// #ifndef MP-WEIXIN
				window.location.href = url
				// #endif
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
	.s-img {
		width: 150rpx;
		height: 150rpx;
	}
</style>
