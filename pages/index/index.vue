<template>
	<view>
		<!-- 头部 -->
		<top :isNavbar="false">
			<template #left>
				<image src="../../static/static/navi_title_v6_backup.png" class="yp"></image>
			</template>
			<template #right>
				<view class="ipt-v flex-a-center m-l10 p-relative">
					<image src="../../static/static/icon/search.png" class="search m-l10"></image>
					<input type="text" disabled="true" class="m-l10 f-c-9 t-ipt" v-model="search" @click="goSearch" />
					<u-notice-bar :volume-icon="false" :show="barShow" class="place" mode="vertical" color="#999999" bg-color="#ffebea" padding="14rpx 24rpx" :border-radius="25" :list="placeList"></u-notice-bar>
				</view>
			</template>
		</top>
		<view>
			<!-- 轮播图 -->
			<banner v-if="bannerList.length>0" :bannerList="bannerList"></banner>
			<!-- 活动板块 -->
			<activity v-if="activityList.length>0" :activityList="activityList"></activity>
			<!-- 楼层3 4的图片 -->
			<view class="imgs">
				<image :src="floor3.pic_url" lazy-load class="wbfb" @click="jump(floor3.pic_jump_url)"></image>
				<image v-if="floor4._hotspot" :src="floor4._hotspot.image" lazy-load class="wbfb" @click="jump(floor4._hotspot.items[0].edit.data.jump_url)"></image>
			</view>
			<view class="middle">
				<goods v-if="proList.length>0" :proList="proList[0].items"></goods>
				<goods v-if="proList.length>0" :proList="proList[1].items" class="p-t0"></goods>
				<view class="p-10">
					<crowd v-if="crowdList.length>0" :crowdList="crowdList" :crowBgc="crowBgc"></crowd>
					<hot v-if="hotList.length>0" :hotList="hotList" :title="title" :subtitle="subtitle"></hot>
					<limit v-if="limitList.length>0" :limitList="limitList" :startTime="startTime"></limit>
					<sale v-if="saleList.length>0" :saleList="saleList"></sale>
				</view>
			</view>
			<tab ref="tab" v-if="list.length>0" :list="list" @top='top'></tab>
		</view>
	</view>

</template>

<script>
	import banner from '../../components/home/banner/banner.vue'
	import activity from '../../components/home/activity/activity.vue'
	import goods from '../../components/home/goods/goods.vue'
	import crowd from '../../components/home/crowd/crowd.vue'
	import hot from '../../components/home/hot/hot.vue'
	import limit from '../../components/home/timelimit/timelimit.vue'
	import sale from '../../components/home/sale/sale.vue'
	import tab from '../../components/home/tabs/tabs.vue'
	export default {
		components: {
			banner,
			activity,
			goods,
			crowd,
			hot,
			limit,
			sale,
			tab
		},
		props: {},
		data() {
			return {
				barShow:true,
				// showSearch: true,
				// topValue: 0,
				search: '',
				//轮播图数据
				bannerList: [],
				//活动板块数据  轮播图下面
				activityList: [],
				//水肌美图片
				floor3: '',
				//预售图片
				floor4: '',
				//楼层5 6的数据
				proList: [],
				//众筹数据
				crowdList: [],
				//好物榜
				goodthingList: [],
				//热销榜
				hotList: [],
				title: '',
				subtitle: '',
				//限时购数据
				limitList: [],
				//限时的开始时间
				startTime: 0,
				//众筹背景图
				crowBgc: '',
				//特卖数据
				saleList: [],
				//底部tabs处数据
				list: [],
				//输入框滚动的数据
				placeList:[]
			}
		},
		methods: {
			//点击输入框
			goSearch(){
				uni.navigateTo({
					url:'/pages/search/search'
				})
			},
			//跳转页面
			jump(url) {
				// #ifdef MP-WEIXIN
				uni.setClipboardData({
					data: url,
					success: function() {}
				});
				// #endif
				// #ifndef MP-WEIXIN
				window.location.href = url
				// #endif
			},
			// top(val) {
			// 	this.topValue = val
			// },
			//获取输入框占位数据
			getPlaceList(){
				this.$api.search.placeHolder()
				.then(res=>{
					// console.log(res)
					if(res.data.length>0) {
						res.data.map(item=>{
							this.placeList.push(item.queryName)
						})
					}
				})
				.catch(err=>{
					console.log(err)
				})
			},
			//获取数据
			getData() {
				this.$api.home.homeData()
					.then(res => {
						// console.log(res)
						// 轮播图数据
						let banList = res.homepage.floors[1].data.items
						if (banList.length !== 0) {
							banList.map(item => {
								this.bannerList.push({
									image: item.item.pic_url,
									iid: item.iid,
									jump_url:item.item.jump_url
								})
							})
						}
						//活动板块数据
						this.activityList = res.homepage.floors[2].data.items
						//楼层3 4的图片
						this.floor4 = res.homepage.floors[3].data
						this.floor3 = res.homepage.floors[4].data
						//楼层5 6的数据
						this.proList = res.homepage.floors[5].data.rows
						//众筹的数据
						this.crowdList = res.homepage.floors[7].data.items
						this.crowBgc = res.homepage.floors[7].data.config.card_bg_image
						//热销榜的数据
						this.hotList = res.homepage.floors[8].data.items
						this.title = res.homepage.floors[8].data.title
						this.subtitle = res.homepage.floors[8].data.subtitle
						//限时购数据
						this.limitList = res.homepage.floors[9].data.goods
						//活动开始时间
						this.startTime = res.homepage.floors[9].data.start_time
						//特卖数据
						this.saleList = res.homepage.floors[10].data.items
						//底部tabs处数据
						this.list = res.homepage.floors[11].data.items
					})
					.catch(err => {
						console.log(err)
					})
			}
		},
		mounted() {
			//获取数据
			this.getData()
			//获取输入框占位数据
			this.getPlaceList()
		},
		onLoad() {

		},
		onShow() {

		},
		
		onPageScroll(e) {
			// console.log(e.scrollTop);
			// if (e.scrollTop > this.topValue) this.showSearch = false
			// else  this.showSearch =true
		},
		filters: {},
		computed: {},
		watch: {
			search(val){
				if(val.trim()){
					this.barShow=false
				}else {
					this.barShow=true
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.place {
		position:absolute;
		left: 60rpx;
		background: none;
		width: 80%;
	}
	.t-ipt {
		z-index: 1;
		height: 50rpx;
	}
	.t-l {
		font-size: 50rpx;
	}

	.yp {
		width: 80rpx;
		height: 80rpx;
	}

	.ipt-v {
		border-radius: 50rpx;
		background: #ffebea;
		padding: 8rpx;
	}

	.imgs {
		font-size: 0;

		image {
			height: 200rpx;
		}
	}

	.middle {
		background: #e84241;
	}
</style>
