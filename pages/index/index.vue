<template>
	<view class="index-page-box page-box">
		<swiper class="swiper" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
			<swiper-item>
				<view class="swiper-item">
					<image class="logo" src="/static/index/index.jpg"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="logo" src="/static/index/index.jpg"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="logo" src="/static/index/index.jpg"></image>
				</view>
			</swiper-item>
		</swiper>
		<button class="start-btn" hover-class="hover-class" @click="goChoosePageHandler">点击开始自助收银结算</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				autoplay: true, // 是否自动切换
				interval: 2000, // 自动切换时间间隔
				duration: 1000, // 滑动动画时长
				circular: true, // 是否采用衔接滑动
			}
		},
		methods: {
			goChoosePageHandler() {
				uni.navigateTo({
					url: '/pages/choose/choose'
				});
			}
		}
	}
</script>

<style>
	.index-page-box {
		background: -webkit-radial-gradient(#fff, #eeeeee);
		background: -o-radial-gradient(#fff, #eeeeee);
		background: -moz-radial-gradient(#fff, #eeeeee);
		background: radial-gradient(#fff, #eeeeee);
	}
	
	.swiper {
		width: 100%;
		height: 100%;
	}
	
	.swiper-item {
		width: 100%;
		height: 100%;
	}

	.logo {
		width: 100%;
		height: 100%;
		display: block;
	}

	.start-btn {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 28upx;
		width: 96%;
		line-height: 3;
		color: #fff;
		background: linear-gradient(left, #6de42b, #5daf30);
		box-shadow: darkgrey 0 0 20upx 5upx;
	}
</style>
