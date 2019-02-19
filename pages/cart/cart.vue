<template>
	<view class="cart-page-box page-box" style="background: url(../../static/bgx.jpg);background-size:cover;">
		<scroll-view 
			class="goods-scroll" 
			scroll-y="scrollY">
			<view class="goods-item-box">
				<view class="back-con">
					<button class="cancel-btn" hover-class="hover-class" @click="goChoosePageHandler">取消交易(<text>120</text>秒)</button>
				</view>
				<block v-for="(goods, index) in merchantGoodsList" :key="index" >
					<view class="goods-item">
						<view class="goods-item-title-con">
							<text class="goods-item-title" v-text="goods.name"></text>
							<view class="xpos-font delete ysaaa" hover-class="hover-class">&#xe67e;</view>
						</view>
						<view class="goods-item-yh ysaaa">
							<text v-if="goods.showYh">
								优惠
								<text>¥0.80</text>
							</text>
						</view>
						<view class="goods-item-other">
							<text class="price-now ysaaa" v-text="goods.dj"></text>
							<view class="amount">
								<view class="xpos-font minus" hover-class="hover-class">&#xe780;</view>
								<text class="number" v-text="goods.amount"></text>
								<view class="xpos-font plus" hover-class="hover-class">&#xe781;</view>
							</view>
							<view class="sum-price" v-text="goods.hj"></view>
						</view>
					</view>
				</block>
			</view>
			<view class="order-detail-fixed">
				<!-- <view class="user-name-con">
					<text class="title">会员：</text>
					<text class="user-name-text">张三张三是</text>
				</view> -->
				<view class="order-detail-con">
					<view class="order-detail-left">
						<view class="left-top">
							<text class="total-price">¥90.90</text>
							<text class="total-amount">(共<text>5</text>件)</text>
						</view>
						<view class="left-bottom">
							<text class="yh">已优惠：<text>¥17.70</text></text>
						</view>
					</view>
					<view class="order-detail-right">
						<view class="xpos-font quan" hover-class="hover-class" @click="openQuanHandler">&#xe6b8;</view>
						<button class="confirm-order-btn" hover-class="hover-class" @click="openPayTypeHandler">确认付款</button>
					</view>
				</view>
			</view>
		</scroll-view>
		<xpos-popup
			:show="showPopupBottom"
			:type="popType"
			@hidePopup="hidePopup"
			>
			<scroll-view class="quan-box" scroll-y>
				<view class="quan-con">
					<xpos-quan-item></xpos-quan-item>
					<view class="white-block"></view>
					<xpos-quan-item></xpos-quan-item>
					<view class="white-block"></view>
					<xpos-quan-item :isUnuse="true"></xpos-quan-item>
					<view class="white-block"></view>
					<xpos-quan-item :isUnuse="true"></xpos-quan-item>
				</view>
			</scroll-view>
		</xpos-popup>
		<xpos-popup
			:show="showPayTypePop"
			type="middle"
			@hidePopup="hidePayTypePopup"
			>
			<view class="paytype-box">
				<view class="smzf-con">
					<text class="xpos-font">&#xe612;</text>
				</view>
				<view class="paytype-text" hover-class="hover-class" @click="goPayResultPageHandler">请扫描微信或支付宝支付码完成支付</view>
			</view>
		</xpos-popup>
	</view>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	import xposPopup from '../../components/xpos-popup.vue';
	import xposQuanItem from '../../components/xpos-quan-item.vue';
	import globalTimer from '../../components/global-timer.vue';
	
	export default {
		mixins: [globalTimer],
		components: {
			xposPopup,
			xposQuanItem
		},
		data() {
			return {
				showPopupBottom: false,
				popType: 'bottom',
				scrollY: true,
				showPayTypePop: false,
			};
		},
		computed: {
			...mapGetters([
				'merchantGoodsList',
			]),
		},
		methods: {
			...mapActions([
				'getMerchantGoodsList',
			]),
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
			openQuanHandler() {
				this.showPopupBottom = true;
				this.scrollY = false;
			},
			hidePopup() {
				this.showPopupBottom = false;
				this.scrollY = true;
			},
			openPayTypeHandler() {
				this.showPayTypePop = true;
				this.scrollY = false;
			},
			hidePayTypePopup() {
				this.showPayTypePop = false;
				this.scrollY = true;
			},
			goPayResultPageHandler() {
				uni.navigateTo({
					url: '/pages/payResult/payResult'
				});
			}
		},
		onLoad() {
			this.getMerchantGoodsList()
			.then((data) => {
				// console.log('data is', JSON.stringify(data));
			});
		},
		onHide() {
			clearTimeout(this.gTimer);
			console.log('cart onHide');
		}
	}
