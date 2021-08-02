<template>
	<view class="p-10">
		<scroll-view scroll-x="true">
			<view class="flex-a-center f-c-w w-vh tab-dv">
				<view v-for="(item,index) in data.tab" :key="index" class="wx-t t-a-center">
					<view class="p-10 flex-j-center" @click="change(index)" :class="{'active':active===index}">
						<view class="wx-t">
							{{item.title}}
						</view>
					</view>
					<view class="flex-j-center wx-t">
						<view class="bb bb1" :class="{'bb-act':active===index}">

						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="m-t10">
			<u-swiper mode="none" bg-color=" " border-radius="20" :list="data.banner" name="picUrl" :effect3d="true">
			</u-swiper>
		</view>
		<view class="m-t-b10 flex-j-around">
			<view v-for="(item,index) in data.kkong" :key="index" class="t-a-center" @click="jump(item.link)">
				<image class="toc" :src="item.picUrl"></image>
				<view class="">{{item.title}}</view>
			</view>
		</view>
		<view class="m-t10">
			<scroll-view scroll-y="true" class="h-vh" @scrolltolower="lower">
			<u-waterfall v-model="list" ref="uWaterfall" v-if="list.length>0">
				<template v-slot:left="{leftList}">
					<view class="demo-warter m-b20" @click="jump(item.detailUrl)" v-for="(item, index) in leftList" :key="index">
						<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
						<u-lazy-load threshold="-450" border-radius="10" :image="item.pic" :index="index">
						</u-lazy-load>
						<view class="demo-title lh20 f-w-bold m-t-b10">
							{{item.title}}
						</view>
						<view class="flex-j-between f-c-9 f-size12 a-center">
							<view class="flex-a-center">
								<image :src="item.author.avatar" class="avatar m-r10"></image>
								<view >
									{{item.author.nickname}}
								</view>
							</view>
							<view>
								{{item.readingNum}}阅读
							</view>
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter m-l10 m-b20" @click="jump(item.detailUrl)" v-for="(item, index) in rightList" :key="index">
						<u-lazy-load threshold="-450" border-radius="10" :image="item.pic" :index="index">
						</u-lazy-load>
						<view class="demo-title lh20 f-w-bold m-t-b10">
							{{item.title}}
						</view>
						<view class="flex-j-between f-c-9 f-size12 a-center">
							<view class="flex-a-center">
								<image :src="item.author.avatar" class="avatar m-r10"></image>
								<view >
									{{item.author.nickname}}
								</view>
							</view>
							<view>
								{{item.readingNum}}阅读
							</view>
						</view>
					</view>
				</template>
			</u-waterfall>
		</scroll-view>
		</view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			data: {
				type: Object
			}
		},
		data() {
			return {
				//选中的tab
				active: 0,
				//当前页码
				page: 1,
				//每页显示条数
				pageSize: 10,
				//列表数据
				list: []
			}
		},
		methods: {
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
			//触底加载
			lower(){
				this.page++
				this.getData()
			},
			//切换tab
			change(index) {
				this.list = []
				this.active = index
				this.getData()
			},
			//根据tab选项获取列表数据
			getData() {
				this.$api.life.getHomeTab(this.data.tab[this.active].id, this.page, this.pageSize)
					.then(res => {
						// console.log(res);
						this.list = this.list.concat(res.data)
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
	.active {
		font-size: 20px;
	}

	.bb {
		border-bottom: 8rpx solid #f2b830;
	}

	.bb-act {
		border-bottom: 8rpx solid #fff;
		width: 40rpx;
	}

	.toc {
		width: 80rpx;
		height: 80rpx;
	}
	.avatar {
		width: 60rpx;
		height: 60rpx;
		border-radius: 100%;
	}
	.wx-t {
		width: 160rpx;
	}
	.bb1 {
		// margin-left: -20rpx;
	}
</style>
