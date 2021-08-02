<template>
	<view>
		<top :isNavbar="true" :isBack="true" title=" " :borderBottom="borderBottom"></top>
		<view class="bc-e">
			<detailCom v-if="info" :info="info"></detailCom>
		</view>
	</view>
</template>

<script>
	import detailCom from '../../components/detail/details/details.vue'
	export default {
		components: {
			detailCom
		},
		props: {},
		data() {
			return {
				gid: '',
				info: null,
				borderBottom: false
			}
		},
		methods: {

			//获取数据
			getData() {
				this.$api.goods.detail(this.gid)
					.then(res => {
						// console.log(res);
						this.info = res.data
						//添加浏览记录
						this.$utils.saveHistory({
							key:'browser',
							data:this.info,
							item:'gid'
						})
					})
					.catch(err => {
						console.log(err);
					})
			}
		},
		mounted() {},
		onLoad(e) {
			// console.log(e);
			this.gid = e.gid
			this.getData()
		},
		onShow() {

		},
		filters: {},
		computed: {},
		watch: {},
	}
</script>

<style scoped lang="scss">
</style>
