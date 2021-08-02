<script>
	export default {
		onLaunch: function() {
			//判断是否登录
			let user = this.$utils.getHistory('user')
			// console.log(user);
			if (user) {
				//获取该用户的购物车数量
				let car = uni.getStorageSync('carts' + user[0].nickName)
				if (car && car.length > 0) {
					// console.log(car.length);
					uni.setTabBarBadge({
						text: `${car.length}`,
						index: 3
					})
				}
			}
		},
		onShow: function() {
		},
		onHide: function() {}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	@import 'styles/common.scss';
	@import 'styles/uni.scss';
</style>
