<template>
	<view class="m-t10 bc-e">
		<view v-if="list.length>0">
			<view class="p-10">
				<view v-for="(item,index) in list" :key="index" class=" bc-w br-20 m-b10">
					<view class="flex-j-between a-center p-10">
						<view class="">
							支付时间：{{item.payTime}}
						</view>
						<view class="f-c-9 f-size12">
							交易成功
						</view>
					</view>
					<view v-for="(item1,index1) in item.data" :key="index1" @click="jump(item1.gid)">
						<view class="m-b20 flex-j-between">
							<u-image :src="item1.goods.goodsInfo.img800s" width="250rpx" height="250rpx"></u-image>
							<view class="flex-j-center a-center">
								<view class="sl-two ser-gname m-t-b10">
									{{item1.goods.goodsInfo.name}}
								</view>
							</view>

							<view class="flex-a-center">
								<view class="">
									<view class="f-c-9 m-r10">
										￥{{item1.goods.goodsInfo.priceMin/100}}
									</view>
									<view class="t-a-right m-r10">
										x{{item1.number}}
									</view>
								</view>
							</view>
						</view>
						<view class="m-t10 p-10 t-a-right gg-dv">
							<text v-for="(item2,index2) in item1.guige" :key="index2">{{item2.name}}
								<text v-if="index2<item1.guige.length-1" class="m-lr5">+</text></text>
						</view>
					</view>
					<view class="p-10 t-a-right">
						订单总金额：￥{{item.totalMoney/100}}元
					</view>
				</view>
			</view>
		</view>
		<view v-else class="flex-j-center a-center p-tb20">
			<view class="">
				<image src="/static/static/orders.png" class="no-order"></image>
				<view class="m-t10 f-c-9">
					目前没有订单哦~
				</view>
			</view>
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
			return {}
		},
		methods: {
			//跳转到详情
			jump(gid) {
				this.$utils.jumpDetail(gid)
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
	.gg-dv {
		margin-top: -60rpx;
	}

	.ser-gname {
		width: 300rpx;
	}

	.no-order {
		width: 200rpx;
		height: 200rpx;
	}
</style>
