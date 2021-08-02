<template>
	<view class="flex-j-between a-center f-wrap p-10 act">
		<view v-for="(item,index) in activityList" :key="index" class="m-b10 act-dv">
			<view @click="jump(item.item.jump_url)">
				<image :src="item.item.pic_url" class="pic"></image>
			</view>
			<view class="f-size12 title t-a-center">{{item.item.title}}</view>
		</view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			activityList: {
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
	.act {
		/* #ifdef MP-WEIXIN */
		margin-top: 140rpx;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		margin-top: 120rpx;
		/* #endif */
	}

	.title {
		color: #6b5e5b;
	}

	.pic {
		width: 120rpx;
		height: 120rpx;
	}
	.act-dv {
		width: 20%;
	}
</style>
