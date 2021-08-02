<template>
	<view class="f-c-9 my-box">
		<top :isNavbar="true" style="position: absolute;" :isBack="false" title="购物车" color="#ffffff"></top>
		<view class="my-top-bg">
			<image src="../../static/static/top-bg.png" class="wbfb hbfb"></image>
		</view>
		<view class=" no-login-dv wbfb">
			<view v-if="user">
				<view class="my-con-box z" v-if="list.length >0 ">
					<havedata @changeNum="changeNum" :list="list" @allChecked="allChecked" @del="del" @buy="buy">
					</havedata>
				</view>
				<view class="" v-else>
					<view class="flex-j-center a-center bc-w no-s-dv">
						<view class="t-a-center">
							<view class="p-10 f-size16">
								购物车暂时没东西哦~
							</view>
							<view class="p-10 gologin f-c-w" @click="shopping">
								去购物
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 未登录 -->
			<nologin v-else @loginOk="loginOk"></nologin>
			<view class="p-10 car-b-rem">
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
	</view>
</template>

<script>
	import recomment from '../../components/my/recomment/recomment.vue'
	import nologin from '../../components/carts/nologin/nologin.vue'
	import havedata from '../../components/carts/datalist/datalist.vue'
	import dayjs from 'dayjs'
	export default {
		components: {
			recomment,
			nologin,
			havedata
		},
		props: {},
		data() {
			return {
				//购物车数据
				list: [],
				//当前登录用户
				user: null,
			}
		},
		methods: {
			//修改数量
			changeNum(index, number) {
				this.list[index].number = number
				uni.setStorageSync('carts' + this.user.nickName, this.list)
			},
			//删除
			del() {
				let checkedList = this.list.filter(item => {
					return item.checked
				})
				if (checkedList.length === 0) {
					uni.showToast({
						title: '请选择需要删除的商品',
						icon: 'none'
					})
				} else {
					let that = this
					uni.showModal({
						title: '确认删除选中的商品?',
						success: function(res) {
							if (res.confirm) {
								that.list = that.list.filter(item => {
									return !item.checked
								})
								uni.setStorageSync('carts' + that.user.nickName, that.list)
								uni.setTabBarBadge({
									text: `${that.list.length}`,
									index: 3
								})
							}
						}
					})
				}
			},
			//购买
			buy() {
				let checkedList = this.list.filter(item => {
					return item.checked
				})
				// console.log(checkedList);
				if (checkedList.length === 0) {
					uni.showToast({
						title: '请选择需要购买的商品',
						icon: 'none'
					})
				} else {
					//计算总金额
					let totalMoney = 0
					checkedList.map(item => {
						totalMoney += item.goods.goodsInfo.priceMin * item.number
					})
					let arr = []
					// console.log(user.nickName);
					let orders = uni.getStorageSync('orders' + this.user.nickName)
					if (orders) {
						arr = orders
					}
					arr.push({
						data: checkedList,
						// 支付时间
						payTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
						// 结算金额
						totalMoney: totalMoney
					})
					uni.setStorageSync('orders' + this.user.nickName, arr)
					uni.showToast({
						title: `成功支付${totalMoney/100}元`,
						icon: 'none'
					})
					this.list = this.list.filter(item => {
						return !item.checked
					})
					uni.setStorageSync('carts' + this.user.nickName, this.list)
				}
			},
			//全选
			allChecked(checked) {
				this.list.map(item => {
					item.checked = !checked
				})
			},
			//点击去购物
			shopping() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			//登录成功的子组件分发事件
			loginOk(info) {
				this.user = info
			},
			getUser() {
				let his = this.$utils.getHistory('user')
				// console.log(his[0]);
				his ? this.user = his[0] : this.user = null
			},
			//获取购物车列表数据
			getData() {
				// console.log(this.user.nickName);
				let carts = uni.getStorageSync('carts' + this.user.nickName)
				carts ? this.list = carts : this.list = []
				// console.log(this.list);
			}
		},
		mounted() {},
		onLoad() {},
		onShow() {
			this.getUser()
			if (this.user) {
				this.getData()
			}
		},
		filters: {},
		computed: {},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.my-box {

		.my-top-bg {
			width: 750rpx;
			/* #ifdef MP-WEIXIN */
			height: 400rpx;
			/* #endif */
			/* #ifndef MP-WEIXIN */
			height: 350rpx;
			/* #endif */
			position: absolute;
			z-index: -1;
		}

		.my-top-dv {
			width: 750rpx;
			height: 400rpx;
			z-index: -1;
			margin-top: -120rpx;
		}

		.my-con-box {
			/* #ifdef MP-WEIXIN */
			padding-top: 140rpx;
			/* #endif */
			/* #ifndef MP-WEIXIN */
			padding-top: 50rpx;
			/* #endif */
		}

		.my-con-o-dv {
			/* #ifdef MP-WEIXIN */
			margin-top: -40rpx;
			/* #endif */
		}

		.no-login-dv {
			position: absolute;
			top: 88rpx;
		}

		.tj-img {
			width: 40rpx;
			height: 40rpx;
		}

		.car-b-rem {
			margin-bottom: 100rpx;
		}

		.no-s-dv {
			height: 360rpx;
		}

		.gologin {
			background: #ebc875;
		}
	}
</style>
