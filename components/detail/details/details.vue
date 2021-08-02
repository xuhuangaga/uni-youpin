<template>
	<view>
		<banner :info="info"></banner>
		<view>
			<view class="bc-w p-10 m-t10">
				<view class="flex-j-between a-center">
					<view class="flex-a-center m-t-b10">
						<view class="price f-size20 f-w-bold">
							￥{{info.goods.goodsInfo.priceMin/100}}
						</view>
						<view class="line f-size12 f-c-9 m-l10">
							￥{{info.goods.goodsInfo.marketPrice/100}}
						</view>
					</view>
					<image v-if="!isFavor" @click="favor" src="../../../static/static/icon/product_unfavor.png"
						class="favor">
					</image>
					<image v-else src="../../../static/static/icon/product_favor.png" class="favor"></image>
				</view>
				<view class="f-size16 f-w-bold m-t-b10">
					{{info.goods.goodsInfo.name}}
				</view>
				<view class="f-size14 f-c-9">
					{{info.goods.goodsInfo.summary}}
				</view>
			</view>
			<chioce :info="info" :num="num" @changeNum="changeNum"></chioce>
		</view>
	</view>

</template>

<script>
	import banner from '../banner/banner.vue'
	import chioce from '../chioce/chioce.vue'
	export default {
		components: {
			banner,
			chioce
		},
		props: {
			info: {
				type: Object
			}
		},
		data() {
			return {
				//是否收藏
				isFavor: false,
				//购物车数量
				num:0
			}
		},
		methods: {
			//更改购物车数量
			changeNum(n){
				this.num=n
				// console.log(n);
				// uni.setTabBarBadge({
				// 	text: `${n}`,
				// 	index: 3
				// })
			},
			//点击收藏
			favor() {
				this.$utils.saveHistory({
					key: 'favor',
					data: this.info,
					item: 'gid'
				})
				this.isFavor = true
				uni.showToast({
					title: '收藏成功',
					icon: 'none'
				})
				setTimeout(() => {
					uni.hideToast()
				}, 1000)
			},
			//获取是否收藏
			getIsFavor() {
				let favor = this.$utils.getHistory('favor')
				if (favor) {
					favor.map(item => {
						if (item.gid === this.info.goods.goodsInfo.gid) {
							this.isFavor = true
							return
						}
					})
				}
			},
		},
		mounted() {
			// console.log(this.info);
			//获取是否收藏
			this.getIsFavor()
			//判断是否登录
			let user = this.$utils.getHistory('user')
			// console.log(user);
			if (user) {
				//获取该用户的购物车数量
				let car = uni.getStorageSync('carts' + user[0].nickName)
				if (car && car.length > 0) {
					this.num = car.length
					// console.log(this.num);
				}
			}
		},
		onLoad() {},
		onShow() {

		},
		filters: {},
		computed: {},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.fh {
		width: 20rpx;
		height: 20rpx;
	}


	.favor {
		width: 100rpx;
		height: 100rpx;
	}

	.gg-dv {
		border: 1px solid #eee;
		width: fit-content;
		padding: 20rpx 30rpx;
	}
</style>
