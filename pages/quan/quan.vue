<template>
	<view class="quan-page-box page-box" style="background: url(../../static/bgx.jpg);background-size:cover;">
		<view class="white-block-120"></view>
		
		<!-- 会员信息 -->
		<view class="vip-box">
			<view class="vip-top-con">
				<view class="vip-info-box">
					<view class="avatar-con">
						<image src="../../static/avatar.jpeg" mode="widthFix"></image>
					</view>
					<view class="vip-info">
						<view class="phone-con">
							<text class="phone">182XXXX1235</text>
						</view>
						<view class="sign-con">
							<text>普通会员</text>
						</view>
					</view>
				</view>
				<view class="logo">
					<image src="../../static/logo_s_orgin.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="vip-bottom-con">
				<view class="card-con">
					<text>卡号：</text>
					<text>123456789097</text>
				</view>
				<view class="jf-con">
					<text>积分：</text>
					<text>234</text>
				</view>
			</view>
		</view>
		
		<!-- 结算信息 -->
		<view class="js-info-con">
			<view class="title">
				<text>结算信息</text>
			</view>
			<view class="row-info">
				<text class="label">商品总额</text>
				<text class="value">1247.00</text>
			</view>
			<view class="row-info">
				<text class="label">商品数量</text>
				<text class="value">12</text>
			</view>
			<view class="row-info">
				<text class="label">活动优惠</text>
				<text class="value">12.00</text>
			</view>
			<view class="row-info">
				<text class="label">用券抵扣</text>
				<text class="value">12.00</text>
			</view>
			<view class="footer-con">
				<text class="label">应付金额</text>
				<text class="value">12.00</text>
			</view>
			<view class="pop-page"></view>
		</view>
		
		<!-- 取消交易按钮 -->
		<xpos-cancel></xpos-cancel>
	</view>
</template>

<script>
	import xposCommonMixins from '../../components/xpos-common-mixins.vue';
	import xposCancel from '../../components/xpos-cancel.vue';
	
	import xposQuanItem from '../../components/xpos-quan-item.vue';
	
	export default {
		mixins: [xposCommonMixins],
		components: {
			xposQuanItem,
			xposCancel
		},
		data() {
			return {
				items: [
					'未使用',
					'已使用',
					'已过期'
				],
				current: 0,
				activeColor: '#5eaf31',
				styleType: 'text',
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
			goPayTypePageHandler() {
				uni.navigateTo({
					url: '/pages/payType/payType'
				});
			},
			goChoosePageHandler() {
				uni.showModal({
					content: '确定要取消交易吗？',
					success: function (res) {
						if (res.confirm) {
							uni.navigateTo({
								url: '/pages/index/index'
							});
						} else if (res.cancel) {
							
						}
					}
				});
			},
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
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
	
	.quan-page-box {
		padding-top: var(--status-bar-height);
		.vip-box {
			background-color: #74AE47;
			border-radius: 50upx;
			padding: 20upx 50upx;
			margin: 0 20upx;
			color: #fff;
			.vip-top-con {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				.vip-info-box {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					height: 100upx;
					.avatar-con {
						image {
							width: 100upx;
							height: 100upx;
							border-radius: 100%;
							display: block;
						}
					}
					.vip-info {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						font-size: 27upx;
						height: 100%;
						margin-left: 10upx;
						.sign-con {
							flex: 1;
							background-color: #518241;
							padding: 3upx 30upx;
							border-radius: 50upx;
							box-sizing: border-box;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							.sign {
							}
						}
						.phone-con {
							flex: 1;
							.phone {
								
							}
						}
					}
				}
				.logo {
					image {
						width: 180upx;
					}
				}
			}
			.vip-bottom-con {
				font-size: 27upx;
				margin-top: 40upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			}
		}
		.js-info-con {
			background-color: #fff;
			width: 75%;
			margin: 70upx auto 0 auto;
			border-bottom-left-radius: 10upx;
			border-bottom-right-radius: 10upx;
			box-shadow:0upx 0upx 0upx transparent,   
					   0upx 0upx 0upx transparent,  
					   0upx 0upx 0upx transparent, 
					   0upx 10upx 50upx @loginBoxShadowColor;
			position: relative;
			.title {
				font-size: 40upx;
				font-weight: bold;
				line-height: 1.8;
				border-bottom: 1upx dashed #444;
				padding: 30upx 20upx 10upx 20upx;
			}
			.row-info {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding: 10upx 20upx;
				font-size: 32upx;
				color: #444;
				.label {
					
				}
				.value {
					
				}
			}
			.footer-con {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding: 20upx 20upx;
				font-size: 35upx;
				border-top: 1upx dashed #444;
				.value {
					color: #ea9945;
					font-size: 40upx;
				}
			}
			.pop-page {
				background-color: rgba(71, 158, 23, .7);
				width: 100%;
				height: 30upx;
				border-radius: 30upx;
				position: absolute;
				top: -18upx;
				transform: scale(1.1);
			}
		}
	}
</style>
