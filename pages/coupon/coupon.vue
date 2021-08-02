<template>
	<view class="p-10">
		<view>
			<top :isNavbar="true" :isBack="true" title="优惠券" class="z" bgc="#fff"></top>
			<u-tabs :list="tab" active-color="#c1a16e" :is-scroll="false" :current="current" @change="change"></u-tabs>
		</view>
		<view class="m-t10">
			<view v-if="list.length >0">
				<view class="" v-for="(item,index) in list" :key="index" class="m-b20">
					<view class="flex-a-center p-relative t-a-center">
						<view class="l-img-dv">
							<image class="l-img" src="../../static/static/usable_left.png" v-if="current===0"></image>
							<image class="l-img" src="../../static/static/disabled_left.png" v-else></image>
						</view>
						<view class=" l-con-dv flex-j-between">
							<view class="f-c-w cou-left">
								<view class="f-size20 f-w-bold">
									￥{{(item.value/100).toFixed(2)}}
								</view>
								<view class="m-t20">
									买满{{item.bottomPrice/100}}可用
								</view>
							</view>
							<view class="cou-right m-l10 f-size12">
								<view class="">
									{{item.couponDesc.nameDesc}}
								</view>
								<view class="flex-a-center m-t20 p-t20">
									<view class="">
										有效期至 {{item.time}}
									</view>
									<view class="gouse f-c-w" v-if="current===0">
										去使用
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="f-size12 f-c-c m-t-b10">
						{{item.couponDesc.scopeDesc}}
					</view>
				</view>
			</view>
			<view v-else class="flex-j-center a-center">
				<view class="p-20">
					暂无数据
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import dayjs from 'dayjs'
	export default {
		components: {},
		props: {},
		data() {
			return {
				current: 0,
				tab: [{
					name: '未使用'
				}, {
					name: '不可用'
				}],
				//优惠券数据
				list: []
			}
		},
		methods: {
			change(index) {
				this.current = index;
				this.getData()
			},
			//获取数据
			getData() {
				this.$api.user.coupon(this.current)
					.then(res => {
						// console.log(res)
						this.list = res.data.couponInfos
						if (this.list.length > 0) {
							this.list.map(item => {
								this.$set(item, 'time', dayjs(item.endTime).format('YYYY-MM-DD/hh:ss'))
							})
						}
					})
					.catch(err => {
						console.log(err);
					})
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
	.l-img {
		width: 260rpx !important;
		height: 260rpx !important;
		;
	}

	.l-con-dv {
		position: absolute;
		// left: 80rpx;
	}
	.gouse {
		background: #ee8849;
		padding: 10rpx 20rpx;
		border-radius: 20rpx;
	}
	.cou-left {
		width: 260rpx;
	}
	.cou-right {
		text-align: left;
	}
</style>
