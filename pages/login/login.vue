<template>
	<view class="login-page-box page-box" style="background: url(../../static/bgx.jpg);background-size:cover;">
		<view class="login-con">
			<view class="top">
				<view class="qr-img-con">
					<image src="../../static/qr.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="bottom">
				<view class="title">
					微信扫码享受会员权益
				</view>
				<view class="button" @click="goBackPageHandler" hover-class="hover-class">返回</view>
				<!-- <view class="mask mask-left"></view> -->
				<!-- <view class="mask mask-right"></view> -->
			</view>
			<view class="pop-page"></view>
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
			};
		},
		methods: {
			goBackPageHandler() {
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
	@backgroundColor: linear-gradient(top, #6de42b, #479e17);
	// @backgroundColor: #58be20;
	@loginBoxShadowColor: #444;
	
	.login-page-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: @backgroundColor;
		.login-con {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: #fff;
			height: 70%;
			width: 75%;
			border-bottom-left-radius: 10upx;
			border-bottom-right-radius: 10upx;
			box-shadow:0upx 0upx 0upx transparent,   
                       0upx 0upx 0upx transparent,  
                       0upx 0upx 0upx transparent, 
                       0upx 10upx 50upx @loginBoxShadowColor;
			position: relative;
			.title {
				text-align: center;
				font-size: 35upx;
				color: #333;
				font-weight: 700;
			}
			.top {
				flex: 1;
				width: 100%;
				padding: 20upx;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
// 				background-image: radial-gradient(circle at left bottom, #54B61E, #54B61E 15upx, transparent 16upx),
// 								radial-gradient(circle at right bottom, red, red 15upx, transparent 16upx);
				background-color: #fff;
				.title {
					padding: 20upx 0;
				}
				.qr-img-con {
					box-sizing: border-box;
					padding: 60upx;
					width: 100%;
					flex: 1;
					display: flex;
					justify-content: center;
					align-items: center;
					image {
						width: 100%;
					}
				}
			}
			.bottom {
				width: 100%;
				height: 250upx;
				border-top: 1px dashed #ddd;
				padding: 20upx;
				box-sizing: border-box;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				position: relative;
				view {
					width: 100%;
				}
				.title {
					margin-bottom: 10%;
				}
				.mask {
					position: absolute;
					width: 40upx;
					height: 40upx;
					background-color: @backgroundColor;
					border-radius: 40upx;
					&.mask-left {
						top: -20upx;
						left: -20upx;
					}
					&.mask-right {
						top: -20upx;
						right: -20upx;
					}
				}
			}
			.pop-page {
				background-color: rgba(71, 158, 23, .7);
				width: 110%;
				height: 30upx;
				border-radius: 30upx;
				position: absolute;
				top: -18upx;
			}
		}
	}
</style>
