<template>
	<view class="cart-page-box page-box">
		sdd
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: "健力宝橙味汽水250ml"

			};
		},
		methods: {
			showActionHandler() {
				// console.log(0);
				uni.showActionSheet({
					itemList: ['A', 'B', 'C'],
					success: function (res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			showToastHandler() {
				uni.showToast({
					title: '标题',
					icon: 'success',
					duration: 2000
				});
			},
		},
	}
</script>

<style>
	.cart-page-box {
		background-image: url(../../static/bgx.jpg);
		background-size:cover;
	}
</style>
