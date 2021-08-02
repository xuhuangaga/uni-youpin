<template>
	<view class="p-10">
		<view class="flex-j-between a-center">
			<view v-if="value" class="productlist-tags-u-tag">
				<u-tag :text="value" type="success" border-color="#999999" bg-color="#999999" color="#ffffff" @close="close" shape="circle"/>
			</view>
			<image v-if="!isTwo" class="menu-img" src="../../static/static/icon/arrange_cell_black.png" @click="changeImg"></image>
			<image v-else class="menu-img" src="../../static/static/icon/arrange_list_black.png" @click="changeImg"></image>
		</view>
		<!-- tab -->
		<view class="flex-j-around a-center m-t-b10">
			<view @click="changesort(index)" v-for="(item,index) in sortBy" :key="index" :class="{'active':sortId===item.id}">
				{{item.name}}
				<template v-if="index===3"> 
					<template v-if="item.asc">
						<u-icon name="arrow-up" :color="color"></u-icon>
					</template>
					<template v-else>
						<u-icon name="arrow-down" :color="color"></u-icon>
					</template>
				</template>
			</view>
		</view>
		<!-- 显示列表数据 -->
		<view class="" v-if="dataList">
			<view class="flex-a-center f-wrap">
				<view v-for="(item,index) in dataList" :key="index" class="m-b20" :class="{'flex-j-between':isTwo}" @click="jump(item.data.goodsInfo.gid)">
					<u-image :src="item.data.goodsInfo.img800s" width="350rpx" height="350rpx"></u-image>
					<view class="">
						<view class="flex-a-center f-wrap" v-if="item.data.label.doubleRow">
							<u-tag v-for="(item1,index1) in item.data.label.doubleRow.slice(0,1)" :key="index1" type="success" :text="item1.labelName" border-color="#eb6a6d" bg-color="#eb6a6d" color="#ffffff"
								class="ser-tag" />
						</view>
						<view class="sl-one ser-gname m-t-b10">
							{{item.data.goodsInfo.name}}
						</view>
						<view class="f-size12 f-c-c sl-one ser-gname">
							{{item.data.goodsInfo.summary}}
						</view>
						<view class="flex-a-center">
							<view class="price f-size16 f-w-bold m-r10">
								￥{{item.data.goodsInfo.priceMin/100}}
							</view>
							<view class=" f-c-9 line m-l10 m-t-b10">
								￥{{item.data.goodsInfo.marketPrice/100}}
							</view>
						</view>
						<view class="flex-a-center">
							<view class="f-size12 f-c-c">
								{{item.data.comment.count}}条评论
							</view>
							<view class="f-size12 f-c-c m-l10">
								{{item.data.comment.positiveRate}}%好评
							</view>
						</view>
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
</template>

<script>
	export default {
		components: {},
		props: {},
		data() {
			return {
				//路由传参过来的【搜索页】搜索内容
				value: '',
				isTwo: false,
				// 综合排序传0 销量排序传8  新品传7 价格降序传2 价格升序传1 信用排序传6 
				sortBy: [{
						name: '综合',
						id: 0
					},
					{
						name: '新品',
						id: 7
					},
					{
						name: '信用',
						id: 6
					},
					{
						name: '价格',
						id: 1,
						asc: true
					},
					{
						name: '销量',
						id: 8
					},
				],
				//排序id
				sortId: 0,
				//列表数据
				dataList: null,
				color:'#000'
			}
		},
		methods: {
			//选择排序
			changesort(index){
				this.sortId=this.sortBy[index].id
				let sid = this.sortId
				if(index===3) {
					this.color="red"
					if(this.sortBy[index].asc){
						this.sortBy[index].asc=false
						sid=1
					}else {
						this.sortBy[index].asc=true
						sid=2
					}
				}else {
					this.color="#000"
				}
				this.dataList=null
				this.getData(sid)
			},
			//跳转到详情
			jump(gid) {
				this.$utils.jumpDetail(gid)
			},
			//点击标签关闭
			close() {
				this.value = ''
				this.getData(this.sortId)
			},
			//点击排列方式的图标
			changeImg() {
				this.isTwo = !this.isTwo
			},
			//根据搜索获取商品列表数据
			getData(sid) {
				this.$api.goods.doSearch(
						[{
							queryName: this.value,
							queryType: 0,
							rule: []
						}],
						sid,
						'searchPage')
					.then(res => {
						if (res.code === 0) {
							// console.log(res);
							this.dataList = res.data.data.goods
						}
					})
					.catch(err => {
						console.log(err);
					})
			}
		},
		mounted() {
			this.getData(this.sortId)
		},
		onLoad(option) {
			this.value = option.value
		},
		onShow() {

		},
		filters: {},
		computed: {},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.ser-gname {
		width: 300rpx;
	}
	.ser-tag {
		padding:10rpx 6rpx;
		margin-right: 10rpx;
		margin-bottom: 10rpx;
	}
	.active {
		color:red
	}
	.menu-img {
		width: 100rpx;
		height: 100rpx;
	}
</style>
