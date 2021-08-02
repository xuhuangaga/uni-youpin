<template>
	<view class="br-20 bc-w m-t10">
		<view class="f-size20 f-w-bold">
			<view class="p-10 flex-j-between hot-v">
				<view class="flex-a-center">
					<view class="f-size20 f-w-bold">
						{{title}}
					</view>
					<view class="f-size12 m-l10 more">
						{{subtitle}}
					</view>
				</view>
				<view class="flex-a-center">
					<view class="f-size12 more">
						更多
					</view>
					<image src="../../../static/static/icon/arrow_right.png" class="yjt m-lr5"></image>
				</view>
			</view>
		</view>
		<scroll-view scroll-x="true">
			<view class="flex-a-center p-10">
				<view v-for="(item,index) in hotList" :key="index" class="m-r10 flex-1 h-dv p-relative"
					:class="{'m-r10':index===hotList.length-1}" @click="jump(item.item.gid)">
					<view class="flex-j-center bc-w">
						<image :src="item.item.pic_url" class="h-img"></image>
					</view>
					<view class="f-c-w f-size12 h-title sl-one">
						{{item.item.recommend}}
					</view>
					<view class="t-a-center p-10 h-name f-size12">
						{{item.item.name}}
					</view>
					<view class="f-size20 f-w-bold" :class="index>2?'tag1':'tag'">
						{{index+1}}
					</view>
				</view>
				<view class="bc-w hbfb zw">

				</view>
			</view>
		</scroll-view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			hotList: {
				type: Array
			},
			title: {
				type: String
			},
			subtitle: {
				type: String
			}
		},
		data() {
			return {}
		},
		methods: {
			//跳转到详情
			jump(gid) {
				this.$utils.jumpDetail(gid)
			},
		},
		mounted() {
			// console.log(this.hotList);
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
	.h-name {
		color: #703c00;
	}

	.h-img {
		width: 220rpx;
		height: 220rpx;
	}

	.h-title {
		background: #ff5711;
		padding: 8rpx;
	}

	.h-dv {
		background: url(../../../static/static/LeaderboardBg.png);
		height: 400rpx;
		width: 216rpx;
		background-size: 220rpx 400rpx;
	}

	.tag,
	.tag1 {
		position: absolute;
		top: 0;
		left: 0;
		width: 80rpx;
		height: 80rpx;
		// background: url();
	}

	.tag {
		color: #b04a0a;
	}

	.tag1 {
		color: #ccc;
	}

	.zw {
		border: 1px solid #fff;
	}
</style>
