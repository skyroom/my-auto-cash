<template>
	<view class="cancel-box">
		<view class="cancel-btn" hover-class="hover-class" @click="showConfirmHandler">
			<text>
				取消交易(
				<text v-text="cancelDuration"></text>
				秒)
			</text>
		</view>
		<xpos-dialog 
			ref="cancelDialog"
			:title="title"
			showCancelButton
			@confirmButton="clickConfirmButtonHandler"
			>
			<text slot="title">确定要取消交易吗？</text>
		</xpos-dialog>
	</view>
</template>

<script>
	import xposDialog from '../components/xpos-dialog.vue';
	import { cancelDuration } from '../common/config.js';
	
	export default {
		name: 'xpos-cancel',
		props: {
			cancelDuration: {
				type: Number,
				default: cancelDuration
			},
		},
		components: {
			xposDialog,
		},
		data() {
			return {
				title: '确定要取消交易吗？',
			}
		},
		computed: {
			
		},
		methods: {
			showConfirmHandler() {
				this.$refs.cancelDialog.__show();
			},
			clickConfirmButtonHandler() {
				uni.navigateTo({
					url: '/pages/index/index'
				});
			},
		},
		mounted() {
			console.log('cancel mounted');
		},
		onLoad() {
			console.log('cancel onLoad');
		},
		onUnload(){
			console.log('cancel onUnload');
		},
		onHide() {
			console.log('cancel onHide');
		}
	}
</script>

<style lang="less">
	@import '~@/common/var.less';
	
	.cancel-box {
		position: fixed;
		top: var(--status-bar-height);
		right: 0;
		.cancel-btn {
			background: linear-gradient(right, #6de42b, #479e17);
			// background-color: #479e17;
			display: inline-block;
			padding: 20upx 40upx 20upx 40upx;
			border-bottom-left-radius: 35upx; 
			border-top-left-radius: 35upx; 
			color: #fff;
			font-size: 30upx;
		}
	}
</style>
