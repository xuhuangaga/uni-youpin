<template>
	<view class="flex-j-between a-center m-t-b20">
		<view class="flex-a-center sl-one ser-dv" @click="show=true">
			<view class="f-c-9 m-r10">
				服务
			</view>
			<view class="flex-a-center m-lr5 f-c-9" v-for="(item,index) in info.goods.services" :key="index">
				<image src="../../../static/static/icon/checkbox_check_hollowred.png" class="del-yjt"></image>
				<view>
					{{item.text}}
				</view>
			</view>
		</view>
		<image src="../../../static/static/icon/arrow_right.png" class="del-yjt"></image>
		<u-popup v-model="show" height="900" border-radius="14" mode="bottom" :closeable="true">
			<view class="p-10">
				<view class="flex-j-center m-t-b20">
					<view>
						说明
					</view>
				</view>
				<view v-for="(item,index) in info.serviceInfo.serviceList" :key="index" class="m-b10">
					<view class="flex">
						<image src="../../../static/static/icon/checkbox_check_hollowred.png" class="del-yjt"></image>
						<view class="m-l10 ser-d">
							<view class="">{{item.name}}</view>
							<view class="m-t-b5" v-for="(item1,index1) in item.descList">
								<view @click="clickImg" v-if="item1==='查看商家资质'">
									{{item1}}
								</view>
								<view v-else>
									{{item1}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</u-popup>
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
				//底部弹出层是否显示
				show: false,
				//资质图片
				urls:[]
			}
		},
		methods: {
			//点击查看资质
			clickImg() {
				uni.previewImage({
					urls:this.info.serviceInfo.qualificationPic, //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
					current: '', // 当前显示图片的http链接，默认是第一个
					success: function(res) {},
					fail: function(res) {},
					complete: function(res) {},
				})
			},
		},
		mounted() {
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
	.ser-d {
		width: 700rpx;
	}
</style>
