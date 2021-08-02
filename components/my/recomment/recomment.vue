<template>
	<view class="flex-a-center f-wrap m-t10 my-rec">
		<view @click="jump(item.data.goods.gid)" v-for="(item,index) in list" :key="index" class="rec-dv">
			<image class="pro-img" :src="item.data.goods.imgSquare"></image>
			<view v-if="item.data.goods.labels.length>0">
				<u-tag :text="item.data.goods.labels[0].text" type="error" />
			</view>
			<view class="lh20 sl-two rec-name m-t-b5">
				{{item.data.goods.name}}
			</view>
			<view class="flex-a-center">
				<view class="price f-w-bold  f-size16">
					￥{{item.data.goods.priceMin/100}}
				</view>
				<view class="f-size14 f-c-9 line m-l10 ">
					￥{{item.data.goods.marketPrice/100}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		props: {},
		data() {
			return {
				page: 1,
				pageSize: 6,
				//为你推荐数据
				list: []
			}
		},
		methods: {
			//跳转到详情
			jump(gid) {
				this.$utils.jumpDetail(gid)
			},
			//获取数据
			getData() {
				this.$api.goods.recommend(7, this.page, this.pageSize)
					.then(res => {
						this.list = res.data.recommendResponseList
						//推荐商品存本地
						this.$utils.saveHistory({
							key: 'recommendResponseList',
							data: this.list
						})
						// console.log(this.list);
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
	.my-rec {
		.rec-name {
			width: 200rpx;
		}

		.pro-img {
			width: 300rpx;
			height: 300rpx;
		}

		.rec-dv {
			height: 500rpx;
			width: 50%;
		}
	}
</style>
