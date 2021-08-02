<template>
	<view class="p-10 bc-w m-t10">
		<view v-if="!list">
			<view class="f-size14 f-w-bold">
				暂无问答
			</view>
			<view class="flex-j-between a-center m-t10">
				<view class="flex-a-center">
					<image src="../../../static/static/icon/ask_list_empty.png" class="ask"></image>
					<view class="m-l10">
						好不好，问大家
					</view>
				</view>
				<view class="goquestion">
					去提问
				</view>
			</view>
		</view>
		<view v-else class="p-10">
			<view class="flex-j-between a-center m-t-b10" @click="all">
				<view>
					大家都在问
				</view>
				<image src="../../../static/static/icon/arrow_right.png" class="del-yjt"></image>
			</view>
			<view class="flex-j-between a-center m-b10" v-for="(item,index) in list" :key="index" v-if="index<3">
				<view class="flex-a-center">
					<image src="../../../static/static/icon/ask_question.png" class="qa-img"></image>
					<view class="m-l10">
						{{item.ask}}
					</view>
				</view>
				<view class="">
					{{item.reply_total}}个回答
				</view>
			</view>
			<view class="flex-j-center" @click="all">
				<view class="goquestion all t-a-center">
					查看全部{{total}}条问答
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import dayjs from 'dayjs'
	export default {
		components: {},
		props: {
			info: {
				type: Object
			}
		},
		data() {
			return {
				//问答列表数据
				list: [],
				//问答总数量
				total: 0
			}
		},
		methods: {
			//获取数据
			getData() {
				this.$api.goods.askInfo(this.info.gid)
					.then(res => {
						// console.log(res);
						this.list = res.data.list
						this.total = res.data.total
						if (this.total !== 0) {
							if (this.list.length > 0) {
								this.list.map(item => {
									this.$set(item, 'time', dayjs(item.utime).format('YYYY-MM-DD'))
								})
							}
							this.$utils.saveHistory({
								key: 'qa',
								data: this.list
							})
							this.$utils.saveHistory({
								key:'detail',
								data:this.info
							})
						}
					})
					.catch(err => {
						console.log(err);
					})
			},
			//查看所有问答
			all() {
				uni.navigateTo({
					url: '/pages/allqa/allqa'
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
	.ask {
		width: 50rpx;
		height: 50rpx;
	}

	.goquestion {
		border: 1px solid #817160;
		color: #817160;
		border-radius: 50rpx;
		padding: 10rpx 30rpx;
	}

	.qa-img {
		width: 60rpx;
		height: 60rpx;
	}

	.all {
		width: 300rpx;
	}
</style>
