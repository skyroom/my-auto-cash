<template>
	<view class="payResult-page-box page-box">
		<view class="sucess-info-box" v-if="showSuccess">
			<view class="info-tip">
				<text class="xpos-font check">&#xe77e;</text>
				<text class="ml10">恭喜您，支付成功</text>
			</view>
			<button class="mt20" @click="goIndexPageHandler" hover-class="hover-class">返回首页</button>
		</view>
		<view class="error-info-box" v-if="showError">
			<view class="info-tip">
				<text class="xpos-font close">&#xe77d;</text>
				<text class="ml10">对不起，支付失败</text>
			</view>
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
	@import '~@/common/var.less';
	.payResult-page-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #f8f8f8;
		.check,
		.close {
			font-size: 50upx;
		}
		.check {
			color: @theme-color;
		}
		.close {
			color: #fe0017;
		}
		button {
			background-color: @theme-color;
			color: #fff;
		}
		.info-tip {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
	}
</style>
