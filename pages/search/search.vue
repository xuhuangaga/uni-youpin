<template>
	<view>
		<view class="search-dv p-10 flex-j-between a-center">
			<view class="flex-a-center serp-dv  bc-w">
				<image src="../../static/static/icon/search.png" class="search m-l10 m-r5"></image>
				<u-input v-model="value" type="text" placeholder="请输入搜索内容" :clearable="true" trim class="ser-t-input"
					@keydown.enter.native="search(value)" />
			</view>
			<u-button type="error" size="mini" class="ser-btn m-l10" @click="search(value)">搜索</u-button>
		</view>
		<view v-if="dataList.length === 0">
			<!-- 搜索历史记录 -->
			<view class="p-10">
				<view class="flex-j-between a-center">
					<view class="f-w-bold f-size16">
						历史记录
					</view>
					<image src="../../static/static/clear.png" class="clear" @click="clear"></image>
				</view>
				<view class="flex-a-center f-wrap m-t10" v-if="history.length>0">
					<view class="ser-f-dv bc-e f-size12 m-r10 m-b10" @click="search(item)"
						v-for="(item,index) in history" :key="index">
						{{item}}
					</view>
				</view>
				<view class="flex-j-center a-center" v-else>
					<view class="p-20">
						暂无搜索历史
					</view>
				</view>
			</view>
			<!-- 搜索发现 -->
			<view class="p-10">
				<view class="f-w-bold f-size16">
					搜索发现
				</view>
				<view class="flex-a-center f-wrap m-t10">
					<view class="ser-f-dv bc-e f-size12 m-r10 m-b10" @click="search(item.queryName)"
						v-for="(item,index) in hotList" :key="index" v-if="item.queryName">
						<view class="flex-a-center">
							<image src="../../static/static/icon/hot.png" class="hot m-r10" v-if="item.hot"></image>
							{{item.queryName}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-else>
			<view v-for="(item,index) in dataList" :key="index">
				<view v-if="item.queryName==='暂无数据'" class="flex-j-center a-center">
					<view v-html="item.queryName" class="p-20">
					</view>
				</view>
				<view v-else class="flex-a-center p-10 have-data" @click="search(item.queryName)">
					<image src="../../static/static/icon/search.png" class="search m-l10 m-r5"></image>
					<view v-html="item.queryName.replace(value,`<text class='f-c-c'>${value}</text>`)">
					</view>
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
				//搜索历史
				history: [],
				//搜索内容
				value: '',
				//搜索热词
				hotList: [],
				//搜索结果列表
				dataList: []
			}
		},
		methods: {
			//获取搜索历史记录
			getHistory() {
				this.history = this.$utils.getHistory('search')
			},
			//点击搜索
			search(value) {
				if (value) {
					this.$utils.saveHistory({
						key: 'search',
						data: value
					})
					//跳转到产品列表
					uni.navigateTo({
						url: `/pages/productlist/productlist?value=${value}`
					})
				}
			},
			//点击清空
			clear() {
				let that=this
				if (that.history.length > 0) {
					uni.showModal({
						title: '确认清除所有历史记录?',
						success(res) {
							if (res.confirm) {
								that.$utils.removeHistory('search')
								that.getHistory()
							}
						}
					})
				} else
				uni.showToast({
					title:'暂时没有历史记录',
					icon:'none'
				})
			},
			//获取搜索热词
			getHot() {
				this.$api.search.hotWords()
					.then(res => {
						// console.log(res);
						this.hotList = res.data
					})
					.catch(err => {
						console.log(err);
					})
			}
		},
		mounted() {
			this.getHistory()
			this.getHot()
		},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {},
		watch: {
			//监听搜索框的输入值
			value(val) {
				if (val) {
					this.dataList = []
					this.$api.search.suggest(val)
						.then(res => {
							// console.log(res);
							if (res.data.length > 0) {
								this.dataList = res.data
							} else {
								this.dataList = [{
									queryName: '暂无数据'
								}]
							}
						})
						.catch(err => {
							console.log(err);
						})
				} else
					this.dataList = []
			}
		},
	}
</script>

<style scoped lang="scss">
	.search-dv {
		background: #f8f8f8;
		margin-top: -2rpx;
		height: 150rpx;
	}

	.search-dv-ser {
		// padding-left: 50rpx;
		// width: 90%;
	}

	.ser-btn {
		border-radius: 50rpx;
	}

	.serp-dv {
		border-radius: 40rpx !important;
		width: 90%;
	}

	.clear {
		width: 60rpx;
		height: 60rpx;
	}

	.ser-f-dv {
		padding: 10rpx 20rpx;
		border-radius: 50rpx;
	}

	.hot {
		width: 30rpx;
		height: 30rpx;
	}

	.have-data {
		border-bottom: 1px solid #eee;
	}
</style>