</script>

<style lang="less">
	@import '~@/common/var.less';
	.cart-page-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.goods-scroll {
			height: 100%;
		}
		.goods-item-box {
			padding-top: var(--status-bar-height);
			padding-bottom: 150upx;
			.back-con {
				text-align: right;
				padding-top: 25upx;
				padding-right: 20upx;
				padding-bottom: 25upx;
				.cancel-btn {
					color: #fff;
					border: 1px solid #fff;
					display: inline-block;
					background-color: transparent;
					font-size: 28upx;
				}
			}
			.goods-item {
				background-color: #fff;
				border-radius: 10upx;
				margin-left: 20upx;
				margin-right: 20upx;
				padding: 30upx;
				position: relative;
				margin-bottom: 20upx;
				.goods-item-title-con {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					.goods-item-title {
						font-size: 35upx;
						color: #000;
					}
					.delete {
						font-size: 35upx;
					}
				}
				.goods-item-yh {
					font-size: 30upx;
					height: 40upx;
				}
				.goods-item-other {
					padding-top: 5upx;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					.price-now {
						flex: 1;
					}
					.amount {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						.minus,
						.plus {
							font-size: 50upx;
							color: @theme-color;
						}
						.number {
							color: #ea9945;
							margin-left: 5upx;
							margin-right: 5upx;
							text-align: center;
							width: 50upx;
						}
					}
					.sum-price {
						font-weight: 500;
						color: #ea9945;
						flex: 1;
						text-align: right;
					}
				}
			}
		}
		.order-detail-fixed {
			position: fixed;
			bottom: 0;
			right: 0;
			left: 0;
			background-color: #479e17;
			/* box-shadow: darkgrey 0 0 25upx 5upx; */
			// border-top: 2px solid #5eaf31;
			.user-name-con {
				background: linear-gradient(left, #6de42b, #5daf30);
				display: inline-block;
				padding: 20upx 40upx 20upx 40upx;
				border-bottom-right-radius: 35upx; 
				border-top-right-radius: 35upx; 
				color: #fff;
				font-size: 30upx;
			}
			.order-detail-con {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding: 20upx 20upx 20upx 20upx;
				.order-detail-left {
					font-size: 30upx;
					.left-top {
						.total-price {
							color: #ff8b09;
							font-size: 45upx;
							font-weight: 700;
						}
						.total-amount {
							margin-left: 20upx;
							color: #ff8b09;
							font-size: 27upx;
						}
					}
					.left-bottom {
						.yh {
							color: #fff;
							font-size: 27upx;
						}
					}
				}
				.order-detail-right {
					display: flex;
					justify-content: flex-end;
					align-items: center;
					flex-direction: row;
					button {
						font-size: 35upx;
						color: #fff;
					}
					.confirm-order-btn {
						background: linear-gradient(left, #fd7853, #f45162);
						padding-left: 65upx;
						padding-right: 65upx;
						margin-left: 40upx;
					}
					.quan {
						color: #fff;
						font-size: 90upx;
					}
				}
			}
		}
		/* 优惠券样式 */
		.quan-box {
			height: 600upx;
			background-color: #f5f5f5;
			box-sizing: border-box;
			.quan-con {
				padding: 20upx;
			}
		}
		.paytype-box {
			padding: 0 30upx;
			.paytype-text {
				line-height: 1.5;
				font-size: 35upx;
				color: #333;
			}
			.smzf-con {
				font-size: 150upx;
				text-align: center;
				color: #FF6B01;
			}
		}
	}
</style>
