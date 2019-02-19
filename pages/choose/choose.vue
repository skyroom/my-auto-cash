<template>
	<view class="choose-page-box page-box">
		<view class="user-img-con" hover-class="hover-class">
			<image @click="goCartPageHandler" mode="widthFix" src="/static/choose/user_vip.png"></image>
		</view>
		<view class="split"></view>
		<view class="user-img-con" hover-class="hover-class">
			<image @click="goCartPageHandler" mode="widthFix" src="/static/choose/user_normal.png"></image>
		</view>
	</view>
</template>

<script>
	import globalTimer from '../../components/global-timer.vue';
	
	export default {
		mixins: [globalTimer],
		data() {
			return {

			};
		},
		methods: {
			goCartPageHandler() {
				uni.navigateTo({
					url: '/pages/cart/cart'
				});
			}
		},
		onHide() {
			clearTimeout(this.gTimer);
			console.log('choose onHide');
		}
	}
</script>

<style>
	/* @import '../../common/commonStyles.scss'; */
	
	.choose-page-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #f8f8f8;
	}
	
	.user-img-con {
		width: 60%;
	}
	
	.user-img-con image {
		border-radius: 20upx;
		width: 100%;
		display: block;
		box-shadow: darkgrey 0 0 25upx 5upx;
	}

	.split {
		height: 10%;
	}
</style>
