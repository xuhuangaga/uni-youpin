<template>
	<view class="p-10 bc-w m-t10 del-rec">
		<view class="flex-j-center a-center">
			<view class="foryu f-size14 p-b10">
				为你推荐
			</view>
		</view>
		<swiper autoplay="true" :indicator-dots="true" style="height: 700rpx;">
			<swiper-item>
				<view class="flex-a-center f-wrap m-t10">
					<view @click="jump(item.data.goods.gid)" v-for="(item,index) in list" :key="index"
						class="m-r10 m-b10">
						<image class="pro-img" :src="item.data.goods.imgSquare"></image>
						<view class="lh20 sl-two rec-name">
							{{item.data.goods.name}}
						</view>
						<view class="price f-w-bold f-size14">
							￥{{item.data.goods.priceMin/100}}
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
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
						// console.log(res);
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
	.del-rec {
		.foryu {
			color: #817160;
			border-bottom: 1px solid #817160;
		}

		.pro-img {
			width: 216rpx;
			height: 216rpx;
			border-radius: 20rpx;
		}

		.rec-name {
			width: 200rpx;
		}
	}
</style>
