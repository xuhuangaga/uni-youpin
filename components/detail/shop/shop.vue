<template>
	<view class="p-10 m-t10 bc-w">
		<view class="flex-j-between">
			<view class="flex-j-center a-center" @click="jump(info.goods.brand.jumpURL)">
				<image :src="info.goods.brand.brandLogo" class="shop-img"></image>
				<view class="m-l10">
					<view class="f-size16">
						{{info.goods.brand.brandName}}
					</view>
					<view class="m-t10 f-c-9">
						{{info.goods.brand.brandSlogan}}
					</view>
				</view>
			</view>
			<view class="flex-j-center a-center" @click="jump(info.goods.brand.jumpURL)">
				<view class="goshop">进入店铺</view>
				<image src="../../../static/static/icon/arrow_right.png" class="del-yjt"></image>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			info: {
				type: Object
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
			},},
		mounted() {
			// console.log(this.info);
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
	.goshop {
		color: #817160;
	}

	.shop-img {
		width: 120rpx;
		height: 120rpx;
		border-radius: 20rpx;
	}
</style>
