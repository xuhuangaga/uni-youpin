<template>
	<view class="m-t10 bc-w p-10">
		<view v-if="!info.comment.index" class="f-size14 f-w-bold">
			暂无评价
		</view>
		<view class="flex-j-between a-center m-t-b20" @click="more" v-else>
			<view class="f-w-bold m-r10 f-size14">
				用户评价({{info.comment.index.total_count}})
			</view>
			<view class="flex-a-center">
				<view class="f-c-9 f-size12">
					{{info.comment.index.positive_rate}}%满意
				</view>
				<image src="../../../static/static/icon/arrow_right.png" class="del-yjt"></image>
			</view>
		</view>
		<view class="flex-a-center f-wrap" v-if="info.comment.index">
			<view v-for="(item,index) in info.comment.index.tags" :key="index" class="f-size12 tag-dv p-5 m-r10 m-b10"
				@click="change(item.id)">
				{{item.name}}({{item.count}})
			</view>
		</view>
		<scroll-view scroll-x="true" class="wbfb" v-if="info.comment.index">
			<view class="flex wbfb">
				<view v-for="(item,index) in info.comment.content" :key="index">
					<view class="flex-a-center m-t-b10 comm-dv">
						<view class="per-pic">
							<image class="per-pic" :src="item.avatar" v-if="item.avatar"></image>
							<image class="per-pic" src="../../../static/static/avatar_default.png" v-else></image>
						</view>
						<view class="p-l-r10 sl-one">
							{{item.nick_name}}
						</view>
						<u-rate v-model="item.score" active-color="#ffce55" :disabled="true"></u-rate>
					</view>
					<view class="lh30 sl-two comm-dv">
						{{item.text}}
					</view>
				</view>
				<view class="p-l-r20 m-auto-c" @click="more">
					<view>
						查看更多评价
					</view>
					<image src="../../../static/static/icon/arrow_right_circle.png" class="more m-t10"></image>
				</view>
			</view>
		</scroll-view>
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
			return {}
		},
		methods: {
			//点击评论标签
			change(id) {
				uni.navigateTo({
					url: `/pages/comment/comment?gid=${this.info.gid}&rate=${this.info.comment.index.positive_rate}&score=${this.info.comment.index.avg_score}&tagId=${id}`
				})
			},
			//点击查看更多评价
			more() {
				uni.navigateTo({
					url: `/pages/comment/comment?gid=${this.info.gid}&rate=${this.info.comment.index.positive_rate}&score=${this.info.comment.index.avg_score}`
				})
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
	.tag-dv {
		background: #fffbe2;
	}

	.per-pic {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
	}

	.comm-dv {
		width: 440rpx;
		margin-right: 40rpx;
	}

	.more {
		width: 30rpx;
		height: 30rpx;
	}
</style>
