<template>
	<view>
		<top :isNavbar="true" :isBack="false" title="分类" class="z" bgc="#fff"></top>
		<!-- 头部 -->
		<view class="m-l10 p-l10 p-fixed bc-w wbfb z">
			<view class="flex-a-center m-l10 p-relative m-t-b10">
				<image src="../../static/static/icon/search.png" class="search m-l10"></image>
				<input type="text" class="m-l10 f-c-9 t-ipt" v-model="search" @keydown.enter="goProList(search)"/>
				<u-notice-bar :show="barShow" :volume-icon="false" class="place" mode="vertical" color="#999999"
					bg-color="#ffffff" padding="14rpx 24rpx" :border-radius="25" :list="placeList"></u-notice-bar>
			</view>
		</view>
		<view class="flex-j-between p-10 hbfb classfiy" style="margin-top: 50px;">
			<!-- 左边 -->
			<view class="class-l ">
			<view class="p-fixed">
				<scroll-view scroll-y="true" class="h-vh" :scroll-with-animation="true" :scroll-top="scrollTop">
					<view v-for="(item,index) in oneList" class="cla-dv" :key="index">
						<view class="p-10 f-c-9 t-a-center" @click="change(index)" :class="{'current':current===index}">
							{{item.name}}
						</view>
					</view>
				</scroll-view>
			</view>
			</view>
			<!-- 右边 -->
			<view class="class-r">
				<right :list="twoList" v-if="twoList" @lower="lower"></right>
			</view>
		</view>
	</view>

</template>

<script>
	import right from '../../components/classify/two.vue'
	export default {
		components: {
			right
		},
		props: {},
		data() {
			return {
				//输入框滚动的数据
				placeList: [],
				search: '',
				barShow: true,
				//一级分类
				oneList: [],
				//二级分类
				twoList: null,
				//选中的一级分类
				current: 0,
				scrollTop: 0,
			}
		},
		methods: {
			//获取输入框占位符数据
			getPlaceList() {
				this.$api.search.placeHolder()
					.then(res => {
						// console.log(res)
						if (res.data.length > 0) {
							res.data.map(item => {
								this.placeList.push(item.queryName)
							})
						}
					})
					.catch(err => {
						console.log(err)
					})
			},
			//获取分类数据
			getClassify() {
				this.$api.classify.list()
					.then(res => {
						if (res.code === 0) {
							// console.log(res)
							this.oneList = res.data
							this.getTwoList()
						}
					})
					.catch(err => {
						console.log(err)
					})
			},
			//点击一级分类
			change(index) {
				//向上滚动
				if (index > this.current) {
					this.scrollTop = index * 40
				} else {
					//向下滚动
					this.scrollTop = index * 40-120
				}
				this.current = index
				this.getTwoList()
			},
			//获取二级分类
			getTwoList() {
				this.$api.classify.detail(this.oneList[this.current].id)
					.then(res => {
						if (res.code === 0) {
							// console.log(res)
							this.twoList = res.data
						}
					})
					.catch(err => {
						console.log(err)
					})
			},
			//二级分类 触底 左边一级分类往下加载
			lower(){
				if(this.current === this.oneList.length-1){
					this.current=0
					this.scrollTop=0
				}else {
					this.current++
				}
				this.getTwoList()
			},
			goProList(value){
				if (value) {
					this.$utils.saveHistory({
						key: 'search',
						data: value
					})
					//跳转到产品列表
					uni.navigateTo({
						url:`/pages/productlist/productlist?value=${value}`
					})
				}
			}
		},
		mounted() {
			this.getClassify()
			this.getPlaceList()
		},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {},
		watch: {
			search(val) {
				if (val.trim()) {
					this.barShow = false
				} else {
					this.barShow = true
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.place {
		position: absolute;
		left: 60rpx;
		background: none;
		width: 80%;
	}

	.t-ipt {
		z-index: 1;
		height: 50rpx;
	}

	.current {
		color: #fff;
		background-color: #e70706;
		border-radius: 50rpx;
	}

	.class-l {
		width: 25%;
	}

	.class-r {
		width: 75%;
	}
	.cla-dv:last-child {
		height: 400rpx;
	}
</style>
