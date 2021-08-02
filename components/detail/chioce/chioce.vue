<template>
	<view>
		<view class=" f-size12">
			<view class="bc-w p-10 m-t10">
				<view class="flex-j-between a-center m-t-b20" @click="tagShow=true">
					<view class="flex-a-center">
						<view class="f-c-9 m-r10">
							已选
						</view>
						<view class="f-c-9 m-l10">
							<text class="m-l10">
								<text v-for="(item,index) in chioceArr" :key="index">
									{{item.name}}
									<text v-if="index<chioceArr.length-1">,</text>
								</text>
								<text class="m-l10">x {{value}}</text>
							</text>
						</view>
					</view>
					<image src="../../../static/static/icon/arrow_right.png" class="del-yjt"></image>
				</view>
				<sendto :info="info"></sendto>
				<ser :info="info"></ser>
			</view>
			<view v-if="text" class="flex-j-between a-center m-t-b10 bc-w p-10" @click="jump(rankUrl)">
				<view class="flex-a-center">
					<image src="../../../static/static/jiangbei.png" class="jiangb"></image>
					<view class="f-w-bold m-lr10 f-size20">
						排行榜
					</view>
					<view class="f-size14">{{text}}</view>
				</view>
				<image src="../../../static/static/icon/arrow_right.png" class="del-yjt"></image>
			</view>
			<comment :info="info"></comment>
			<qa :info="info"></qa>
			<recommend></recommend>
			<shop :info="info"></shop>
			<bottom :info="info"></bottom>
		</view>
		<!-- 底部规格弹出层 -->
		<u-popup v-model="tagShow" border-radius="14" mode="bottom" height="900">
			<view class="flex-a-center">
				<view class="p-10">
					<image :src="info.goods.goodsInfo.picUrl" class="tag-pic"></image>
				</view>
				<view>
					<view class="price f-w-bold f-size20">
						￥{{info.goods.goodsInfo.priceMin/100}}
					</view>
					<view class="f-c-9">
						已选 :<text class="m-l10">
							<text v-for="(item,index) in chioceArr" :key="index">
								{{item.name}}
								<text v-if="index<chioceArr.length-1">,</text>
							</text>
							<text class="m-l10">x {{value}}</text>
						</text>
					</view>
				</view>
			</view>
			<view v-for="(item,index) in info.goods.shopTags" :key="index" class="p-10">
				<view class="f-c-9 m-b10">
					{{item.name}}
				</view>
				<view class="flex-a-center f-wrap">
					<view class="m-r10 p-10 active1" v-for="(item1,index1) in item.tags" :key="index1"
						@click="change(index,index1,item1.name)" :class="{'active':check(index,index1)}">
						{{item1.name}}
					</view>
				</view>
			</view>
			<view class="flex-j-between a-center p-10">
				<view class="f-c-9">
					数量
				</view>
				<view class="">
					<u-number-box :min="1" v-model="value" @change="valChange"></u-number-box>
				</view>
			</view>
			<view class="m-t20">
				<u-button type="success" @click="sure(false)">确定</u-button>
			</view>
		</u-popup>
		<login :show="show" @loginOk="loginOk"></login>
		<!-- 底部 -->
		<tabbar @sure="sure" :num="num"></tabbar>
	</view>
</template>

