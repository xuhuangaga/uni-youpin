<template>
	<view class="order-box">
		<top :isNavbar="true" :isBack="true" title="我的订单" class="z" bgc="#fff"></top>
		<view class="flex-j-around a-center m-t20">
			<view @click="change(index)" v-for="(item,index) in tab" :key="index" :class="{'active':index===current}"
				class="tab">
				{{item.name}}
			</view>
		</view>
		<order :list="list"></order>
		<view class="p-10">
			<view class="flex-j-center a-center">
				<image class="tj-img" src="../../static/static/icon/titile_left.png"></image>
				<view class="f-size16 m-20">
					为你推荐
				</view>
				<image class="tj-img" src="../../static/static/icon/titile_right.png"></image>
			</view>
			<recomment></recomment>
		</view>
	</view>

</template>

<script>
	import order from '../../components/orders/order.vue'
	import recomment from '../../components/my/recomment/recomment.vue'
	export default {
		components: {
			recomment,
			order
		},
		props: {},
		data() {
			return {
				//选项卡数据
				tab: [{
						name: '全部'
					},
					{
						name: '待付款'
					},
					{
						name: '待收货'
					},
					{
						name: '已收货'
					},
					{
						name: '退款'
					}
				],
				//订单数据
				list: [],
				//选中的tab下标
				current: 0
			}
		},
		methods: {
			//跳转到详情
			jump(gid) {
				this.$utils.jumpDetail(gid)
			},
			//选择tab
			change(index) {
				this.current = index
				this.getData()
			},
			//获取订单列表数据
			getData() {
				if (this.current === 0) {
					let user = this.$store.state.user
					// console.log(user[0]);
					let orders = uni.getStorageSync('orders' + user[0].nickName)
					orders ? this.list = orders : this.list = []
					// console.log(this.list);
				} else {
					this.list = []
				}
			}
		},
		mounted() {
			this.getData()
		},
		onLoad(option) {
			this.current = Number(option.index)
		},
		onShow() {

		},
		filters: {},
		computed: {},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.order-box {
		.active {
			background: #f4c255;
			color: #fff;
			border-radius: 30rpx;
		}

		.tab {
			padding: 10rpx 20rpx;
		}

		.tj-img {
			width: 40rpx;
			height: 40rpx;
		}
	}
</style>
