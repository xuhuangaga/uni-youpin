<template>
  <view class="flex-j-around a-center p-10">
    <image v-for="(item,index) in proList" @click="jump(item.item.jump_url)" :key="index" :src="item.item.pic_url" class="g-pic"></image>
  </view>

</template>

<script>
  export default {
    components: {},
    props: {
		proList:{
			type:Array
		}
	},
    data() {
      return {}
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
	},
    mounted() {
	// console.log(this.proList);
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
.g-pic {
	width: 230rpx;
	height:230rpx
}
</style>
