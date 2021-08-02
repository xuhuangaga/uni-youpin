<template>
	<view class="br-20 bc-w p-b10">
		<view class="p-10 flex-j-between wtzc-v" :style="{'background-image':'url('+crowBgc+')'}">
			<view class="f-size20 f-w-bold">
				微淘众筹
			</view>
			<view class="flex-a-center">
				<view class="f-size12 more">
					更多
				</view>
				<image src="../../../static/static/icon/arrow_right.png" class="yjt m-lr5"></image>
			</view>
		</view>
		<view class="p-10 flex-j-between" @click="jump(crowdList[0].item.jump_url)">
			<view class="flex-1">
				<view class="f-size20">
					{{crowdList[0].item.name}}
				</view>
				<view class="f-size12 summary m-t-b10 sl-one p-l-r5 subtitle">
					{{crowdList[0].item.summary}}
				</view>
				<view class="price f-size14 f-w-bold">
					￥{{(crowdList[0].item.market_price)/100}}
				</view>
			</view>
			<view class="flex-1">
				<image :src="crowdList[0].item.pic_url" class="wbfb h-img"></image>
			</view>
		</view>
		<view class="flex-a-center p-l-r10">
			<view :style="{'background-color':crowdList[0].item.tags[0].color}"
				class="tags f-c-w flex-j-center a-center">
				{{crowdList[0].item.tags[0].name}}
			</view>
			<view class="f-size12 m-lr5">
				<text class="m-lr5">支持人数</text>
				<text class="f-o"> {{crowdList[0].item.saled_count}} </text>
				<text class="m-lr5">/完成度</text>
				<text class="f-o"> {{crowdList[0].item.progress}}% </text>
			</view>
		</view>
		<view class="p-10 p-t0 m-t-b5">
			<view class="ht"></view>
		</view>
		<view class="flex-j-between p-10">
			<view v-for="(item,index) in crowdList" :key="index" @click="jump(item.item.jump_url)">
				<template v-if="index>0">
					<view class="f-size20">
						{{item.item.name}}
					</view>
					<view class="flex-a-center">
						<view class="flex-1">
							<view class="price f-size14 f-w-bold">
								￥{{(item.item.market_price)/100}}
							</view>
						</view>
						<view class="flex-1">
							<image :src="item.item.pic_url" class="lr-img"></image>
						</view>
					</view>
					<view class="flex-a-center">
						<view :style="{'background-color':item.item.tags[0].color}"
							class="tags f-c-w flex-j-center a-center">
							{{item.item.tags[0].name}}
						</view>
						<view class="f-size12 m-lr5">
							<text class="m-lr5">支持人数</text>
							<text class="f-o"> {{item.item.saled_count}} </text>
						</view>
					</view>
					<view class="p-t0 m-t-b5">
						<view class="ht"></view>
					</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		props: {
			crowdList: {
				type: Array
			},
			crowBgc: {
				type: String
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
			// console.log(this.crowdList);
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
	.wtzc-v {
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		background-size: 100% 100%;

	}

	.summary {
		width: 90%;
	}

	.hot {
		width: 50rpx;
		height: 50rpx;
	}

	.f-o {
		color: rgb(238, 136, 66)
	}

	.ht {
		background-image: linear-gradient(to right, rgb(255, 200, 102), rgb(255, 88, 27));
		height: 8rpx;
		border-radius: 40rpx;
	}

	.h-img {
		height: 264rpx;
	}

	.lr-img {
		width: 150rpx;
		height: 150rpx;
	}

	.tags {
		width: 50rpx;
		height: 50rpx;
		border-radius: 10rpx;
	}
</style>
