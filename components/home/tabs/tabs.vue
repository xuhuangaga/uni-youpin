<template>
	<view class="bc-w tabs" id="tabs">
		<u-sticky :offset-top="offsetTop" z-index="1000">
			<scroll-view scroll-x="true" :scroll-with-animation="true" :scroll-left="scrollLeft" class="bc-w">
				<view class="flex-a-center wbfb bc-w">
					<view v-for="(item,index) in list" :key="index" @click="change(index)" class="tab p-10 tab-item">
						<view class="flex-a-center">
							<view>
								<view class="tab-title t-a-center f-size14" :class="{'act-title':index===current}">
									<text v-if="index===0">{{item.tabConfig.title}}</text>
									<text v-else>{{item.title}}</text>
								</view>
								<view class="tab-sub t-a-center m-t-b5 f-size12" :class="{'act-subtitle':index===current}">
									{{item.tabConfig.subtitle}}
								</view>
								<view class="flex-j-center a-center">
									<view class="active bc-w" :class="{'active-i':index===current}">
									</view>
								</view>
							</view>
							<view class="m-l10 sx">
								|
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</u-sticky>
		<view class="tab-con p-10">
			<scroll-view scroll-y="true" class="h-vh" @scrolltolower="lowerBottom">
				<view class="flex-a-center a-center f-wrap">
					<view v-if="item.data.goods" class="good-dv bc-w" v-for="(item,index) in goods" :key="index" @click="jump(item.data.goods.gid)">
						<view class="t-a-center">
							<image :src="item.data.goods.picUrl" class="good-img"></image>
						</view>
						<view class="f-size14">
							{{item.data.goods.name}}
						</view>
						<view class="f-c-9 f-size12 m-t-b10 sl-one summary">
							{{item.data.goods.summary}}
						</view>
						<view class="flex-a-center">
							<view class="price f-size14 f-w-bold">
								￥{{item.data.goods.priceMin/100}}
							</view>
							<view class="line f-size14 m-l10">
								￥{{item.data.goods.marketPrice/100}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			list: {
				type: Array
			}
		},
		data() {
			return {
				current: 0,
				goods: [],
				//当前页码
				page: 1,
				scrollLeft: 0,
				width: 0,
				offsetTop: -100
			}
		},
		methods: {
				//跳转到详情
				jump(gid) {
					this.$utils.jumpDetail(gid)
				},
			//点击选项卡
			change(index) {
				//向左滚动
				if (index > this.current) {
					this.scrollLeft = index * 60
				} else {
					//向右滚动
					this.scrollLeft = index * 90 - 90
				}
				this.current = index;
				this.goods = []
				this.getData()
			},
			//获取数据
			getData() {
				this.$api.home.feeds(this.page, this.list[this.current].query_id)
					.then(res => {
						 // console.log(res)
						this.goods = this.goods.concat(res.data.feeds.items)
					})
					.catch(err => {
						console.log(err)
					})
			},
			//触底加载
			lowerBottom() {
				this.page++
				this.getData()
			},
		},
		mounted() {
			this.getData()
			// #ifdef MP-WEIXIN
			this.offsetTop = 120
			// #endif
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
	.sx {
		color: #eee;
	}
	.tab {
		// width: 350rpx;

		.tab-title {
			font-size: 16px;
			color: #333;
		}

		.tab-sub {
			color: #999;
			width: 140rpx;
		}

		.act-title {
			color: #C30D23;
			font-weight: bold;
			font-size: 20px;
		}

		.act-subtitle {
			color: #C30D23;
		}

		.active {
			width: 60rpx;
			height: 6rpx;
			border-radius: 50rpx;
		}

		.active-i {
			background: #C30D23;
		}
	}

	.tab-con {
		.good-dv {
			width: 50%;

			.good-img {
				width: 300rpx !important;
				height: 300rpx !important;
			}

			.summary {
				// width: 80%;
			}
		}
	}
</style>
