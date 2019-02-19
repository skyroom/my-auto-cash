<template>
	<view class="payResult-page-box page-box">
		<view class="sucess-info-box info-box" v-if="showSuccess">
			<view class="info-tip">
				<text class="xpos-font check">&#xe623;</text>
				<text class="ml10">支付成功</text>
			</view>
			<button class="mt20" @click="goIndexPageHandler" hover-class="hover-class">返回首页</button>
		</view>
		<view class="error-info-box info-box" v-if="showError">
			<view class="info-tip">
				<text class="xpos-font close">&#xe621;</text>
				<text class="ml10">支付失败</text>
			</view>
			<button class="mt20" hover-class="hover-class">重新支付</button>
		</view>
	</view>
</template>

<script>
	import globalTimer from '../../components/global-timer.vue';
	
	export default {
		mixins: [globalTimer],
		data() {
			return {
				showError: true,
				showSuccess: false,
			};
		},
		methods: {
			goIndexPageHandler() {
				uni.navigateTo({
					url: '/pages/index/index'
				});
			}
		},
		onHide() {
			clearTimeout(this.gTimer);
			console.log('payResult onHide');
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
		// background-color: #f8f8f8;
		.info-box {
			width: 80%;
		} 
		.check,
		.close {
			font-size: 200upx;
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
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-bottom: 100upx;
		}
	}
</style>
