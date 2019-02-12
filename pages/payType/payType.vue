<template>
	<view class="payType-page-box page-box">
		<view class="user-img-con" hover-class="hover-class">
			<image @click="goPayResultPageHandler" mode="widthFix" src="/static/alipay.png"></image>
		</view>
		<view class="split"></view>
		<view class="user-img-con" hover-class="hover-class">
			<image @click="goPayResultPageHandler" mode="widthFix" src="/static/weixin.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			goPayResultPageHandler() {
				uni.navigateTo({
					url: '/pages/payResult/payResult'
				});
			}
		}
	}
</script>

<style>
	.payType-page-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #f8f8f8;
	}
	
	.user-img-con {
		width: 45%;
	}
	
	.user-img-con image {
		border-radius: 78upx;
		width: 100%;
		display: block;
		box-shadow: darkgrey 0 0 25upx 5upx;
	}

	.split {
		height: 10%;
	}
</style>
