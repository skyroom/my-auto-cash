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
	
	// const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert');
	const demoRichAlert = uni.requireNativePlugin('DCloud-demo');
	
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
				
// 				dcRichAlert.show({
// 					position: 'bottom',
// 					title: "提示信息",
// 					titleColor: '#FF0000',
// 					content: "<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> 是一个使用 Vue.js 开发跨平台应用的前端框架!\n免费的\n免费的\n免费的\n重要的事情说三遍",
// 					contentAlign: 'left',
// 					checkBox: {
// 						title: '不再提示',
// 						isSelected: true
// 					},
// 					buttons: [{
// 						title: '取消'
// 					}, {
// 						title: '否'
// 					}, {
// 						title: '确认',
// 						titleColor: '#3F51B5'
// 					}]
// 				}, result => {
// 					console.log(result)
// 				});

				demoRichAlert.removeScanListen((result) => {
					uni.showToast({
						title: '监听结束',
						duration: 2000
					});
				});
				
				
				return;
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
			demoRichAlert.startScanListen();
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
