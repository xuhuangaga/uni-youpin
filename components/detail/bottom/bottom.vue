<template>
	<view class="m-t10 p-10 bc-w">
		<u-tabs :list="info.goods.goodsInfo.introExt" name="title" active-color="#817160" inactive-color="#999999"
			:is-scroll="false" :current="current" @change="change"></u-tabs>
		<view class="ft m-t10">
			<view v-for="(item,index) in info.goods.goodsInfo.introExt[current].imagesArray" :key="index">
				<image :src="item" class="wbfb"></image>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			info: {
				type: Object
			}

		},
		data() {
			return {
				current: 0
			}
		},
		methods: {
			change(index) {
				this.current = index;
			}
		},
		mounted() {
			// console.log(this.info);
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

</style>
