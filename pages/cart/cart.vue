<template>
	<view class="cart-page-box page-box" style="background: url(../../static/bgx.jpg);background-size:cover;" @click="allClickHandler">
		<scroll-view 
			class="goods-scroll" 
			scroll-y="scrollY">
			<view class="goods-item-box">
				<view class="white-block-120"></view>
				<!-- <view class="member-info">
					<view class="user-name-con" @click="hideKeyHandler">
						<text class="title">会员：</text>
						<text class="user-name-text">张三张三是</text>
					</view>
				</view> -->
				<!-- <input class="uni-input" :focus="isFocus" type="text" placeholder="自动获得焦点" @focus="inputOnFocusHandler" @blur="blurHandler"/> -->
				<!-- <button>失去焦点</button> -->
				<!-- <button @click="focusHandler">获取焦点</button> -->
				<!-- <view class="web-view-box">
					<web-view src="../../hybrid/html/local.html"></web-view>
				</view> -->
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
		</scroll-view>
		
		<!-- 底部固定按钮 -->
		<view class="order-detail-fixed">
			<view class="order-detail-con">
				<view class="order-detail-left">
					<view class="left-top" @click="showGoodsPopHandler">
						<view class="left-top-price">
							<text class="total-price">¥90.90</text>
						</view>
						<view class="left-top-amount">
							<text class="total-amount">(共<text>5</text>件)</text>
						</view>
					</view>
					<view class="left-bottom">
						<text class="yh">已优惠：<text>¥17.70</text></text>
					</view>
				</view>
				<view class="order-detail-right">
					<view class="quan" hover-class="hover-class" @click="openQuanHandler">
						<text class="xpos-font">&#xe6b8;</text>
					</view>
					<view class="confirm-order-btn" hover-class="hover-class" @click="goToQuanPageHandler">
						<text>去结算</text>
					</view>
				</view>
			</view>
		</view>
		
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
		
		<!-- 商品简略信息 -->
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
		
		<!-- 会员登录 -->
		<view class="vip-fixed-box">
			<view class="vip-fixed-con">
				<view class="vip-box" @click="goToLoginPageHandler">
					<text class="xpos-font">&#xe693;</text>
					<text class="ml10">使用会员卡</text>
				</view>
				<view class="input-bar-box" @click="openBarDialogHandler">
					<text class="xpos-font">&#xe716;</text>
					<text class="ml10">输入条形码</text>
				</view>
			</view>
		</view>
		
		<!-- 输入条形码 -->
		<bar-dialog 
			ref="barDialog"
			@confirmButton="barDialogOnConfirmHander"
			>
			<view slot="title">
				<text class="xpos-font">&#xe716;</text>
			</view>
		</bar-dialog>
		
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
		
		<!-- 取消按钮 -->
		<xpos-cancel></xpos-cancel>
	</view>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	import xposPopup from '../../components/xpos-popup.vue';
	import xposQuanItem from '../../components/xpos-quan-item.vue';
	import xposCommonMixins from '../../components/xpos-common-mixins.vue';
	import xposCancel from '../../components/xpos-cancel.vue';
	import barDialog from './bar-dialog.vue';
	
	// 混入
	import barDialogHandler from './barDialog.js';
	
	export default {
		mixins: [xposCommonMixins, barDialogHandler],
		components: {
			xposPopup,
			xposQuanItem,
			xposCancel,
			barDialog
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
				isFocus: false,
				focusTimer: '',
				childWin: '',
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
				// this.scrollY = false;
			},
			hidePopup() {
				this.showPopupBottom = false;
				// this.scrollY = true;
			},
			openPayTypeHandler() {
				this.showPayTypePop = true;
				// this.scrollY = false;
			},
			hidePayTypePopup() {
				this.showPayTypePop = false;
				// this.scrollY = true;
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
			inputOnFocusHandler(e) {
				// console.log('focus', e.detail.value);
				uni.hideKeyboard();
			},
			hideKeyHandler() {
				uni.hideKeyboard();
			},
			focusHandler() {
				this.isFocus = true;
			},
			blurHandler() {
				console.log('失去焦点');
				this.isFocus = false;
// 				this.focusTimer = setTimeout(() => {
// 					this.isFocus = true;
// 				}, 0);
			},
			allClickHandler(e) {
				console.log('点击全局');
				this.isFocus = true;
				// this.childWin.show(); // 显示窗口
			},
			goToLoginPageHandler() {
				uni.navigateTo({
					url: '/pages/login/login'
				});
			},
			openBarDialogHandler() {
				console.log('dd', this.$refs);
				this.$refs.barDialog.__show();
			},
			goToQuanPageHandler() {
				uni.navigateTo({
					url: '/pages/quan/quan'
				});
			}
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
			this.stopCancelDuration();
		},
		onHide() {
			console.log('cart onHide');
			this.stopCancelDuration();
		},
		onReady() {
			this.startCancelDuration();
			this.hideKeyHandler();
			this.isFocus = true;
			
			// #ifdef  APP-PLUS
			console.log('123eee');
// 			this.childWin = plus.webview.create('/hybrid/html/onkey.html', '', {
// 				width: '50%',
// 				height: '30%',
// 				// top: '-50px',
// 				margin: 'auto',
// 				zindex: 1000,
// 			});
// 			this.childWin.show(); // 显示窗口
// 			plus.webview.currentWebview().addEventListener('message', (c) => {
// 				console.log(c);
// 			})
			// console.log(JSON.stringify(plus.webview.currentWebview()));
			// console.log(plus.webview.currentWebview());
			// 监听键按下事件
			plus.key.addEventListener("volumeupbutton",function(e){
				console.log("volumeupbutton: "+e.keyCode);
				uni.showToast({
					title: "volumeupbutton: "+e.keyCode,
					duration: 2000
				});
			},true);
			// 监听键松开事件
// 			plus.key.addEventListener("keyup",function(e){
// 				console.log("keyup: "+e.keyCode);
// 				uni.showToast({
// 					title: "keyup: "+e.keyCode,
// 					duration: 2000
// 				});
// 			},true);
// 			// 监听长按键事件
// 			plus.key.addEventListener("longpressed",function(e){
// 				console.log("longpressed: "+e.keyCode);
// 				uni.showToast({
// 					title: "longpressed: "+e.keyCode,
// 					duration: 2000
// 				});
// 			},true);
// 			plus.key.addEventListener("backbutton",function(e){
// 				console.log("backbutton: "+e.keyCode);
// 				uni.showToast({
// 					title: "backbutton: "+e.keyCode,
// 					duration: 2000
// 				});
// 			},true);
// 			plus.key.addEventListener("keydown", function(e){
// 				console.log(e)
// 				alert( "keydown Key pressed!", String.fromCharCode(e.keyCode));
// 			});
			// #endif
		},
// 		updated(e) {
// 			console.log(e);
// 		},
// 		beforeUpdate(e) {
// 			if (this.isFocus == false) {
// 				this.isFocus = true;
// 			}
// 		},

}
</script>

<style lang="less">
	@import './cart.less';
</style>
