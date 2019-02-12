<template>
	<view class="payResult-page-box page-box">
		<view class="user-img-con" v-if="showSuccess">
			<text class="xpos-font check">&#xe77e;</text>
			<text class="ml10">恭喜您，支付成功</text>
			<button class="mt20" @click="goIndexPageHandler" hover-class="hover-class">返回首页</button>
		</view>
		<view class="user-img-con" v-if="showError">
			<text class="xpos-font close">&#xe77d;</text>
			<text class="ml10">对不起，支付失败</text>
			<button class="mt20" hover-class="hover-class">重新支付</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showError: false,
				showSuccess: true,
			};
		},
		methods: {
			goIndexPageHandler() {
				uni.navigateTo({
					url: '/pages/index/index'
				});
			}
		}
	}
</script>

<style lang="less">
	.payResult-page-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #f8f8f8;
		.check,
		.close {
			font-size: 50upx;
			color: #5eaf31;
			vertical-align: text-top;
		}
		button {
			background-color: #5eaf31;
			color: #fff;
		}
	}
</style>
