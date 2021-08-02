<template>
	<view>
		<view class="p-10 bc-w br-20 z m-lr10 my-con-o-dv bc-w">
			<view class="flex-j-between a-center">
				<view class="flex-j-center a-center">
					<u-checkbox-group>
						<u-checkbox v-model="allChecked" @change="allCheckedCli"></u-checkbox>
					</u-checkbox-group>
					<view class="f-size16 f-w-bold">微淘精选</view>
				</view>
				<view class="flex-j-center a-center">
					<u-image width="20" height="20"></u-image>
					<view class="f-size12 f-c-9 m-l10">
						满99元免运费
					</view>
				</view>
			</view>
			<view v-for="(item,index) in list" :key="index" class="p-tb10 flex-a-center">
				<view class="">
					<u-checkbox-group>
						<u-checkbox v-model="item.checked" :disabled="false" @change="check"></u-checkbox>
					</u-checkbox-group>
					<!-- <input v-model="item.checked" type="checkbox"/> -->
				</view>
				<view class="flex-j-center a-center" @click="jump(item.gid)">
					<u-image :src="item.goods.goodsInfo.picUrl" width="200" height="200"></u-image>
					<view class="">
						<view class="ser-gname sl-one">{{item.goods.goodsInfo.name}}</view>
						<view class="m-t20 m-b10">
							<text v-for="(item1,index1) in item.guige" :key="index1">{{item1.name}}
								<text v-if="index1<item.guige.length-1" class="m-lr5">+</text>
							</text>
						</view>
						<view class="flex-j-between a-center">
							<view class="price f-w-bold f-size16 m-r10">
								￥{{item.goods.goodsInfo.priceMin/100}}
							</view>
							<view class="m-l10">
								<u-number-box :min="1" v-model="item.number" @change="valChange(index,item.number)"></u-number-box>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="flex-j-end t-a-center m-t20">
				<view class="">
					总金额：
				</view>
				<view class="price f-size16 m-r20">
					￥{{(totalMoney/100).toFixed(2)}}
				</view>
				<view class="f-c-w car-btn" @click="del">
					删除
				</view>
				<view class="f-c-w car-btn m-l10" @click="buy">
					立即购买
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			list: {
				type: Array,
			}
		},
		data() {
			return {
				//全选
				allChecked: false,
			}
		},
		methods: {
			//跳转到详情
			jump(gid) {
				this.$utils.jumpDetail(gid)
			},
			//点击立即购买
			buy() {
				this.$emit('buy')
			},
			//点击删除
			del() {
				this.$emit('del')
			},
			//步进器选择
			valChange(index,number) {
				this.$emit('changeNum',index,number)
				// console.log('当前值为: ' + e.value)
			},
			//点击全选
			allCheckedCli() {
				this.$emit('allChecked', this.allChecked)
			},
			//点击全选下面的checkbox
			check() {
				this.allChecked = !this.list.every(item => {
					return item.checked
				})
			}
		},
		mounted() {
		},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {
			totalMoney() {
				let money = 0
				let checkedList = this.list.filter(item => {
					return item.checked
				})
				if (checkedList.length > 0) {
					checkedList.map(item => {
						money += item.goods.goodsInfo.priceMin * item.number
					})
				}
				return money
			}
		},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.ser-gname {
		width: 300rpx;
	}

	.car-btn {
		background: #ebc875;
		padding: 10rpx 20rpx;
		width: 160rpx;
	}
</style>
