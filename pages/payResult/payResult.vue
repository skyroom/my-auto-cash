<template>
	<view class="payResult-page-box page-box">
		<view class="sucess-info-box info-box" v-if="showSuccess">
			<view class="info-tip">
				<text class="xpos-font check">&#xe623;</text>
				<text class="ml10">支付成功</text>
			</view>
			<view class="mt20 button" @click="goIndexPageHandler" hover-class="hover-class">返回首页</view>
		</view>
		<view class="error-info-box info-box" v-if="showError">
			<view class="info-tip">
				<text class="xpos-font close">&#xe621;</text>
				<text class="ml10">支付失败</text>
			</view>
			<view class="mt20 button" hover-class="hover-class" @click="backHandler">重新支付</view>
		</view>
		<xpos-cancel :cancelDuration="cancelDuration"></xpos-cancel>
	</view>
</template>

<script>
	import xposCommonMixins from '../../components/xpos-common-mixins.vue';
	import xposCancel from '../../components/xpos-cancel.vue';
	
	export default {
		mixins: [xposCommonMixins],
		components: {
			xposCancel
		},
		data() {
			return {
				showError: false,
				showSuccess: true,
			};
		},
		methods: {
			goIndexPageHandler() {
				uni.reLaunch({
					url: '/pages/index/index'
				});
			},
			backHandler() {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		onHide() {
			this.stopCancelDuration();
		},
		onReady() {
			this.startCancelDuration();
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
