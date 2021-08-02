<template>
	<view>
		<top :isNavbar="true" :isBack="true" title="我的收藏" class="z" bgc="#fff"></top>
		<view class="m-t20">
			<view class="" v-if="dataList.length>0">
				<view class="flex-a-center f-wrap">
					<view v-for="(item,index) in dataList" :key="index" class="m-b20 flex-j-between"
						@click="jump(item.gid)">
						<u-image :src="item.goods.goodsInfo.img800s" width="350rpx" height="350rpx"></u-image>
						<view class="">
							<view class="sl-one bro-gname m-t-b10">
								{{item.goods.goodsInfo.name}}
							</view>
							<view class="f-size12 f-c-c sl-one bro-gname">
								{{item.goods.goodsInfo.summary}}
							</view>
							<view class="flex-a-center f-wrap m-t10 bro-gname" v-if="item.goods.labels">
								<u-tag v-for="(item1,index1) in item.goods.labels" :key="index1" type="success"
									:text="item1.text" border-color="#eb6a6d" bg-color="#eb6a6d" color="#ffffff"
									class="ser-tag m-r5 m-b5" />
							</view>
							<view class="flex-a-center">
								<view class="price f-size16 f-w-bold m-r10">
									￥{{item.goods.goodsInfo.priceMin/100}}
								</view>
								<view class=" f-c-9 line m-l10 m-t-b10">
									￥{{item.goods.goodsInfo.marketPrice/100}}
								</view>
							</view>
							<view class="flex-a-center">
								<view class="f-size12 f-c-c">
									{{item.comment.index?item.comment.index.total_count:0}}条评论
								</view>
								<view class="f-size12 f-c-c m-l10">
									{{item.comment.index?item.comment.index.positive_rate:0}}%好评
								</view>
							</view>
						</view>
						<view class="flex-j-center a-center m-l10" @click.stop="del(item)">
							<u-icon name="close" width="100" height="100"></u-icon>
						</view>
					</view>
				</view>
			</view>
			<view class="flex-j-center a-center" v-else>
				<view class="p-20">
					暂无数据
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
				//收藏列表数据
				dataList: []
			}
		},
		methods: {
			//删除
			del(item) {
				let that=this
				uni.showModal({
					title: '确认删除该条收藏记录?',
					success: function(res) {
						if (res.confirm) {
							that.$utils.removeHistory('favor', item, 'gid')
							that.getData()
						}
					}
				})
			},
			//跳转到详情
			jump(gid) {
				this.$utils.jumpDetail(gid)
			},
			//获取收藏记录
			getData() {
				let brower = this.$utils.getHistory('favor')
				brower ? this.dataList = brower : this.dataList = []
				// console.log(this.dataList);
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
	.bro-gname {
		width: 300rpx;
	}
</style>
