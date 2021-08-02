<template>
	<view class="m-t20 p-t20">
		<view class="f-w-bold">
			更多工具
		</view>
		<view class="flex-a-center f-wrap a-center m-t10 tool-dv">
			<view class="t-a-center tools" v-for="(item,index) in list" :key="index">
				<image class="o-img" :src="item.url"></image>
				<view>
					{{item.name}}
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
				user: null,
				list: [{
						name: '我的钱包',
						url: '/static/static/user/qianbao.png',
						jumpUrl: ''
					},
					{
						name: '官方客服',
						url: '/static/static/user/kefu.png',
						jumpUrl: ''
					},
					{
						name: '用户反馈',
						url: '/static/static/user/yonghufankui.png',
						jumpUrl: '',
					},
					{
						name: '资质证照',
						url: '/static/static/user/zizhizhengzhao.png',
						jumpUrl: ''
					},
					{
						name: '协议规则',
						url: '/static/static/user/xieyiguize.png',
						jumpUrl: ''
					},
					{
						name: '线下门店',
						url: '/static/static/user/xianxiamendian.png',
						jumpUrl: ''
					},
					{
						name: '更新日志',
						url: '/static/static/user/update.png',
						jumpUrl: ''
					}
				]
			}
		},
		methods: {},
		mounted() {

		},
		onLoad() {

		},
		onShow() {
			let vx = this.$store.state.user
			vx ? this.user = vx[0] : this.user = null
		},
		filters: {},
		computed: {
		},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.tool-dv {
		.o-img {
			width: 80rpx;
			height: 80rpx;
		}
		.tools {
			width: 160rpx;
			height: 160rpx;
		}
	}
</style>
