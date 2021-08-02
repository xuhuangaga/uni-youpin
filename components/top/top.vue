<template>
	<view>
		<u-navbar :title="title" :border-bottom="borderBottom" :is-back="isBack" v-if="isNavbar" :background="{background:bgc}" :title-color="color"></u-navbar>
		<view v-else class="p-fixed top-v p-10 wbfb flex-a-center">
			<slot name="left"></slot>
			<slot name="right"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		props: {
			//导航栏标题
			title: {
				type: String
			},
			//是否有返回按钮
			isBack: {
				type: Boolean
			},
			//是否显示默认的导航栏组件
			isNavbar: {
				type: Boolean,
				default: false
			},
			//背景颜色
			bgc:{
				type:String,
				// default:'#ffffff'
			},
			//是否显示下边框
			borderBottom:{
				type:Boolean,
				default:true
			},
			//标题颜色
			color:{
				type:String
			}
		},
		data() {
			return {}
		},
		methods: {},
		mounted() {
			// console.log(this.borderBottom);
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
	.top-v {
		z-index: 999;
		background: #ff8569;
		/* #ifdef MP-WEIXIN */
		height: 120rpx !important;
		padding-top: 70rpx;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		height: 88rpx;
		/* #endif */
	}
</style>
