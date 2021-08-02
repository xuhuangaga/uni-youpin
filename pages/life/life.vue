<template>
	<view>
		<image src="../../static/static/life_bg.png" class="wbfb" style="top:0;z-index: -1;"></image>
		<view class="tab-t">
			<view class="flex-j-center p-tb20">
				<image src="../../static/static/life_title.png" class="title"></image>
			</view>
			<tab v-if="data" :data="data"></tab>
		</view>
	</view>

</template>

<script>
	import tab from '../../components/life/tab/tab.vue'
	export default {
		components: {
			tab
		},
		props: {},
		data() {
			return {
				data:null
			}
		},
		methods: {
			//获取生活首页数据
			getData() {
				this.$api.life.bktrSimple()
					.then(res => {
						// console.log(res);
						this.data=res.data
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
	.title {
		width: 150rpx;
		height: 60rpx;
	}
	.tab-t {
		margin-top: -470rpx;
	}
</style>
