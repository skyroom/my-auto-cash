<template>
	<view :class="['quan-page-box', 'page-box', theme + '-quan']">
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
		<view class="js-info-box">
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
					<view class="select-btn-con">
						<view class="dk-price">-500.00</view>
						<view class="select-btn" hover-class="hover-class" @click="openQuanHandler">
							选
						</view>
					</view>
				</view>
				<view class="footer-con">
					<text class="label">应付金额</text>
					<text class="value">12.00</text>
				</view>
				<view class="pop-page"></view>
			</view>
		</view>
		
		<!-- 取消交易按钮 -->
		<xpos-cancel></xpos-cancel>
		
		<!-- 优惠券 -->
		<xpos-popup
			:show="showPopupBottom"
			:type="popType"
			@hidePopup="hidePopup"
			>
			<view class="quan-pop-box">
				<scroll-view class="quan-box" scroll-y>
					<view class="quan-con">
						<view class="un-use-box">
							<view class="un-use-text">不使用优惠券</view>
							<view class="radio-con">
								<text class="xpos-font xpos-radio kong">&#xecee;</text>
								<text class="xpos-font xpos-radio checked">&#xec3b;</text>
							</view>
						</view>
						<xpos-quan-item></xpos-quan-item>
						<view class="white-block"></view>
						<xpos-quan-item></xpos-quan-item>
						<view class="white-block"></view>
						<xpos-quan-item :isUnuse="true"></xpos-quan-item>
						<view class="white-block"></view>
						<xpos-quan-item :isUnuse="true"></xpos-quan-item>
					</view>
				</scroll-view>
			</view>
		</xpos-popup>
		
		<!-- 扫码支付 -->
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
		
		<!-- 底部固定按钮 -->
		<view class="fixed-btn-con">
			<view class="xpos-font font-btn" hover-class="hover-class" @click="backHandler">&#xe616;</view>
			<view class="pay-btn btn" hover-class="hover-class" @click="openPayTypeHandler">确认支付</view>
		</view>
	</view>
</template>

<script>
	import xposCommonMixins from '../../components/xpos-common-mixins.vue';
	import xposCancel from '../../components/xpos-cancel.vue';
	import xposPopup from '../../components/xpos-popup.vue';
	import xposQuanItem from '../../components/xpos-quan-item.vue';
	
	export default {
		mixins: [xposCommonMixins],
		components: {
			xposQuanItem,
			xposCancel,
			xposPopup,
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
				showPopupBottom: false, // 优惠券显示
				popType: 'bottom',
				showPayTypePop: false, // 显示扫码支付
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
			openQuanHandler() {
				this.showPopupBottom = true;
				// this.scrollY = false;
			},
			hidePopup() {
				this.showPopupBottom = false;
				// this.scrollY = true;
			},
			backHandler() {
				uni.navigateBack({
					delta: 1
				});
			},
			// 隐藏扫码支付
			hidePayTypePopup() {
				this.showPayTypePop = false;
				// this.scrollY = true;
			},
			openPayTypeHandler() {
				this.showPayTypePop = true;
				// this.scrollY = false;
			},
			goPayResultPageHandler() {
				uni.navigateTo({
					url: '/pages/payResult/payResult'
				});
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
@import './quan.less';
</style>
