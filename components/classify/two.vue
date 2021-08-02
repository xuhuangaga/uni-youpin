<template>
	<view class="m-l10" style="z-index: -1;">
		<scroll-view scroll-y="true" class="h-vh" @scrolltolower="scrolltolower">
			<!-- banner -->
			<image :src="list.banner" class="banner wbfb" @click="jumpBan"></image>
			<view v-for="(item,index) in list.children" :key="index">
				<view class="p-10 f-w-bold f-size16">{{item.name}}</view>
				<view class="flex-a-center f-wrap p-relative">
					<view v-for="(item1,index1) in item.children" :key="index1" class="m-b10" v-if="item1.smallImgCard" @click="jump(item1.smallImgCard.name)">
						<view class="p-r10">
							<image :src="item1.smallImgCard.img" class="cla-img"></image>
						</view>
						<view class="f-c-9 sl-one cla-name t-a-center">
							{{item1.smallImgCard.name}}
						</view>
						<image :src="item1.smallImgCard.badge" class="brage"></image>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			list: {
				type: Object
			}
		},
		data() {
			return {}
		},
		methods: {
			//点击分类跳转到商品列表
			jump(name){
				//跳转到产品列表
				uni.navigateTo({
					url:`/pages/productlist/productlist?value=${name}`
				})
			},
			//触底
			scrolltolower(){
				this.$emit('lower')
			},
			//banner跳转
			jumpBan(){
				// #ifdef MP-WEIXIN
				uni.setClipboardData({
					data: this.list.bannerUrl,
					success: function() {}
				});
				// #endif
				// #ifndef MP-WEIXIN
				window.location.href = this.list.bannerUrl
				// #endif
			}
		},
		mounted() {
			// console.log(this.list);
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
	.banner {
		height: 150rpx;
	}

	.cla-img {
		width: 150rpx;
		height: 150rpx;
	}

	.brage {
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		top: 0;
		left: 0;
	}
	.cla-name {
		width: 150rpx;
	}
</style>
