<template>
	<view>
		<top :isNavbar="true" :isBack="true" title="全部评论" bgc="#ffffff"></top>
		<view class="p-10">
			<view class="flex-j-between a-center">
				<view class="flex-a-center">
					<view class="m-r10">
						综合评分:
					</view>
					<u-rate v-model="score" active-color="#ffce55" :disabled="true"></u-rate>
				</view>
				<view class="f-c-9">
					{{rate}}%满意
				</view>
			</view>
			<!-- <u-read-more :toggle="true"> -->
			<view class="flex-a-center f-wrap m-t10">
				<view v-for="(item,index) in tagList" :key="index" class="f-size12 tag-dv p-5 m-r10 m-b10"
					@click="change(item.id)" :class="{'active':tagId===item.id}">
					{{item.name}}({{item.count}})
				</view>
			</view>
			<scroll-view scroll-y="true" class="h-vh m-t10" @scrolltolower="lower">
				<view v-for="(item,index) in list" :key="index" class="m-b20">
					<view class="flex-j-between">
						<view class="com-l">
							<image class="per-pic" :src="item.avatar" v-if="item.avatar"></image>
							<image class="per-pic" src="../../static/static/avatar_default.png" v-else></image>
						</view>
						<view class="com-r">
							<view class="flex-j-between a-center">
								<view class="p-l10">
									<view class="flex-a-center">
										<view class="m-r10 sl-one">
											{{item.nick_name}}
										</view>
										<u-rate v-model="item.score" active-color="#ffce55" :disabled="true"></u-rate>
									</view>
									<view class=" m-t-b10">
										已选:{{item.pid_spec}}
									</view>
								</view>
								<view class="f-c-9">
									{{item.time}}
								</view>
							</view>
							<view class="p-l10">
								<view class="m-t-b10">
									{{item.text}}
								</view>
								<view class="flex-a-center f-wrap">
									<image v-for="(item1,index1)  in item.comment_imgs" :src="item1.img"
										class="comm-img m-r10 m-b10"></image>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			<!-- </u-read-more> -->
		</view>
	</view>

</template>

<script>
	import dayjs from 'dayjs'
	export default {
		components: {},
		props: {},
		data() {
			return {
				//标签数据列表
				tagList: [],
				//评论数据列表
				list: [],
				//选中的tagid
				tagId: 0,
				//当前页码
				page: 1,
				//每页显示条数
				pageSize: 10,
				total: 0,
				rate: 0,
				score: 0
			}
		},
		methods: {
			//触底加载
			lower() {
				if (this.list.length !== this.total) {
					this.page++
					this.getComm()
				}
			},
			//获取评价标签
			getData() {
				this.$api.goods.commentTag(this.gid)
					.then(res => {
						if (res.code === 0) {
							this.tagList = res.data.tags
							//如果标签id为空 就用默认第一个
							if (!this.tagId)
								this.tagId = this.tagList[0].id
							this.getComm()
						}
						// console.log(res);
					})
					.catch(err => {
						console.log(err);
					})
			},
			//获取评论数据列表
			getComm() {
				this.$api.goods.commentContent(this.gid, this.page, this.pageSize, this.tagId)
					.then(res => {
						if (res.code === 0) {
							this.list = this.list.concat(res.data.list)
							this.total = res.data.page.total
							if (this.list.length > 0) {
								this.list.map(item => {
									this.$set(item, 'time', dayjs(item.ctime).format('YYYY-MM-DD'))
								})
							}
						}
						// console.log(res.data);
					})
					.catch(err => {
						console.log(err);
					})
			},
			//点击标签
			change(id) {
				this.list = []
				this.tagId = id
				this.getComm()
			}
		},
		mounted() {
			this.getData()
		},
		onLoad(e) {
			this.gid = e.gid
			this.rate = e.rate
			this.score = e.score
			this.tagId = e.tagId
		},
		onShow() {

		},
		filters: {},
		computed: {},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.per-pic {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
	}

	.tag-dv {
		background: #fffbe2;
	}

	.active {
		padding: 15rpx 30rpx;
		background: #f8c558;
		color: #fff;
		border-radius: 50rpx;
	}

	.comm-img {
		border-radius: 20rpx;
		width: 250rpx;
		height: 250rpx;
	}

	.com-l {
		width: 20%;
	}

	.com-r {
		width: 80%;
	}
</style>
