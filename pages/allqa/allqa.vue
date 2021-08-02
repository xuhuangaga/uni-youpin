<template>
	<view class="bc-e">
		<top :isBack="true" bgc="#ffffff" :isNavbar="true" :title="title"></top>
		<view class="p-10 flex-a-center bc-w">
			<u-image :src="img" width="200rpx" height="200rpx"></u-image>
			<view class="f-c-c f-size12">{{name}}</view>
		</view>
		<view class="bc-w p-10 m-t-b10" v-for="(item,index) in list[0]" :key="index">
			<view class="flex-a-center m-t-b10">
				<image src="../../static/static/icon/ask_question.png" class="qa-img"></image>
				<view class="f-size16 f-w-bold m-l10">{{item.ask}}</view>
			</view>
			<view class="flex-a-center">
				<image src="../../static/static/icon/answer.png" class="qa-img"></image>
				<view v-if="!item.top_reply">
					暂无回答
				</view>
				<view v-else>
					<view class="m-l10 p-l10 m-t-b10 replay-dv lh20" v-for="(item1,index1) in item.top_reply " :key="index1">
						{{item1}}
					</view>
					<view class="f-size12 p-l10 f-c-c flex-j-between a-center">
						<view class="">
							全部{{item.reply_total}}个回答
						</view>
						<view class="">
							{{item.time}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {

		},
		data() {
			return {
				list: [],
				//标题
				title: '',
				//图片路径
				img:'',
				//商品名称
				name:''
			}
		},
		methods: {
			//获取数据
			getData(){
			this.list = this.$utils.getHistory("qa")
			let detail = this.$utils.getHistory("detail")
			this.img = detail[0].goods.goodsInfo.picUrl
			this.name = detail[0].goods.goodsInfo.name
			this.title = `问大家（${this.list.length}）`
			}
		},
		mounted() {
			this.getData()
			console.log(this.list);
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
	.replay-dv {
		width: 630rpx;
	}

	.qa-img {
		width: 60rpx;
		height: 60rpx;
	}
</style>
