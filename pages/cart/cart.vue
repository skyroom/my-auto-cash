<template>
	<view class="cart-page-box page-box" style="background: url(../../static/bgx.jpg);background-size:cover;">
		<scroll-view 
			class="goods-scroll" 
			scroll-y="scrollY">
			<view class="goods-item-box">
				<view class="member-info">
					<view class="user-name-con">
						<text class="title">会员：</text>
						<text class="user-name-text">张三张三是</text>
					</view>
				</view>
				<block v-for="(goods, index) in merchantGoodsList" :key="index">
					<view :class="{ 'goods-item': true, 'first-goods': index == 0 && goodsItemMove}">
						<view class="goods-item-con">
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
					</view>
					<view class="white-block"></view>
				</block>
				
			</view>
			<view class="order-detail-fixed">
				<view class="order-detail-con">
					<view class="order-detail-left">
						<view class="left-top" @click="showGoodsPopHandler">
							<text class="total-price">¥90.90</text>
							<text class="total-amount">(共<text>5</text>件)</text>
						</view>
						<view class="left-bottom">
							<text class="yh">已优惠：<text>¥17.70</text></text>
						</view>
					</view>
					<view class="order-detail-right">
						<view class="quan" hover-class="hover-class" @click="openQuanHandler">
							<text class="xpos-font">&#xe6b8;</text>
						</view>
						<view class="confirm-order-btn" hover-class="hover-class" @click="openPayTypeHandler">
							<text>确认付款</text>
						</view>
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
		<view :class="{'goods-pop-box':true, 'goods-pop-move': goodsPopMove}" v-if="showGoodsPop" :animation="goodsPopAnimationData">
			<view class="goods-img-pop">
				<image src="../../static/kele.png" mode="scaleToFill"></image>
			</view>
			<view class="goods-title-pop">
				我是商品名称
			</view>
			<view class="goods-price-pop">
				¥22.00
			</view>
		</view>
		<xpos-cancel :cancelDuration="cancelDuration"></xpos-cancel>
	</view>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	import xposPopup from '../../components/xpos-popup.vue';
	import xposQuanItem from '../../components/xpos-quan-item.vue';
	import xposCommonMixins from '../../components/xpos-common-mixins.vue';
	import xposCancel from '../../components/xpos-cancel.vue';
	
	export default {
		mixins: [xposCommonMixins],
		components: {
			xposPopup,
			xposQuanItem,
			xposCancel
		},
		data() {
			return {
				showPopupBottom: false,
				popType: 'bottom',
				scrollY: true,
				showPayTypePop: false,
				showGoodsPop: false,
				goodsPopAnimationData: '',
				goodItemAnimationData: [],
				windowWidth: '',
				windowHeight: '',
				statusBarHeight: '',
				translateX: '',
				translateY: '',
				goodsPopMove: false,
				goodsItemMove: false,
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
				'addGoodsIntoList',
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
			},
			showGoodsPopHandler() {
				this.showGoodsPop = true;
				setTimeout(() => {
					this.goodsPopMove = true;
					setTimeout(() => {
						this.showGoodsPop = false;
						this.goodsPopMove = false;
						this.addGoodsHandler();
					}, 200);
				}, 500);
			},
			addGoodsHandler() {
				this.addGoodsIntoList();
				this.goodsItemMove = true;
				setTimeout(() =>{
					this.goodsItemMove = false;
				}, 200);
			},
		},
		onLoad() {
			console.log('cart onLoad');
			this.getMerchantGoodsList()
			.then((data) => {
				// console.log('data is', JSON.stringify(data));
			});
		},
		onUnload(){
			console.log('cart onUnload');
		},
		onHide() {
			console.log('cart onHide');
			this.stopCancelDuration();
		},
		onReady() {
			this.startCancelDuration();
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
		position: relative;
		.goods-scroll {
			height: 100%;
		}
		.goods-item-box {
			padding-top: var(--status-bar-height);
			padding-bottom: 150upx;
			.member-info {
				padding-bottom: 30upx;
				.user-name-con {
					background: linear-gradient(left, #6de42b, #479e17);
					// background-color: #479e17;
					display: inline-block;
					padding: 20upx 40upx 20upx 40upx;
					border-bottom-right-radius: 35upx; 
					border-top-right-radius: 35upx; 
					color: #fff;
					font-size: 30upx;
				}
			}
			.goods-item {
				background-color: #fff;
				border-radius: 10upx;
				margin-left: 20upx;
				margin-right: 20upx;
				position: relative;
				transition: all .5s linear;
				box-sizing: border-box;
				height: 200upx;
				overflow: hidden;
				transform-origin: top center;
				&.first-goods {
					opacity: 0.1;
					height: 0;
					transform: scale(.1, .1);
					animation: goodItemMove .2s linear;
				}
				.goods-item-con {
					padding: 20upx;
					box-sizing: border-box;
					height: 100%;
					.goods-item-title-con {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						box-sizing: border-box;
						height: 60upx;
						.goods-item-title {
							font-size: 35upx;
							color: #000;
						}
						.delete {
							font-size: 50upx;
						}
					}
					.goods-item-yh {
						height: 40upx;
						padding-bottom: 10upx;
						font-size: 30upx;
						display: flex;
						justify-content: flex-start;
						align-items: center;
					}
					.goods-item-other {
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: flex-start;
						height: 50upx;
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
		}
		.order-detail-fixed {
			position: fixed;
			bottom: 0;
			right: 0;
			left: 0;
			background-color: #479e17;
			height: 120upx;
			box-sizing: border-box;
			/* box-shadow: darkgrey 0 0 25upx 5upx; */
			// border-top: 2px solid #5eaf31;
			.order-detail-con {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding: 10upx 20upx 10upx 20upx;
				height: 100%;
				box-sizing: border-box;
				.order-detail-left {
					font-size: 30upx;
					box-sizing: border-box;
					height: 100%;
					.left-top {
						height: 60%;
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: baseline;
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
						height: 40%;
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;
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
					box-sizing: border-box;
					height: 100%;
					.confirm-order-btn {
						background: linear-gradient(left, #fd7853, #f45162);
						padding-left: 65upx;
						padding-right: 65upx;
						margin-left: 40upx;
						font-size: 35upx;
						color: #fff;
						height: 80%;
						box-sizing: border-box;
						border-radius: 50upx;
						line-height: 80%;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: row;
					}
					.quan {
						display: flex;
						justify-content: center;
						align-items: center;
						text {
							color: #fff;
							font-size: 100upx;
							display: block;
						}
						height: 80%;
					}
				}
			}
		}
		/* 优惠券样式 */
		.quan-box {
			height: 600upx;
			background-color: #f5f5f5;
			box-sizing: border-box;
			border-top-left-radius: 20upx;
			border-top-right-radius: 20upx;
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
		.goods-pop-box {
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-end;
			position: absolute;
			width: 400upx;
			height: 400upx;
			border-radius: 10upx;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			// margin: -200upx 0 0 -200upx;
			// transform: translate(-50%, -50%);
			z-index: 999;
			background-color: #fff;
			box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
			padding: 10upx;
			// transform-origin: top left;
			transition: all .2s linear;
			&.goods-pop-move {
				top: -50%;
				// left: -45%;
				opacity: .1;
				transform: scale(.5, .5);
				// animation: popmove .5s linear;
			}
			.goods-img-pop {
				width: 100%;
				flex: 1;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.goods-title-pop {
				color: #333;
				font-size: 35upx;
				line-height: 2;
			}
			.goods-price-pop {
				color: #ff8b09;
				font-size: 35upx;
				line-height: 2;
			}
		}
		
		@keyframes popmove
		{
			from {
				top: 0;
				left: 0;
				opacity: 1;
				transform: scale(1, 1);
			}
			to {
				top: -50%;
				left: -45%;
				opacity: .1;
				transform: scale(.5, .5);
			}
		}
		@keyframes goodItemMove
		{
			from {
				opacity: .1;
				height: 0;
				transform: scale(.1, .1);
			}
			to {
				height: 200upx;
				opacity: 1;
				transform: scale(1, 1);
			}
		}
	}
</style>
