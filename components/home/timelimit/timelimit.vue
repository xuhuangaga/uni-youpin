<template>
	<view class="br-20 bc-w m-t10">
		<view class="f-size20 f-w-bold">
			<view class="p-10 flex-j-between hot-v">
				<view class="flex-a-center">
					<view class="f-size20 f-w-bold">
						限时购
					</view>
					<view class="f-size12 m-lr10 more">
						{{time}}点场
					</view>
					<view class="flex-a-center f-c-w f-size14">
					</view>
					<u-count-down class="djs" bg-color="#d79b3c" color="#ffffff" font-size="25" :timestamp="countdown"
						:show-days="false"></u-count-down>
				</view>
				<view class="flex-a-center">
					<view class="f-size12 more">
						更多
					</view>
					<image src="../../../static/static/icon/arrow_right.png" class="yjt m-lr5"></image>
				</view>
			</view>
		</view>
		<scroll-view scroll-x="true" class=" m-r10">
			<view class="flex-a-center p-10">
				<view v-for="(item,index) in limitList" :key="index" class="m-r10 flex-1"
					:class="{'p-r10':index===limitList.length-1}" @click="jump(item.item.jump_url)">
					<view class="flex-j-center bc-w">
						<image :src="item.item.imgs.img_square" class="t-img"></image>
					</view>
					<view class="flex-j-center a-center m-t10">
						<view class="price f-w-bold">
							￥{{item.item.flash_price/100}}
						</view>
						<view class="f-c-6 m-l10 line">
							￥{{item.item.market_price/100}}
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>

</template>

<script>
	import dayjs from 'dayjs'
	export default {
		components: {},
		props: {
			limitList: {
				type: Array
			},
			startTime: {
				type: Number
			}
		},
		data() {
			return {
				//几点场
				time: 0,
				//倒计时
				countdown: 0
			}
		},
		methods: {
			//跳转到详情
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
			// console.log(this.limitList);
			// console.log(dayjs(this.startTime))
			this.time = dayjs(this.startTime).hour()
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
	$border-radius: 20rpx;

	.t-img {
		width: 220rpx;
		height: 220rpx;
		border-radius: $border-radius;
	}

	.f-c {
		color: #d79b3c;
		margin: 0rpx 4rpx;
	}
</style>
