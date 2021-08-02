<template>
	<view>
		<u-mask :show="show" @click="show = false">
			<view class="warp">
				<view class="rect" style="margin-top: 400rpx;" @tap.stop>
					<swiper class="detail-img" :current="current" indicator-dots="true" circular="true" interval="3500" duration="500">
						<swiper-item v-if="videoUrl[0]" class="wbfb detail-img">
							<video id="myVideo" class="wbfb  detail-img" :src="videoUrl[0].url" :autoplay="autoplay"
								controls="false" objectFit="cover" @click="isPlay" @pause="ZhanTing"
								@ended="ZhanTing"></video>
						</swiper-item>
						<swiper-item @tap="BoFang" class="wbfb" v-for="(item,index) in imgList" :key="index">
							<image :src="item.url" mode="aspectFill" class="wbfb  detail-img"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</u-mask>
		<view class="detail-img d-img-dv">
			<swiper class="detail-img" indicator-dots="true" circular="true" interval="3500" duration="500" :current="current" @click="show=true"  @change="change">
				<swiper-item v-if="videoUrl[0]" class="wbfb detail-img">
					<video id="myVideo" class="wbfb  detail-img" :src="videoUrl[0].url" :autoplay="autoplay"
						controls="false" objectFit="cover" @click="isPlay" @pause="ZhanTing" @ended="ZhanTing"></video>
				</swiper-item>
				<swiper-item @tap="BoFang" class="wbfb" v-for="(item,index) in imgList" :key="index">
					<image :src="item.url" mode="aspectFill" class="wbfb  detail-img"></image>
				</swiper-item>
			</swiper>
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
				autoplay: false,
				videoContext: null,
				//详情图
				imgList: [],
				//视频路径
				videoUrl: [],
				show: false,
				//轮播所在滑动的index
				current:0
			}
		},
		methods: {
			//轮播图切换事件
			change(e){
			this.current=e.detail.current	
			},
			isPlay() {
				if (!this.autoplay) {
					this.autoplay = true;
					this.videoContext.play();
				} else
					this.videoContext.pause()
			},
			BoFang() {
				if (!this.autoplay) {
					this.autoplay = true;
					this.videoContext.play();
				}
			},
			ZhanTing() {
				if (this.autoplay == true) {
					this.autoplay = false
				}
			},
			//获取数据
			getData() {
				this.videoUrl = this.info.goods.carouselMapList.filter(item => {
					return item.type
				})
				this.imgList = this.info.goods.carouselMapList.filter(item => {
					return !item.type
				})
			}
		},
		mounted() {
			//获取数据
			this.getData()
			// #ifndef MP-ALIPAY
			this.videoContext = uni.createVideoContext('myVideo')
			// #endif
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
	.detail-img {
		height: 500rpx !important;
	}

	.d-img-dv {
		/* #ifdef MP-WEIXIN */
		margin-top: -85rpx;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		margin-top: -88rpx;
		/* #endif */
	}
</style>