<script>
	import dayjs from 'dayjs'
	import comment from '../comment/comment.vue'
	import sendto from './sendto.vue'
	import ser from './service.vue'
	import qa from '../qa/qa.vue'
	import recommend from '../recommend/recommend.vue'
	import shop from '../shop/shop.vue'
	import bottom from '../bottom/bottom.vue'
	import login from '../../h5login/h5login.vue'
	import tabbar from '../tabbar/tabber.vue'
	export default {
		components: {
			comment,
			sendto,
			ser,
			qa,
			recommend,
			shop,
			bottom,
			login,
			tabbar
		},
		props: {
			info: {
				type: Object
			},
			//购物车数量
			num: {
				type: Number
			}
		},
		data() {
			return {
				//数量
				value: 1,
				//底部弹出层是否显示
				tagShow: false,
				//排行显示文字
				text: '',
				//排行榜跳转路径
				rankUrl: '',
				//选中的规格
				active: 0,
				chioceArr: [],
				//登录弹出层是否显示
				show: false
			}
		},
		methods: {
			//登录成功子组件login分发事件
			loginOk(show) {
				this.show = show
			},
			//选择规格后点击确定
			sure(isbuy) {
				//判断是否登录  未登录提示用户登录  已登录加入购物车
				let user = this.$utils.getHistory('user')
				if (!user || user.length === 0) {
					//h5登录
					// #ifndef MP-WEIXIN
					uni.showToast({
						title: '请先登录',
						icon: 'none'
					})
					this.show = true
					// #endif

					// 小程序登录
					// #ifdef MP-WEIXIN
					// 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
					wx.getUserProfile({
						desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
						success: (res) => {
							//存本地 和 vuex
							this.$utils.saveHistory({
								key: 'user',
								data: res.userInfo,
								item: 'nickName'
							})
							this.$store.commit('setUser', res.userInfo)
							uni.showToast({
								title: '登录成功'
							})
						}
					})
					// #endif
				} else {
					if (!isbuy) {
						//加入购物车
						this.addCarts(user[0].nickName)
					} else {
						//立即购买
						let source = this.info
						let totalMoney = (source.goods.goodsInfo.priceMin * this.value) / 100
						//选择的规格
						this.$set(source, 'guige', this.chioceArr)
						//选择的数量
						this.$set(source, 'number', this.value)
						let arr = []
						// console.log(user.nickName);
						let orders = uni.getStorageSync('orders' + user[0].nickName)
						if (orders) {
							arr = orders
						}
						// console.log(arr);
						let data = []
						data.push(source)
						arr.push({
							data: data,
							// 支付时间
							payTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
							// 结算金额
							totalMoney: totalMoney
						})
						uni.setStorageSync('orders' + user[0].nickName, arr)
						uni.showToast({
							title: `成功支付${totalMoney}元`,
							icon: 'none'
						})
					}
				}
			},
			//加入购物车操作
			addCarts(nickName) {
				//加入购物车
				let source = this.info
				//选择的规格
				this.$set(source, 'guige', this.chioceArr)
				//选择的数量
				this.$set(source, 'number', this.value)
				//是否选中
				this.$set(source, 'checked', false)
				//商品处理  同一个商品count要累加
				//获取该用户所有的购物车数据
				let carsData = uni.getStorageSync('carts' + nickName)
				let flag = false
				// console.log(uni.getStorageSync('carts' + nickName));
				if (carsData) {
					carsData.map(item => {
						if (item.gid === this.info.gid) {
							let count = 0
							this.chioceArr.map(item1 => {
								let temp = item.guige.some(item2 => {
									return item2.name === item1.name
								})
								if (temp) count++
							})
							if (count === this.chioceArr.length) {
								this.flag = true
								item.number = item.number + this.value
							}
						}
					})
				} else {
					carsData = []
				}
				if (!this.flag) {
					carsData.unshift(this.info)
				}
				// console.log(carsData);
				uni.setStorageSync('carts' + nickName, carsData)
				uni.showToast({
					title: '加入购物车成功',
					icon: 'none'
				})
				this.$emit('changeNum', carsData.length)
				this.tagShow = false
			},
			//步进器选择
			valChange(e) {
				this.value = e.value
				// console.log('当前值为: ' + e.value)
			},
			check(index, index1) {
				return this.chioceArr.some(item => {
					return item.i === index && item.i1 === index1
				})
			},
			//选择规格
			change(index, index1, name) {
				//去重
				this.chioceArr = this.chioceArr.filter(item => {
					return item.i !== index
				})
				this.chioceArr.push({
					i: index,
					i1: index1,
					name: name
				})
			},
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
			//获取排行榜
			getRanking() {
				this.$api.goods.composeTwo(this.info.gid)
					.then(res => {
						// console.log(res);
						if (res[1].data) {
							this.text = res[1].data.text
							this.rankUrl = res[1].data.baseInfo.jumpUrl
						}
					})
					.catch(err => {
						console.log(err);
					})
			}
		},
		mounted() {
			// console.log(this.info);
			this.info.goods.shopTags.map((item, index) => {
				// console.log(item);
				this.chioceArr.push({
					i: index,
					i1: 0,
					name: item.tags[0].name
				})
			})
			// console.log(this.chioceArr);
			this.getRanking()
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
	.ser-dv {
		width: 640rpx;
	}

	.jiangb {
		width: 60rpx;
		height: 60rpx;
	}

	.tag-pic {
		width: 300rpx;
		height: 300rpx;
	}

	.active {
		border: 1px solid red !important;
	}

	.active1 {
		border: 1px solid #fff;
	}
</style>
